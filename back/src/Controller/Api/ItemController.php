<?php

namespace App\Controller\Api;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ItemController extends AbstractController
{
    /**
     * @Route("api/item", name="items", methods = "GET")
     */
    public function getAll(ItemRepository $itemRepository)
    {
        //get the items data from the database
        $data = $itemRepository->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'item']);
    }

     /**
     * @Route("api/item/{slug}", name="item", methods="GET")
     */
    public function getOne(ItemRepository $itemRepository, Item $item = null)
    {
        //send a 404 error if the item does not exist
        if ($item === null) {
            return $this->json(['error' => 'item non trouve'], Response::HTTP_NOT_FOUND);
        }

        //get the data of one item from the database
        $data = $itemRepository->findOneByCategory($item);
        
        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'item']);
    }
}
