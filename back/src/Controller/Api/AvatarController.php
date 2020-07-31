<?php

namespace App\Controller\Api;

use App\Entity\Avatar;
use App\Repository\AvatarRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AvatarController extends AbstractController
{
    /**
     * @Route("/avatars", name="avatar_browse", methods="GET")
     */
    public function browse(AvatarRepository $avatarRepo)
    {
        //get the avatars data from the database
        $data = $avatarRepo->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'avatar']);
    }

     /**
     * @Route("/avatar/{slug}", name="avatar_read", methods="GET")
     */
    public function read(AvatarRepository $avatarRepo, Avatar $avatar = null)
    {
        //send a 404 error if the avatar does not exist
        if ($avatar === null) {
            return $this->json(['error' => 'avatar non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the data of one avatar from the database
        $data = $avatarRepo->findOneByUser($avatar);
        
        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'avatar']);
    }
}
