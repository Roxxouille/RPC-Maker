<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Avatar;
use App\Entity\Command;
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
     * @Route("api/users", name="user_browse", methods = "GET")
     */
    public function browse(UserRepository $userRepository)
    {
        // get the data of all the users
        $data = $userRepository->findAll();

        //send it in json
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'user']);
    }

    /**
     * @Route("api/user/{slug}", name="user_read", methods="GET")
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
     * @Route("api/user/{slug}", name="user_edit", methods={"PUT", "PATCH"})
     */
    public function edit(User $user = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em )
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
        $errors = $validator->validate($updatedUser);

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
     * @Route("api/user", name="user_add", methods="POST")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder, MailerInterface $mailer)
    {

        //get the request content (info about new user)
        //transform it into an object user
        //get the validations errors if there is any
        $content = $request->getContent();
        $user = $serializer->deserialize($content, User::class, 'json');
        $errors = $validator->validate($user);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // get the clear password wrote bye the user
        // encode it
        // set the encoded password to user
        $passwordClear = $user->getPassword();
        $passwordHashed = $passwordEncoder->encodePassword($user, $passwordClear);
        $user->setPassword($passwordHashed);

        //Create a new avatar
        //add an random image from lorempicsum
        //set it into the user object
        $avatar = new Avatar();
        $avatar->setImage('https://picsum.photos/200');
        $user->setAvatar($avatar);

        //transform the content of the request in an object
        //get the info of the new command
        //create the new command
        //set this info to the new command
        $contentDecode = json_decode($content, true);
        $commandData = $contentDecode['command_data'];
        $command = new Command();
        $command->setData($commandData);


        //persist the new user in the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);

        //link this user to the new command
        $command->setUser($user);
        $entityManager->persist($command);
        $entityManager->flush();

        $email = (new Email())
            ->from('alienmail@example.com')
            ->to($user->getEmail())
            ->subject('Welcome adventurer!')
            ->text("Nice to meet you {$user->getFirstName()}! ❤️");

        $mailer->send($email);

        // Send a Json response 
        return $this->json(['status' => 'user created'], Response::HTTP_CREATED);
    }

    /**
     * @Route("api/user/{slug}", name="user_delete", methods="DELETE")
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
     * @Route("api/user/edit-password/{slug}", methods="GET|POST", name="user_edit_password")
     */
    public function changePassword(User $user = null, Request $request, UserPasswordEncoderInterface $encoder): Response
    {
           //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the ne passord from the request
        $content = $request->getContent();
        $contentDecode = json_decode($content, true);
        $newPassword = $contentDecode['newPassword'];

        //encode the ne paasword
        //save it in the databse
        $user->setPassword($encoder->encodePassword($user, $newPassword));
        $this->getDoctrine()->getManager()->flush();

        //send a response to the front
        return $this->json(['status' => 'password edited'], Response::HTTP_OK);
    }
}
