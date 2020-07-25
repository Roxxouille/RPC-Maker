<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("api/user", name="users", methods = "GET")
     */
    public function getAll(UserRepository $userRepository)
    {

        $data = $userRepository->findAll();

        return $this->json($data, 200, [], ['groups' =>'user']);
    }

     /**
     * @Route("api/user/{id<\d+>}", name="user", methods="GET")
     */
    public function getOne($id, UserRepository $userRepository, User $user)
    {

        $data = $userRepository->find($id);
        

        return $this->json($data, 200, [], ['groups' => 'user']);
    }
}
