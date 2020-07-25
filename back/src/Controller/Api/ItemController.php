<?php

namespace App\Controller\Api;

use App\Entity\Item;
use App\Repository\ItemRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ItemController extends AbstractController
{
    /**
     * @Route("api/item", name="items", methods = "GET")
     */
    public function getAll(ItemRepository $itemRepository)
    {

        $data = $itemRepository->findAll();

        return $this->json($data, 200, [], ['groups' =>'item']);
    }

     /**
     * @Route("api/item/{id<\d+>}", name="item", methods="GET")
     */
    public function getOne($id, ItemRepository $itemRepository, Item $item)
    {

        $data = $itemRepository->findOneByCategory($item);
        

        return $this->json($data, 200, [], ['groups' => 'item']);
    }
}
