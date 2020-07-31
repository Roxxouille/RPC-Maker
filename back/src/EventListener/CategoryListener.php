<?php

namespace App\EventListener;

use App\Entity\Category;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class CategoryListener
{
    private $slugger;

    public function __construct(MySlugger $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     *  Sluggify the name of Category on creation or update
     *
     * @param Category $category Entity of Category
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function sluggify(Category $category, LifecycleEventArgs $event)
    {
        $category->setSlug($this->slugger->slugify($category->getName()));
    }
}