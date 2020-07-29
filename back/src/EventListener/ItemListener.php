<?php

namespace App\EventListener;

use App\Entity\Item;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class ItemListener
{
    private $slugger;

    public function __construct(MySlugger $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     * Creation of tokenApi when user is created
     *
     * @param Item $user Entity of Item
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function prePersist(Item $item, LifecycleEventArgs $event)
    {
        $item->setSlug($this->slugger->slugify($item->getName()));
    }
}