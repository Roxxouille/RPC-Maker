<?php

namespace App\Controller\Api;

use App\Entity\Command;
use App\Repository\CommandRepository;
use App\Repository\ItemRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CommandController extends AbstractController
{
    /**
     * @Route("/commands", name="command_browse", methods = "GET")
     */
    public function browse(CommandRepository $commandRepository)
    {
        //get the commands data from the database
        $data = $commandRepository->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'command']);
    }

    /**
     * @Route("/command/{slug}", name="command_read", methods="GET")
     */
    public function read(CommandRepository $commandRepository, Command $command = null)
    {
        //send a 404 error if the command does not exist
        if ($command === null) {
            return $this->json(['error' => 'commande non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the data of one command from the database
        $data = $commandRepository->findOneByUser($command);

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'command']);
    }

    /**
     * @Route("/command/{slug}/info", name="command_info", methods="GET")
     */
    public function getInfos(CommandRepository $commandRepository, Command $command = null)
    {
        if ($command === null) {
            return $this->json(['error' => 'commande non trouvé'], Response::HTTP_NOT_FOUND);
        }

        $data = $commandRepository->findOneByUser($command);

        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'command_info']);
    }

    /**
     * @Route("/command/{slug}", name="command_edit", methods={"PUT", "PATCH"})
     */
    public function edit(ItemRepository $itemRepo, Command $command = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {

        //send a 404 error if the command does not exist
        if ($command === null) {
            return $this->json(['error' => 'commande non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the request content (info about new user)
        //transform it into an object user and replace the data
        //get the validations errors if there is any
        $content = $request->getContent();
        $updatedCommand = $serializer->deserialize($content, Command::class, 'json', ['object_to_populate' => $command]);
        $errors = $validator->validate($updatedCommand);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //Edit the updatedat vlue to the current time
        $command->setUpdatedAt(new \DateTime());

        $contentDecode = json_decode($content, true);
        $itemId = $contentDecode['item_id'];
        $command->addItem($itemRepo->find($itemId));


        //save the new data to the database
        $em->flush();

        // Send a Json response 
        return $this->json(['status' => 'command edited'], Response::HTTP_OK);
    }

    /**
     * @Route("/command", name="command_add", methods="POST")
     */
    public function add(UserRepository $userRepo, Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {

        //get the request content (info about new command)
        //transform it into an object command
        //get the validations errors if there is any
        $content = $request->getContent();
        $command = $serializer->deserialize($content, Command::class, 'json');
        $errors = $validator->validate($command);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //transform the content of the request in an object
        //get the id of the user
        //find the user correspondant to the id
        //set this user to the command
        $user = $this->getUser();

        //send a 404 error if the command does not exist
        if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        $command->setUser($user);

        //persist the new command in the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($command);
        $entityManager->flush();

        // Send a Json response 
        return $this->json(['status' => 'La commande a bien ete cree'], Response::HTTP_CREATED);
    }

    /**
     * @Route("/command/{slug}", name="command_delete", methods="DELETE")
     */
    public function delete(Command $command = null, EntityManagerInterface $em)
    {
        //send a 404 error if the command does not exist
        if ($command === null) {
            return $this->json(['error' => 'commande non trouve'], Response::HTTP_NOT_FOUND);
        }

        // get the command from the url and remove it from the database
        $em->remove($command);
        $em->flush();

        //send a json response
        return $this->json(['message' => 'commande supprime'], Response::HTTP_OK);
    }

    /**
     * @Route("/command/{slug}/data", name="command_data", methods="GET")
     */
    public function sendCommandData(Command $command, CommandRepository $commandRepo, ItemRepository $itemRepository)
    {
        //send a 404 error if the command does not exist
        if ($command === null) {
            return $this->json(['error' => 'commande non trouve'], Response::HTTP_NOT_FOUND);
        }

        // getting the data of the command
        $data = $commandRepo->find($command)->getData();

        $dataToSend['username'] = "Salut ! Je suis " . $data['username'] . '. ';

        if (!empty($data['budget'] == 'yes')) {
            if (!empty($data['amount'])) {
                $dataToSend['budget'] = "J'ai un budget de : " . $data['amount'];
            }
            if (!empty($data['gap']) && array_key_exists('budget', $dataToSend)) {
                $dataToSend['budget'] .= ", avec une marge de :" . $data['gap'];
            }
        }

        if (!empty($data['utilisation'])) {
            $dataToSend['utilisation'] = "J'utiliserais ce pc pour du " . $data['utilisation'];
        }
        // config part of the data
        if ($data['preconfiguration'] == "yes") {
            // message for the config
            $dataToSend['config']['message'] = "J'ai déjà des idées de pièces tel que : ";

            // processor 
            if (!empty($data['config_proc_model'])) {
                $dataToSend['config']['proc'] = "Ce processeur : " . $data['config_proc_model'];
                if (!empty($data['config_proc_link'])) {
                    $dataToSend['config']['proc'] .= " le lien : " . $data['config_proc_link'];
                }
            } else {
                if (!empty($data['config_proc'])) {
                    $proc = $itemRepository->findBy(['name' => $data['config_proc']]);
                    $dataToSend['config']['proc'] = "Ce processeur : " . $proc[0]->getName() . " le lien : " . $proc[0]->getUrl();
                }
            }

            // motherboard
            if (!empty($data['config_board_model'])) {
                $dataToSend['config']['board'] = "Cette carte mère : " . $data['config_board_model'];
                if (!empty($data['config_board_link'])) {
                    $dataToSend['config']['board'] .= " le lien : " . $data['config_board_link'];
                }
            } else {
                if (!empty($data['config_board'])) {
                    $board = $itemRepository->findBy(['name' => $data['config_board']]);
                    $dataToSend['config']['board'] = "Cette carte mère  : " . $board[0]->getName() . " le lien : " . $board[0]->getUrl();
                }
            }

            // graphic card
            if (!empty($data['config_cg_model'])) {
                $dataToSend['config']['cg'] = "Cette carte graphique : " . $data['config_cg_model'];
                if (!empty($data['config_cg_link'])) {
                    $dataToSend['config']['cg'] .= " le lien : " . $data['config_cg_link'];
                }
            } else {
                if (!empty($data['config_cg'])) {
                    $cg = $itemRepository->findBy(['name' => $data['config_cg']]);
                    $dataToSend['config']['cg'] = "Cette carte graphique : " . $cg[0]->getName() . " le lien : " . $cg[0]->getUrl();
                }
            }

            // ram
            if (!empty($data['config_ram_model'])) {
                $dataToSend['config']['ram'] = "Cette ram : " . $data['config_ram_model'];
                if (!empty($data['config_ram_link'])) {
                    $dataToSend['config']['ram'] .= " le lien : " . $data['config_ram_link'];
                }
            } else {
                if (!empty($data['config_ram'])) {
                    $ram = $itemRepository->findBy(['name' => $data['config_ram']]);
                    $dataToSend['config']['ram'] = "Cette ram : " . $ram[0]->getName() . " le lien : " . $ram[0]->getUrl();
                }
            }

            // ventirad
            if (!empty($data['config_refresh_model'])) {
                $dataToSend['config']['refresh'] = "Ce ventilateur : " . $data['config_refresh_model'];
                if (!empty($data['config_refresh_link'])) {
                    $dataToSend['config']['refresh'] .= " le lien : " . $data['config_refresh_link'];
                }
            } else {
                if (!empty($data['config_refresh'])) {
                    $refresh = $itemRepository->findBy(['name' => $data['config_refresh']]);
                    $dataToSend['config']['refresh'] = "Ce ventilateur : " . $refresh[0]->getName() . " le lien : " . $refresh[0]->getUrl();
                }
            }

            // hard drive
            if (!empty($data['config_storage_model'])) {
                $dataToSend['config']['storage'] = "Ce disque dur : " . $data['config_storage_model'];
                if (!empty($data['config_storage_link'])) {
                    $dataToSend['config']['storage'] .= " le lien : " . $data['config_storage_link'];
                }
            } else {
                if (!empty($data['config_storage'])) {
                    $storage = $itemRepository->findBy(['name' => $data['config_storage']]);
                    $dataToSend['config']['storage'] = "Ce disque dur : " . $storage[0]->getName() . " le lien : " . $storage[0]->getUrl();
                }
            }

            // boardsound
            if (!empty($data['config_boardsound_model'])) {
                $dataToSend['config']['boardsound'] = "Cette carte son : " . $data['config_boardsound_model'] . " le lien : " . $data['config_boardsound_link'];
                if (!empty($data['config_boardsound_link'])) {
                    $dataToSend['config']['boardsound'] .= " le lien : " . $data['config_boardsound_link'];
                }
            } else {
                if (!empty($data['config_boardsound'])) {
                    $boardsound = $itemRepository->findBy(['name' => $data['config_boardsound']]);
                    $dataToSend['config']['boardsound'] = "Cette carte son : " . $boardsound[0]->getName() . " le lien : " . $boardsound[0]->getUrl();
                }
            }

            // case
            if (!empty($data['config_case_model'])) {
                $dataToSend['config']['case'] = "Ce boiter: " . $data['config_case_model'] . " le lien : " . $data['config_case_link'];
                if (!empty($data['config_case_link'])) {
                    $dataToSend['config']['case'] .= " le lien : " . $data['config_case_link'];
                }
            } else {
                if (!empty($data['config_case'])) {
                    $case = $itemRepository->findBy(['name' => $data['config_case']]);
                    $dataToSend['config']['case'] = "Ce boiter: " . $case[0]->getName() . " le lien : " . $case[0]->getUrl();
                }
            }

            // power supply
            if (!empty($data['config_power_model'])) {
                $dataToSend['config']['power'] = "Cette alimentation : " . $data['config_power_model'] . " le lien : " . $data['config_power_link'];
                if (!empty($data['config_power_link'])) {
                    $dataToSend['config']['power'] .= " le lien : " . $data['config_power_link'];
                }
            } else {
                if (!empty($data['config_power'])) {
                    $power = $itemRepository->findBy(['name' => $data['config_power']]);
                    $dataToSend['config']['power'] = "Cette alimentation : " . $power[0]->getName() . " le lien : " . $power[0]->getUrl();
                }
            }
        } else {
            $dataToSend['config']['message'] = "Je n'ai pas d'idée prédéfinie concernant les pièces du pc. ";
        }


        // spec part of the data
        if (!empty($data['spec_important'])) {
            $dataToSend['spec']['important'] = "Le plus important pour moi est : " . $data['spec_important'];
        }

        if ($data['spec_sli'] == "yes") {
            $dataToSend['spec']['sli'] = "Je suis intéressé par le SLI ";
        }

        if ($data['spec_overclock'] == "yes") {
            $dataToSend['spec']['overclock'] = "Je suis intéressé par l'overclocking. ";
        }

        if (!empty($data['spec_storage'])) {
            $dataToSend['spec']['storage'] = "Je voudrais comme stockage du " . $data['spec_storage'];
        }

        if (!empty($data['spec_storage_quantity'])) {
            $dataToSend['spec']['storage'] .= ", d'au moins " . $data['spec_storage_quantity'] . ". ";
        }

        if ($data['spec_wifi'] == "yes") {

            $dataToSend['spec']['wifi'] = "Je suis intéréssé par une carte wifi, ";

            if ($data['spec_wifi_room'] == "yes") {
                $dataToSend['spec']['wifi'] .= "je me trouve dans la même pièce que le routeur, ";
            } else {
                $dataToSend['spec']['wifi'] .= "je ne me trouve pas dans la même pièce que le routeur, ";
            }

            if ($data['spec_fiber'] == "yes") {
                $dataToSend['spec']['wifi'] .= "et je possède la fibre ";
            } else {
                $dataToSend['spec']['wifi'] .= "et je ne possède pas la fibre ";
            }
        }

        if ($data['spec_sound'] == "yes") {
            if (!empty($data['spec_sound_utilisation'])) {
                $dataToSend['spec']['sound'] = "Je suis intéréssé par une carte son pour du " . $data['spec_sound_utilisation'] . ". ";
            }

            if (!empty($data['spec_sound_utilisation_other'])) {
                $dataToSend['spec']['sound'] .= " Précision : " . $data['spec_sound_utilisation_other'];
            }
        }

        if (!empty($data['spec_light'])) {
            $dataToSend['spec']['light'] = $data['spec_light'];
        }

        if ($data['os'] == "yes") {
            if (!empty($data['oschoice'])) {
                $dataToSend['spec']['os'] = "Je voudrais " . $data['oschoice'] . " comme systeme d'exploitation";

                if ($data['os_active'] == "yes") {
                    $dataToSend['spec']['os'] .= ", et je souhaiterais que vous me l'activez. ";
                } else $dataToSend['spec']['os'] .= ", et je l'activerais moi même. ";
            }

            if (!empty($data['os_name'])) {
                $dataToSend['spec']['os'] .= "Est ce que se serait possible d'avoir " . $data['os_name'] . " comme système d'exploitation.";
            }
        } else {
            $dataToSend['spec']['os'] = "Je ne souhaite pas de systeme d'exploiration. ";
        }

        // option part of data
        if (true /*$data['option'] == "yes"*/) {
            $dataToSend['option']['message'] = "Je souhaiterais ajouter quelques périphériques : ";

            if (!empty($data['option_screen_model'])) {
                $dataToSend['option']['screen']['message'] = "Cet écran : " . $data['option_screen_model'];
                if (!empty($data['option_screen_link'])) {
                    $dataToSend['option']['screen']['message'] .= " le lien : " . $data['option_screen_link'];
                }
            } else {
                if (!empty($data['option_screen'])) {
                    $screen = $itemRepository->findBy(['name' => $data['option_screen']]);
                    $dataToSend['option']['screen']['message'] = "Cet écran : " . $screen[0]->getName() . " le lien : " . $screen[0]->getUrl();
                }
            }
            if (!empty($data['option_screen_size'])) {
                $dataToSend['option']['screen']['size'] = "Je voudrais que l'écran fasse " . $data['option_screen_size'];
            }
            if (!empty($data['option_screen_res'])) {
                $dataToSend['option']['screen']['res'] = "Je voudrais que l'écran ait une résolution de " . $data['option_screen_res'];
            }

            if (!empty($data['option_keyboard_model'])) {
                $dataToSend['option']['keyboard']['message'] = "Ce clavier : " . $data['option_keyboard_model'];
                if (!empty($data['option_keyboard_link'])) {
                    $dataToSend['option']['keyboard']['message'] .= " le lien : " . $data['option_keyboard_link'];
                }
            } else {
                if (!empty($data['option_keyboard'])) {
                    $keyboard = $itemRepository->findBy(['name' => $data['option_keyboard']]);
                    $dataToSend['option']['keyboard']['message'] = "Ce clavier : " . $keyboard[0]->getName() . " le lien : " . $keyboard[0]->getUrl();
                }
            }
            if (!empty($data['option_keyboard_type'])) {
                $dataToSend['option']['keyboard']['type'] = "Je voudrais que le clavier soit du type " . $data['option_keyboard_type'];
            }
            if (!empty($data['option_keyboard_switch'])) {
                $dataToSend['option']['keyboard']['switch'] = "Je voudrais que le clavier ait des switchs  " . $data['option_keyboard_switch'];
            }
            if (!empty($data['option_keyboard_language'])) {
                $dataToSend['option']['keyboard']['language'] = "Je voudrais que le clavier soit en " . $data['option_keyboard_language'];
            }


            if (!empty($data['option_mouse_model'])) {
                $dataToSend['option']['mouse']['message'] = "Cette souris : " . $data['option_mouse_model'];
                if (!empty($data['option_mouse_link'])) {
                    $dataToSend['option']['mouse']['message'] .= " le lien : " . $data['option_mouse_link'];
                }
            } else {
                if (!empty($data['option_mouse'])) {
                    $mouse = $itemRepository->findBy(['name' => $data['option_mouse']]);
                    $dataToSend['option']['mouse']['message'] = "Cette souris : " . $mouse[0]->getName() . " le lien : " . $mouse[0]->getUrl();
                }
            }
            if (!empty($data['option_mouse_type'])) {
                $dataToSend['option']['mouse']['type'] = "Je voudrais que la souris soit du type  " . $data['option_mouse_type'];
            }
            if (!empty($data['option_mouse_filaire'])) {
                if ($data['option_mouse_filaire'] == "Oui") {
                    $dataToSend['option']['mouse']['filaire'] = "Je voudrais une souris filaire";
                } else {
                    $dataToSend['option']['mouse']['filaire'] = "Je voudrais une souris sans fil";
                }
            }

            if (!empty($data['option_mousepad_model'])) {
                $dataToSend['option']['mousepad']['message'] = "Ce tapis de souris : " . $data['option_mousepad_model'];
                if (!empty($data['option_mousepad_link'])) {
                    $dataToSend['option']['mousepad']['message'] .= " le lien : " . $data['option_mousepad_link'];
                }
            } else {
                if (!empty($data['option_mousepad'])) {
                    $mousepad = $itemRepository->findBy(['name' => $data['option_mousepad']]);
                    $dataToSend['option']['mousepad']['message'] = "Ce tapis de souris : " . $mousepad[0]->getName() . " le lien : " . $mousepad[0]->getUrl();
                }
            }
            if (!empty($data['option_mousepad_type'])) {
                $dataToSend['option']['mousepad']['type'] = "Je voudrais que le tapis de souris soit " . $data['option_mousepad_type'];
            }
            if (!empty($data['option_mousepad_size'])) {
                $dataToSend['option']['mousepad']['size'] = "Je voudrais que le tapis de souris ait une taille " . $data['option_mousepad_size'];
            }

            if (!empty($data['option_headphone_model'])) {
                $dataToSend['option']['headphone']['message'] = "Ce casque : " . $data['option_headphone_model'];
                if (!empty($data['option_headphone_link'])) {
                    $dataToSend['option']['headphone']['message'] .= " le lien : " . $data['option_headphone_link'];
                }
            } else {
                if (!empty($data['option_headphone'])) {
                    $headphone = $itemRepository->findBy(['name' => $data['option_headphone']]);
                    $dataToSend['option']['headphone']['message'] = "Ce casque : " . $headphone[0]->getName() . " le lien : " . $headphone[0]->getUrl();
                }
            }
            if (!empty($data['option_headphone_type'])) {
                $dataToSend['option']['headphone']['type'] = "Je voudrais que le casque soit de type " . $data['option_headphone_type'];
            }
            if (!empty($data['option_headphone_size'])) {
                $dataToSend['option']['headphone']['size'] = "Je voudrais que le casque soit de taille " . $data['option_headphone_size'];
            }

            if (!empty($data['option_enceinte_model'])) {
                $dataToSend['option']['enceinte']['message'] = "Cette enceinte : " . $data['option_enceinte_model'];
                if (!empty($data['option_enceinte_link'])) {
                    $dataToSend['option']['enceinte']['message'] .= " le lien : " . $data['option_enceinte_link'];
                }
            } else {
                if (!empty($data['option_enceinte'])) {
                    $enceinte = $itemRepository->findBy(['name' => $data['option_enceinte']]);
                    $dataToSend['option']['enceinte']['message'] = "Cette enceinte : " . $enceinte[0]->getName() . " le lien : " . $enceinte[0]->getUrl();
                }
            }
            if (!empty($data['option_enceinte_type'])) {
                $dataToSend['option']['enceinte']['type'] = "Je voudrais  " . $data['option_enceinte_type'];
            }
            if (!empty($data['option_enceinte_bass'])) {
                if ($data['option_enceinte_bass'] == "Oui") {
                    $dataToSend['option']['enceinte']['bass'] = "Je voudrais des basses";
                } else {
                    $dataToSend['option']['enceinte']['bass'] = "Je voudrais pas de basses";
                }
            }

            if (!empty($data['option_webcam_model'])) {
                $dataToSend['option']['webcam']['message'] = "Cette webcam : " . $data['option_webcam_model'];
                if (!empty($data['option_webcam_link'])) {
                    $dataToSend['option']['webcam']['message'] .= " le lien : " . $data['option_webcam_link'];
                }
            } else {
                if (!empty($data['option_webcam'])) {
                    $webcam = $itemRepository->findBy(['name' => $data['option_webcam']]);
                    $dataToSend['option']['webcam']['message'] = "Cette webcam : " . $webcam[0]->getName() . " le lien : " . $webcam[0]->getUrl();
                }
            }
            if (!empty($data['option_webcam_res'])) {
                $dataToSend['option']['webcam']['res'] = "Je voudrais que la webcam ait une résolution de " . $data['option_webcam_res'];
            }

            if (!empty($data['option_printer_model'])) {
                $dataToSend['option']['printer']['message'] = "Cette imprimante : " . $data['option_printer_model'];
                if (!empty($data['option_printer_link'])) {
                    $dataToSend['option']['printer']['message'] .= " le lien : " . $data['option_printer_link'];
                }
            } else {
                if (!empty($data['option_printer'])) {
                    $printer = $itemRepository->findBy(['name' => $data['option_printer']]);
                    $dataToSend['option']['printer']['message'] = "Cette imprimante : " . $printer[0]->getName() . " le lien : " . $printer[0]->getUrl();
                }
            }
            if (!empty($data['option_printer_type'])) {
                $dataToSend['option']['printer']['type'] = "Je voudrais  que l'imprimante soit de type " . $data['option_printer_type'];
            }
        }

        return $this->json($dataToSend, Response::HTTP_OK);
    }
}
