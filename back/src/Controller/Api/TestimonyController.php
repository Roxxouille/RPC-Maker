<?php

namespace App\Controller\Api;

use App\Entity\Testimony;
use App\Repository\TestimonyRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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
    public function edit(Testimony $testimony, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        //send a 404 error if the category does not exist
        if ($testimony === null) {
            return $this->json(['error' => 'témoignage non trouvé'], Response::HTTP_NOT_FOUND);
        }

        //get the request content (info about current testimony)
        //transform it into an object testimony and replace the data
        //get the validations errors if there is any
        $content = $request->getContent();
        $updatedTestimony = $serializer->deserialize($content, Testimony::class, 'json', ['object_to_populate' => $testimony]);
        $errors = $validator->validate($updatedTestimony);

        // if there is errors, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        //Edit the updatedat vlue to the current time
        $testimony->setUpdatedAt(new \DateTime());

        $em->flush();

        return $this->json(['status' => 'testimony edited'], Response::HTTP_OK);
    }

    /**
     * @Route("api/testimony", name="tesimony_add", methods="POST")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        $content = $request->getContent();
        $contentArray = (array) json_decode($content);
        $commandId = $contentArray['command'];
        
        foreach($this->getUser()->getCommands() as $commandObject){
            dump($commandObject);
            /*
            if($commandObject->getTestimony()->getCommand()->getId() == $commandId){
                return $this->json(['error' => 'témoignage déjà existant'], Response::HTTP_BAD_REQUEST);
            }
            */ 
        }
        dd();
        $testimony = $serializer->deserialize($content, Testimony::class, 'json');
        $errors = $validator->validate($testimony);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                $errorsArray[$error->getPropertyPath()][] = $error->getMessage();
            }

            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $testimony->setUser($this->getUser());

        $em->persist($testimony);
        $em->flush();

        return $this->json(['status' => 'testimony created'], Response::HTTP_OK);
    }

    /**
     * @Route("api/testimony/{id<\d+>}", name="tesimony_delete", methods="DELETE")
     */
    public function delete()
    {
        
    }
}