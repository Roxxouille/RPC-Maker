<?php

namespace App\Controller\Api;

use App\Entity\Testimony;
use App\Repository\TestimonyRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TestimonyController extends AbstractController
{
    /**
     * @Route("api/testimonies", name="tesimony_browse", methods="GET")
     */
    public function browse(TestimonyRepository $testimonyRepository)
    {
        // get the data of all testimony
        $data = $testimonyRepository->findAll();

        // send it in json
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'testimony']);
    }

    /**
     * @Route("api/testimony/{id<\d+>}", name="tesimony_read", methods="GET")
     */
    public function read(Testimony $testimony = null, TestimonyRepository $testimonyRepository)
    {
        //send a 404 error if the category does not exist
        if ($testimony === null) {
            return $this->json(['error' => 'témoignage non trouvé'], Response::HTTP_NOT_FOUND);
        }

        // get the user data
        $data = $testimonyRepository->find($testimony);

        //send it in json
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'testimony']);
    }

    /**
     * @Route("api/testimony/{id<\d+>}", name="tesimony_edit", methods={"PUT", "PATCH"})
     */
    public function edit()
    {
        
    }

    /**
     * @Route("api/testimony", name="tesimony_add", methods="POST")
     */
    public function add()
    {
        
    }

    /**
     * @Route("api/testimony/{id<\d+>}", name="tesimony_delete", methods="DELETE")
     */
    public function delete()
    {
        
    }
}