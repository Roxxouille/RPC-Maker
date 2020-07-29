<?php

namespace App\Controller\Api;

use App\Repository\TestimonyRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TestimonyController extends AbstractController
{
    /**
     * @Route("api/testimony", name="tesimony_browse", methods="GET")
     */
    public function browse(TestimonyRepository $testimonyRepository)
    {
        // get the data of all testimony
        $data = $testimonyRepository->findAll();

        // send it in json
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'testimony']);
    }

    /**
     * @Route("api/testimony", name="tesimony_browse", methods="GET")
     */
    public function read()
    {
        
    }

    /**
     * @Route("api/testimony", name="tesimony_browse", methods={"PUT", "PATCH")
     */
    public function edit()
    {
        
    }

    /**
     * @Route("api/testimony", name="tesimony_browse", methods="POST")
     */
    public function add()
    {
        
    }

    /**
     * @Route("api/testimony", name="tesimony_browse", methods="DELETE")
     */
    public function delete()
    {
        
    }
}