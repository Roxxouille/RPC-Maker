<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Json;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * @Route("api/category", name="category_browse", methods = "GET")
     */
    public function browse(CategoryRepository $categoryRepo)
    {

        $data = $categoryRepo->findAll();

        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'category']);
    }

     /**
     * @Route("api/category/{id<\d+>}", name="category_read", methods="GET")
     */
    public function read($id, CategoryRepository $categoryRepo, Category $category = null)
    {

        //send a 404 error if the category does not exist
        if ($category === null) {
            return $this->json(['error' => 'categorie non trouve'], Response::HTTP_NOT_FOUND);
        }


        $data = $categoryRepo->findOneByItem($category);
        

        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'category']);
    }
    /**
     * @Route("api/category/edit/{id<\d+>}", name="category_edit", methods={"PUT", "PATCH"})
     * @IsGranted("ROLE_ADMIN")
     */
    public function edit(Category $category = null, Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        //send a 404 error if the category does not exist
        if ($category === null) {
            return $this->json(['error' => 'categorie non trouve'], Response::HTTP_NOT_FOUND);
        }

        // get the informations from the request (name of the category)
        // transform the json into the already existing object category
        $content = $request->getContent();
        $editedCategory = $serializer->deserialize($content, Category::class, 'json', ['object_to_populate' => $category]);

        //Edit the updatedat vlue to the current time
        $category->setUpdatedAt(new \DateTime());

        // edit the dtabase
        $em->flush();

        // Send a Json response 
        return $this->json($editedCategory, Response::HTTP_OK, []);
    }

    /**
     * @Route("api/category/add", name="category_add", methods="POST")
     * @IsGranted("ROLE_ADMIN")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $em)
    {
        // get the informations from the request (name of the category)
        // and transform the json into the object category

        $content = $request->getContent();
        $category = $serializer->deserialize($content, Category::class, 'json');

        // create the object in the databse
        $em->persist($category);
        $em->flush();
        
        // Send a Json response 
        return $this->json(['status' => 'Category created'], Response::HTTP_CREATED);
    }

    /**
     * @Route("api/category/delete/{id<\d+>}", name="category_delete", methods="DELETE")
     * @IsGranted("ROLE_ADMIN")
     */
    public function delete(Category $category = null, EntityManagerInterface $em)
    {
        //send a 404 error if the category does not exist
        if ($category === null) {
            return $this->json(['error' => 'categorie non trouve'], Response::HTTP_NOT_FOUND);
        }


        // get the category from the url and remove it from the database
        $em->remove($category);
        $em->flush();

        //send a json response
        return $this->json(['message' => 'Film supprime'], Response::HTTP_OK);
    }
}
