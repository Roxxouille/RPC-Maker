<?php

namespace App\EventListener;

use App\Entity\Avatar;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class AvatarListener
{
    private $slugger;

    public function __construct(MySlugger $slugger)
    {
        $this->slugger = $slugger;
    }

    /**
     * Sluggify the name of Avatar on creation or update
     *
     * @param Avatar $avatar Entity of Avatar
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function sluggify(Avatar $avatar, LifecycleEventArgs $event)
    {
        $avatar->setSlug($this->slugger->slugify($avatar->getImage()));
    }
}