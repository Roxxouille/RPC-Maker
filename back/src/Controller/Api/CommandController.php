<?php

namespace App\Controller\Api;

use App\Entity\User;
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
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CommandController extends AbstractController
{
    /**
     * @Route("api/command", name="commands", methods = "GET")
     */
    public function getAll(CommandRepository $commandRepository)
    {
        //get the commands data from the database
        $data = $commandRepository->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'command']);
    }

    /**
     * @Route("api/command/{id<\d+>}", name="command", methods="GET")
     */
    public function getOne($id, CommandRepository $commandRepository, Command $command = null)
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
     * @Route("api/command/edit/{id<\d+>}", name="command_edit", methods={"PUT", "PATCH"})
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
     * @Route("api/command/add", name="command_add", methods="POST")
     */
    public function add(UserRepository $userRepo, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserPasswordEncoderInterface $passwordEncoder)
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
        $contentDecode = json_decode($content, true);
        $userId = $contentDecode['user_id'];
        $user = $userRepo->find($userId);

         //send a 404 error if the command does not exist
         if ($user === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        $command->setUser($user);

        dd($userId);
        //persist the new command in the database
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($command);
        $entityManager->flush();

        // Send a Json response 
        return $this->json(['status' => 'La commande a bien ete trouve'], Response::HTTP_CREATED);
    }

    /**
     * @Route("api/command/delete/{id<\d+>}", name="command_delete", methods="DELETE")
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
}
