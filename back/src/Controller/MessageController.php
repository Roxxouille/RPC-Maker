<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\MessageRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MessageController extends AbstractController
{
    /**
     * @Route("/user/{slug}/messagesSend", methods="GET", name="user_messages_send")
     */
    public function getMessagesSendOfOneUser(User $user = null, MessageRepository $messageRepository, UserRepository $userRepository)
    {
        //send a 404 error if the user does not exist
        if ($user === null) {
            return $this->json(['error' => 'monteur non trouve'], Response::HTTP_NOT_FOUND);
        }

        $builder = $user->getBuilder();

        $messagesUser = $messageRepository->findMesByUsers($user, $builder);

        //send it in json
        return $this->json($messagesUser, Response::HTTP_OK, [], ['groups' => 'message']);
    }
}
