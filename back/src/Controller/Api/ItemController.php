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
     * @Route("api/items", name="item_browse", methods = "GET")
     */
    public function browse(ItemRepository $itemRepository)
    {
        //get the items data from the database
        $data = $itemRepository->findAll();

        //send a json response with the data
        return $this->json($data, Response::HTTP_OK, [], ['groups' =>'item']);
    }

     /**
     * @Route("api/{id<\d+>}", name="item_read", methods="GET")
     */
    public function read(ItemRepository $itemRepository, Item $item = null)
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
