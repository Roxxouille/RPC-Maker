<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Avatar;
use App\Repository\AvatarRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     * @Route("api/user", name="users", methods = "GET")
     */
    public function getAll(UserRepository $userRepository)
    {

        $data = $userRepository->findAll();

        return $this->json($data, 200, [], ['groups' => 'user']);
    }

    /**
     * @Route("api/user/{id<\d+>}", name="user", methods="GET")
     */
    public function getOne($id, UserRepository $userRepository, User $user)
    {

        $data = $userRepository->find($user);


        return $this->json($data, 200, [], ['groups' => 'user']);
    }

    /**
     * @Route("api/user/edit/{id<\d+>}", name="user_edit", methods={"PUT", "PATCH"})
     */
    public function edit(User $user, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        dd($user);
        if ($user === null) {
            return $this->json(['error' => 'utiisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        $content = $request->getContent();
        $updatedUser = $serializer->deserialize($content, User::class, 'json', ['object_to_populate' => $user]);

        $em->flush();

        return $this->json($updatedUser, 200, ['status' => 'user edited']);
    }

    /**
     * @Route("api/user/add", name="user_add", methods="POST")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
    {

        //get the request content (info about new user)
        //transform it into an object user
        //get the validations errors if there is
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

        //persist the new user in the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Send a Json response 
        return $this->json(['status' => 'user created'], 201);
    }

    /**
     * @Route("api/user/delete/{id<\d+>}", name="user_delete", methods="DELETE")
     */
    public function delete(User $user, EntityManagerInterface $em)
    {
    }
}
