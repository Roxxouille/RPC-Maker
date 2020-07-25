<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CategoryController extends AbstractController
{
    /**
     * @Route("api/category", name="categories", methods = "GET")
     */
    public function getAll(CategoryRepository $categoryRepo)
    {

        $data = $categoryRepo->findAll();

        return $this->json($data, 200, [], ['groups' =>'category']);
    }

     /**
     * @Route("api/category/{id<\d+>}", name="category", methods="GET")
     */
    public function getOne($id, CategoryRepository $categoryRepo, Category $category)
    {

        $data = $categoryRepo->findOneByItem($category);
        

        return $this->json($data, 200, [], ['groups' => 'category']);
    }
}
