<?php

namespace App\Controller\Api;

use App\Repository\CommandRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeStatController extends AbstractController
{
    /**
     * @Route("/build", name="pc_build", methods = "GET")
     */
    public function pcCount(CommandRepository $commandRepo)
    {
        $commands = $commandRepo->findAll();
        $pcBuilded = [];
        foreach($commands as $command){
            if($command->getStatus()->getStatusNumber() >= 4){
                $pcBuilded[] = $command;
            }
        }
        return $this->json(['build' => count($pcBuilded)], Response::HTTP_OK);
    }

    /**
     * @Route("/quote", name="quote_created", methods = "GET")
     */
    public function quoteFinished(CommandRepository $commandRepo)
    {
        $commands = $commandRepo->findAll();
        $quoteFinished = [];
        foreach($commands as $command){
            if($command->getStatus()->getStatusNumber() >= 1){
                $quoteFinished[] = $command;
            }
        }
        return $this->json(['quote' => count($quoteFinished)], Response::HTTP_OK);
    }
}