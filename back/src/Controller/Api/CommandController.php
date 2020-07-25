<?php

namespace App\Controller\Api;

use App\Entity\Command;
use App\Repository\CommandRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CommandController extends AbstractController
{
    /**
     * @Route("api/command", name="commands", methods = "GET")
     */
    public function getAll(CommandRepository $commandRepository)
    {

        $data = $commandRepository->findAll();

        return $this->json($data, 200, [], ['groups' =>'command']);
    }

     /**
     * @Route("api/command/{id<\d+>}", name="command", methods="GET")
     */
    public function getOne($id, CommandRepository $commandRepository, Command $command)
    {

        $data = $commandRepository->findOneByUser($command);
        

        return $this->json($data, 200, [], ['groups' => 'command']);
    }
}
