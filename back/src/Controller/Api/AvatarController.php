<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\Avatar;
use App\Repository\AvatarRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvatarController extends AbstractController
{
    /**
     * @Route("api/avatar", name="avatars", methods="GET")
     */
    public function getAll(AvatarRepository $avatarRepo)
    {

        $data = $avatarRepo->findAll();


        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'avatar']);
    }

     /**
     * @Route("api/avatar/{id<\d+>}", name="avatar", methods="GET")
     */
    public function getOne($id, AvatarRepository $avatarRepo, Avatar $avatar = null, SerializerInterface $serializer)
    {
        //send a 404 error if the avatar does not exist
        if ($avatar === null) {
            return $this->json(['error' => 'avatar non trouve'], Response::HTTP_NOT_FOUND);
        }

        $data = $avatarRepo->findOneByUser($avatar);
        

        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'avatar']);
    }
}
