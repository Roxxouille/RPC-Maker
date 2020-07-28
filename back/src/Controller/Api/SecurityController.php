<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    /**
     * @Route("/api/login", name="api_login", methods={"POST"})
     */
    public function login()
    {
        //get the user with the credentials given by the request
        $user = $this->getUser();

        //if there is not, throw an exception
        if (!$user) {
            throw $this->createAccessDeniedException();
        }
        
        //create a token for the user that just connected
        $user->setApiToken(md5(uniqid(rand(), true)));
        // @todo Renouveler le token à la connexion
        // @todo Et/ou avec une date d'expiration (mais pourquoi finalement ?)
        // @todo A chaque modif de mot de passe

        //return a json response with the main infos
        return $this->json([
            'username' => $user->getUsername(),
            'roles' => $user->getRoles(),
            'token' => $user->getApiToken(),
        ]);
    }

    /**
     * @Route("/api/logout", name="api_logout", methods={"GET"})
     */
    public function logout()
    {
    }
}
