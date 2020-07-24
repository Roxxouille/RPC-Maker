<?php

namespace App\Controller\Api;

use App\Entity\Avatar;
use App\Entity\User;
use App\Repository\AvatarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AvatarController extends AbstractController
{
    /**
     * @Route("api/avatar", name="avatars", methods="GET")
     */
    public function getAll(AvatarRepository $avatarRepo)
    {

        $avatars = $avatarRepo->findAll();

        return $this->json($avatars, 200, [], ['groups' => 'avatars_get']);
    }

     /**
     * @Route("api/avatar/{id<\d+>}", name="avatar", methods="GET")
     */
    public function getOne($id, AvatarRepository $avatarRepo, Avatar $avatar)
    {

        $avatar = $avatarRepo->findOneByUser($avatar);

        

        return $this->json($avatar, 200, []);
    }
}
