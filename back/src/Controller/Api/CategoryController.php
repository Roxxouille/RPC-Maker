<?php

namespace App\Controller\Api;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Validator\Validator\ValidatorInterface;

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

    /**
     * @Route("api/category/add", name="category_add", methods="POST")
     */
    public function add(Request $request, SerializerInterface $serializer, ValidatorInterface $validator)
    {
        $content = $request->getContent();

        dd($content);
    }
}
