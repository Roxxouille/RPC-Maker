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
     * Creation of tokenApi when user is created
     *
     * @param User $user Entity of User
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function prePersist(Avatar $avatar, LifecycleEventArgs $event)
    {
        $avatar->setSlug($this->slugger->slugify($avatar->getImage()));
    }
}