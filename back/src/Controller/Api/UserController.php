<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Avatar;
use App\Entity\Command;
use App\Entity\CommandConfigData;
use App\Entity\CommandData;
use App\Entity\CommandDeviceData;
use App\Entity\CommandSpecData;
use App\Repository\StatusRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("/users", name="user_browse", methods = "GET")
     */
    public function browse(UserRepository $userRepository)
    {
        // get the data of all the users
        $data = $userRepository->findAll();

        //send it in json
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'user']);
    }

    /**
     * @Route("/user/{slug}", name="user_read", methods="GET")
     */
    public function read(User $user = null)
    {
        //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        //send it in json
        return $this->json($user, Response::HTTP_OK, [], ['groups' => 'user']);
    }

    /**
     * @Route("/user/{slug}", name="user_edit", methods={"PUT", "PATCH"})
     */
    public function edit(User $user = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        //check if the user received in the request exist
        if ($user === null) {
            return $this->json(['error' => 'utiisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the request content (info about new user)
        //transform it into an object user and replace the data
        //get the validations errors if there is any
        $content = $request->getContent();
        $updatedUser = $serializer->deserialize($content, User::class, 'json', ['object_to_populate' => $user]);
        $errors = $validator->validate($updatedUser, null, ['edit-profile']);

        // if there is errors, return them in a json format

        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //Edit the updatedat vlue to the current time
        $user->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->json(['status' => 'user edited'], Response::HTTP_OK);
    }

    /**
     * @Route("/user", name="user_add", methods="POST")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder, MailerInterface $mailer, UserRepository $userRepository, StatusRepository $statusRepository)
    {

        // Get the content of the request
        $content = $request->getContent();

        // Match the content with their entity
        $user = $serializer->deserialize($content, User::class, 'json');
        $commandData = $serializer->deserialize($content, CommandData::class, 'json');
        $commandConfigData = $serializer->deserialize($content, CommandConfigData::class, 'json');
        $commndSpecData = $serializer->deserialize($content, CommandSpecData::class, 'json');
        $commandDeviceData = $serializer->deserialize($content, CommandDeviceData::class, 'json');

        // Check the user content to see if it's valid
        $errorsArray = [];
        $errorsUser = $validator->validate($user, null, ['registration']);

        // if there is an error, return them in a json format
        if (count($errorsUser) > 0) {
            foreach ($errorsUser as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }
        }
        if (count($errorsArray) > 0) {
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // get the clear password wrote bye the user
        // encode it
        // set the encoded password to user
        $passwordClear = $user->getPassword();
        $passwordHashed = $passwordEncoder->encodePassword($user, $passwordClear);
        $user->setPassword($passwordHashed);

        //  Find a random builder and set it to the user
        $builder = $userRepository->getRandomBuilder();
        $user->setBuilder($builder);

        // Set default role
        $user->setRoles(['ROLE_USER']);

        //Create a new avatar
        //add an random image from lorempicsum
        //set it into the user object
        $avatar = new Avatar();
        $avatar->setImage(mt_rand(1, 16) . '.gif');
        $user->setAvatar($avatar);

        //transform the content of the request in an object
        //get the info of the new command
        //unset unneeded info
        //create the new command
        //set this info to the new command
        $username = $user->getUsername();
        $command = new Command();
        $command->setName('Pc numero 1 de ' . $username);
        $command->setCommandData($commandData);
        $command->setStatus($statusRepository->findBy(['statusNumber' => 1])[0]);
        $commandData->setCommandConfigData($commandConfigData);
        $commandData->setCommandSpecData($commndSpecData);
        $commandData->setCommandDeviceData($commandDeviceData);


        //persist the new user in the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);

        //link this user to the new command
       $user->addCommand($command);

        // persist the command
        $entityManager->persist($command);
        $entityManager->persist($commandData);
        $entityManager->persist($commandConfigData);
        $entityManager->persist($commndSpecData);
        $entityManager->persist($commandDeviceData);
        $entityManager->flush();

        // send a email to the user
        $email = (new Email())
            ->from('alienmail@example.com')
            ->to($user->getEmail())
            ->subject('Welcome adventurer!')
            ->text("Nice to meet you {$user->getFirstName()}! ❤️");

        $mailer->send($email);

        // Send a Json response 
        return $this->json($user, Response::HTTP_CREATED, [], ['groups' => 'login']);
    }

    /**
     * @Route("/user/{slug}", name="user_delete", methods="DELETE")
     */
    public function delete(User $user = null, EntityManagerInterface $em)
    {
        //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        // get the user from the url and remove it from the database
        $em->remove($user);
        $em->flush();

        //send a json response
        return $this->json(['message' => 'utilisateur supprime'], Response::HTTP_OK);
    }

    /**
     * @Route("/user/edit-password/{slug}", methods="GET|POST", name="user_edit_password")
     */
    public function changePassword(User $user = null, Request $request, UserPasswordEncoderInterface $encoder, SerializerInterface $serializer, ValidatorInterface $validator): Response
    {
        //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the request content (info about new user)
        //transform it into an object user and replace the data
        //get the validations errors if there is any
        $content = $request->getContent();
        $updatedUser = $serializer->deserialize($content, User::class, 'json', ['object_to_populate' => $user]);
        $errors = $validator->validate($updatedUser, null, ['password-edit']);

        // if there is errors, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }


        //get the new validated password
        $password = $updatedUser->getPassword();

        //Encode the new validated password
        $updatedUser->setPassword($encoder->encodePassword($updatedUser, $password));
        $this->getDoctrine()->getManager()->flush();

        //send a response to the front
        return $this->json(['status' => 'password edited'], Response::HTTP_OK);
    }

    /**
     * @Route("/builder/{slug}/user", methods="GET", name="user_builder")
     */
    public function getUsersOfOneBuilder(User $user = null, UserRepository $userRepository)
    {
        //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'monteur non trouve'], Response::HTTP_NOT_FOUND);
        }

        $users = $userRepository->findBy(['builder' => $user]);

        return $this->json($users, Response::HTTP_OK, [], ['groups' => 'user']);
    }

    /**
     * @Route("/user/validation", name="user_validation", methods="POST")
     */
    public function userValidation(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        // get the content of the request and transform it into a array
        $content = $request->getContent();
        $contentDecode = (array) json_decode($content);
        // do the validation for the first step of the quote form
        if ($contentDecode['step'] == "1") {
            $user = $serializer->deserialize($content, User::class, 'json');
            $errors = $validator->validate($user, null, ['validation_one']);
        }

        // do the validation for the second step of the quote form
        if ($contentDecode['step'] == "2") {
            $commandData = $serializer->deserialize($content, CommandData::class, 'json');
            $errorsCommandData = $validator->validate($commandData, null, ['validation_two']);
            $errors = [];
            foreach ($errorsCommandData as $error) {
                $errors[] = $error;
            }
            if ($commandData->getBudget()) {
                $errorsCommandData = $validator->validate($commandData, null, ['validation_two_bis']);
                foreach ($errorsCommandData as $error) {
                    $errors[] = $error;
                }
            }
        }

        // do the validation for the third step of the quote form
        if ($contentDecode['step'] == "3") {
            $commandData = $serializer->deserialize($content, CommandData::class, 'json');
            $errorsCommandData = $validator->validate($commandData, null, ['validation_three']);
            $errors = [];
            foreach ($errorsCommandData as $error) {
                $errors[] = $error;
            }
            if ($commandData->getUtilisation() == "Autres") {
                $errorsCommandData = $validator->validate($commandData, null, ['validation_three_utilisation']);
                $errors = [];
                foreach ($errorsCommandData as $error) {
                    $errors[] = $error;
                }
            }
            $commandConfigData = $serializer->deserialize($content, CommandConfigData::class, 'json');
            $errorsCommandConfigData = $validator->validate($commandConfigData, null, ['validation_three_bis']);
            foreach ($errorsCommandConfigData as $error) {
                $errors[] = $error;
            }
        }

        // do the validation for the fourth step of the quote form
        if ($contentDecode['step'] == "4") {
            $commandConfigData = $serializer->deserialize($content, CommandConfigData::class, 'json');
            $errors = $validator->validate($commandConfigData, null, ['validation_four']);
        }

        // do the validation for the fifth step of the quote form
        if ($contentDecode['step'] == "5") {
            $commandSpecData = $serializer->deserialize($content, CommandSpecData::class, 'json');
            $errorsValidationFive = $validator->validate($commandSpecData, null, ['validation_five']);
            $errors = [];
            foreach ($errorsValidationFive as $error) {
                $errors[] = $error;
            }
            if ($commandSpecData->getSpecWifi()) {
                $errorsValidationFiveWifiTrue = $validator->validate($commandSpecData, null, ['validation_five_wifi_true']);
                foreach ($errorsValidationFiveWifiTrue as $error) {
                    $errors[] = $error;
                }
            }
            if ($commandSpecData->getSpecSound()) {
                $errorsValidationFiveSoundTrue = $validator->validate($commandSpecData, null, ['validation_five_sound_true']);
                foreach ($errorsValidationFiveSoundTrue as $error) {
                    $errors[] = $error;
                }
            }
            if ($commandSpecData->getSpecSoundUtilisation() == "Autres") {
                $errorsValidationFiveSoundOther = $validator->validate($commandSpecData, null, ['validation_five_sound_other']);
                foreach ($errorsValidationFiveSoundOther as $error) {
                    $errors[] = $error;
                }
            }
        }

        // do the validation for the sixth step of the quote form
        if ($contentDecode['step'] == "6") {
            $commandSpecData = $serializer->deserialize($content, CommandSpecData::class, 'json');
            $errors = [];
            $errorsValidationSix = $validator->validate($commandSpecData, null, ['validation_six']);
            foreach ($errorsValidationSix as $error) {
                $errors[] = $error;
            }
            if ($commandSpecData->getOs()) {
                $errorValidationSixOsTrue = $validator->validate($commandSpecData, null, ['validation_six_os_true']);
                foreach ($errorValidationSixOsTrue as $error) {
                    $errors[] = $error;
                }
            }
        }

        // do the validation for the Seventh step of the quote form
        if ($contentDecode['step'] == "7") {
            $commandDeviceData = $serializer->deserialize($content, CommandDeviceData::class, 'json');
            $errors = $validator->validate($commandDeviceData, null, ['validation_seven']);
        }

        // send the error if needed
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // if there is no error response HTTP_OK
        return $this->json(['data' => 'ok'], Response::HTTP_OK);
    }
}
