<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Avatar;
use App\Repository\AvatarRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Annotation\Groups;

class AvatarController extends AbstractController
{
    /**
     * @Route("api/avatar", name="avatars", methods="GET")
     */
    public function getAll(AvatarRepository $avatarRepo)
    {

        $data = $avatarRepo->findAll();


        return $this->json($data, 200, [], ['groups' =>'avatar']);
    }

     /**
     * @Route("api/avatar/{id<\d+>}", name="avatar", methods="GET")
     */
    public function getOne($id, AvatarRepository $avatarRepo, Avatar $avatar, SerializerInterface $serializer)
    {

        $data = $avatarRepo->findOneByUser($avatar);
        

        return $this->json($data, 200, [], ['groups' => 'avatar']);
    }
}
