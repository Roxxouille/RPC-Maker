<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Message;
use App\Repository\UserRepository;
use App\Repository\MessageRepository;
use App\Service\DateToShow;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MessageController extends AbstractController
{
    /**
     * @Route("/user/{slug}/messages", methods="POST", name="user_messages")
     */
    public function getMessages(Request $request, User $from = null, MessageRepository $messageRepository, UserRepository $userRepository, DateToShow $dateToShow)
    {
        //send a 404 error if the user does not exist
        if ($from === null) {
            return $this->json(['error' => 'utilisateur non trouve'], Response::HTTP_NOT_FOUND);
        }

        if ($from->getBuilder() != null) {
            $to = $from->getBuilder();

            $messagesUser = $messageRepository->findMesByUsers($from, $to);
            //$date = $messagesUser[0]->getCreatedAt();
            //$dateToTrad = $date->format('l j F Y à H\hi');
            //dd($dateTrad->tradDateToFr($dateToTrad));
            foreach($messagesUser as $message){
                $date = $dateToShow->whatDateToShow($message);
                $message->setDateToShow($date);
            }
            //send it in json
            return $this->json($messagesUser, Response::HTTP_OK, [], ['groups' => 'message']);
        }

        $content = $request->getContent();
        $to = $userRepository->find(json_decode($content, true));

        $messagesUser = $messageRepository->findMesByUsers($from, $to);
        foreach($messagesUser as $message){
            $date = $dateToShow->whatDateToShow($message);
            $message->setDateToShow($date);
        }
        //send it in json
        return $this->json($messagesUser, Response::HTTP_OK, [], ['groups' => 'message']);
    }

    /**
     * @Route("/user/{slug}/message", methods="POST", name="user_message_add")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, UserRepository $userRepository, EntityManagerInterface $em, User $from)
    {
        //get the request content (info about new message)
        //transform it into an object message
        //get the validations errors if there is any
        $content = $request->getContent();
        $message = $serializer->deserialize($content, Message::class, 'json');
        $errors = $validator->validate($message);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // verify if the current user is a builder or a user
        if ($from->getBuilder() != null) {

            // set the user that wrote the message
            $message->setFromUser($from);
            // set the builder the message is send to
            $message->setToUser($from->getBuilder());


            // send the new message in database
            $em->persist($message);
            $em->flush();

            // send a json response
            return $this->json(['status' => 'message created'], Response::HTTP_OK);
        }

        // get the user to send the message to via the request
        $toContent = json_decode($content, true);
        $toId = $toContent['id'];
        $to = $userRepository->find($toId);

        // set the builder that wrote the message
        $message->setFromUser($from);
        // set the user the message is send to
        $message->setToUser($to);


        // send the new message in database
        $em->persist($message);
        $em->flush();

        // send a json response
        return $this->json(['status' => 'message created'], Response::HTTP_OK);
    }
}
