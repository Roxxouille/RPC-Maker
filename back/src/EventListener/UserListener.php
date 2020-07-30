<?php

namespace App\EventListener;

use App\Entity\User;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
    private $slugger;

    public function __construct(MySlugger $slugger)
    {
        $this->slugger = $slugger;
    }

    public function sluggify(User $user, LifecycleEventArgs $event)
    {
        $user->setSlug($this->slugger->slugify($user->getUsername()));
    }
}