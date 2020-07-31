<?php

namespace App\Controller\Api;

use App\Entity\Command;
use App\Repository\CommandRepository;
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
     * @Route("api/commands", name="command_browse", methods = "GET")
     */
    public function browse(CommandRepository $commandRepository)
    {
        //get the commands data from the database
        $data = $commandRepository->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'command']);
    }

    /**
     * @Route("api/command/{slug}", name="command_read", methods="GET")
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
     * @Route("api/command/{slug}", name="command_edit", methods={"PUT", "PATCH"})
     */
    public function edit(Command $command = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
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

        //save the new data to the database
        $em->flush();

        // Send a Json response 
        return $this->json(['status' => 'command edited'], Response::HTTP_OK);
    }

    /**
     * @Route("api/command", name="command_add", methods="POST")
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
     * @Route("api/command/{slug}", name="command_delete", methods="DELETE")
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
     * @Route("api/command/{slug}/data", name="command_data", methods="GET")
     */
    public function sendCommandData(Command $command, CommandRepository $commandRepo)
    {
        //send a 404 error if the command does not exist
        if ($command === null) {
            return $this->json(['error' => 'commande non trouve'], Response::HTTP_NOT_FOUND);
        }

        // getting the data of the command
        $data = $commandRepo->find($command)->getData();

        $firstMessage = "Salut ! Je suis " . $data['surname'] . '. ';

        // config part of the data
        if($data['config'] == "yes"){
            
            $firstMessage .= "J'ai déjà des idées de pièces : ";

            if($data['config_proc'] == "yes"){
                $firstMessage .= "je voudrais ce processeur : " . $data['config_proc_model'] . " le lien : " . $data['config_proc_link'];
            }

            if($data['config_board'] == "yes"){
                $firstMessage .= "je voudrais cette carte mère : " . $data['config_board_model'] . " le lien : " . $data['config_board_link'];
            }
            
            if($data['config_gc'] == "yes"){
                $firstMessage .= "je voudrais cette carte graphique : " . $data['config_gc_model'] . " le lien : " . $data['config_gc_link'];
            }
            
            if($data['config_ram'] == "yes"){
                $firstMessage .= "je voudrais cette ram : " . $data['config_ram_model'] . " le lien : " . $data['config_ram_link'];
            }

            if($data['config_refresh'] == "yes"){
                $firstMessage .= "je voudrais ce systeme de refroidissement : " . $data['config_refresh_model'] . " le lien : " . $data['config_refresh_link'];
            }

            if($data['config_storage'] == "yes"){
                $firstMessage .= "je voudrais ce stockage : " . $data['config_storage_model'] . " le lien : " . $data['config_storage_link'];
            }

            if($data['config_boardsound'] == "yes"){
                $firstMessage .= "je voudrais cette carte son : " . $data['config_boardsound_model'] . " le lien : " . $data['config_boardsound_link'];
            }

            if($data['config_case'] == "yes"){
                $firstMessage .= "je voudrais ce boitier: " . $data['config_case_model'] . " le lien : " . $data['config_case_link'];
            }

            if($data['config_power'] == "yes"){
                $firstMessage .= "je voudrais cette alimentation : " . $data['config_power_model'] . " le lien : " . $data['config_power_link'];
            }

        } else {
            $firstMessage .= "Je n'ai pas d'idée prédéfinie concernant les pièces du pc. ";
        }
        

        // spec part of the data
        $secondMessage = '';
        if($data['spec_sli'] == "yes"){
            $secondMessage .= "Je suis intéressé par le SLI ";
        }

        if($data['spec_overclock'] == "yes"){
            $secondMessage .= "Je suis intéressé par l'overclocking. ";
        }

        $secondMessage .= "Je voudrais comme stockage du " . $data['spec_storage'] . ", d'au moins " . $data['spec_storage_quantity'] . ". ";

        if($data['spec_wifi'] == "yes"){

            $secondMessage .= "Je suis intéréssé par une carte wifi, ";

            if($data['spec_wifi_room'] == "yes"){
                $secondMessage .= "je me trouve dans la même pièce que le routeur, ";
            } else {
                $secondMessage .= "je ne me trouve pas dans la même pièce que le routeur, ";
            }

            if($data['spec_fiber'] == "yes"){
                $secondMessage .= "je possède la fibre ";
            } else {
                $secondMessage .= "je ne possède pas la fibre ";
            }
        }

        if($data['spec_sound'] == "yes"){

            $secondMessage .= "Je suis intéréssé par une carte son pour du " . $data['spec_sound_utilisation'] . ". ";

            if(!empty($data['spec_sound_utilisation_other'])){
                $secondMessage .= " Précision : " . $data['spec_sound_utilisation_other'];
            }
        }

        if($data['spec_light'] == "yes"){
            $secondMessage .= "Je suis intéréssé par les LED. ";
        } else {
            $secondMessage .= "Je ne suis pas intéréssé par les LED. ";
        }

        if($data['os'] == "yes"){
            $secondMessage .= "Je voudrais " . $data['os_name'] . " comme systeme d'exploitation. ";

            if($data['os_active'] == "yes"){
                $secondMessage .= "Et je souhaiterais que vous me l'activez. ";
            }
        } else {
            $secondMessage .= "Je ne souhaite pas de systeme d'exploiration. ";
        }

        // option part of data
        $thirdMessage = '';
        if($data['option'] == "yes"){
            $thirdMessage .= "Je souhaiterais ajouter quelques périphériques : ";

            if($data['option_screen'] == "yes"){
                if(!empty($data['option_screen_model'])){
                    $thirdMessage .= "Je voudrais cet écran : " . $data['option_screen_model'];
                } else {
                    $thirdMessage .= "Je voudrais un écran de taille : " . $data['option_screen_size'] . " avec une résolution de : ". $data['option_screen_res'];
                }
            }

            if($data['option_keyboard'] == "yes"){
                if(!empty($data['option_keyboard_model'])){
                    $thirdMessage .= "Je voudrais ce clavier : " . $data['option_keyboard_model'];
                } else {
                    $thirdMessage .= "Je voudrais un clavier de type: " . $data['option_keyboard_type'] . " avec des switch : ". $data['option_keyboard_switch'] . " en ". $data['option_keyboard_language'];
                }
            }

            if($data['option_mouse'] == "yes"){
                if(!empty($data['option_mouse_model'])){
                    $thirdMessage .= "Je voudrais cette souris : " . $data['option_mouse_model'];
                } else {
                    $thirdMessage .= "Je voudrais une souris de type: " . $data['option_mouse_type'];
                    if($data['option_mouse_filaire']){
                        $thirdMessage .= "et qu'elle soit fillaire";
                    }
                    $thirdMessage .= ". ";
                }
            }

            if($data['option_mousepad'] == "yes"){
                if(!empty($data['option_mousepad_model'])){
                    $thirdMessage .= "Je voudrais ce tapis de souris : " . $data['option_mousepad_model'];
                } else {
                    $thirdMessage .= "Je voudrais un tapis de souris de type : " . $data['option_mousepad_type'] . " et de taille : ". $data['option_mousepad_size'];
                }
            }

            if($data['option_headphone'] == "yes"){
                if(!empty($data['option_headphone_model'])){
                    $thirdMessage .= "Je voudrais ce casque : " . $data['option_headphone_model'];
                } else {
                    $thirdMessage .= "Je voudrais un casque de type : " . $data['option_headphone_type'] . " et de taille : ". $data['option_headphone_size'];
                }
            }

            if($data['option_enceinte'] == "yes"){
                if(!empty($data['option_enceinte_model'])){
                    $thirdMessage .= "Je voudrais cette enceinte : " . $data['option_enceinte_model'];
                } else {
                    $thirdMessage .= "Je voudrais une enceinte de type : " . $data['option_enceinte_type'] . " et de basse : ". $data['option_enceinte_bass'];
                }
            }

            if($data['option_webcam'] == "yes"){
                if(!empty($data['option_webcam_model'])){
                    $thirdMessage .= "Je voudrais cette webcam : " . $data['option_webcam_model'];
                } else {
                    $thirdMessage .= "Je voudrais une webcam de résolution : " . $data['option_webcam_res'];
                }
            }

            if($data['option_printer'] == "yes"){
                if(!empty($data['option_printer_model'])){
                    $thirdMessage .= "Je voudrais cette imprimante : " . $data['option_printer_model'];
                } else {
                    $thirdMessage .= "Je voudrais une imprimante de type : " . $data['option_printer_type'];
                }
            }

        }

        return $this->json(
            [
                'firstMessage' => $firstMessage,
                'secondMessage' => $secondMessage,
                'thirdMessage' => $thirdMessage
            ], 
            Response::HTTP_OK
        );
    }
}
