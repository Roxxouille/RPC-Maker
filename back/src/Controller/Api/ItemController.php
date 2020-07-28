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

        $data = $itemRepository->findAll();

        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'item']);
    }

     /**
     * @Route("api/item/{id<\d+>}", name="item", methods="GET")
     */
    public function getOne($id, ItemRepository $itemRepository, Item $item = null)
    {
        //send a 404 error if the item does not exist
        if ($item === null) {
            return $this->json(['error' => 'item non trouve'], Response::HTTP_NOT_FOUND);
        }

        $data = $itemRepository->findOneByCategory($item);
        

        return $this->json($data, Response::HTTP_OK, [], ['groups' => 'item']);
    }
}
