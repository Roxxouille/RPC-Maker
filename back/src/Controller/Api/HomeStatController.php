<?php

namespace App\Controller\Api;

use App\Repository\CommandRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeStatController extends AbstractController
{
    /**
     * @Route("/api/build", name="pc_build", methods = "GET")
     */
    public function pcCount(CommandRepository $commandRepo)
    {
        return $this->json(['build' => $commandRepo->findNumerOfPcBuilded()], Response::HTTP_OK);
    }

    /**
     * @Route("/api/quote", name="quote_created", methods = "GET")
     */
    public function quoteFinished(CommandRepository $commandRepo)
    {
        return $this->json(['quote' => $commandRepo->findNumerOfQuoteCreated()], Response::HTTP_OK);
    }
}