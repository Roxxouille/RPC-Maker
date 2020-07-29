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

    /**
     * Creation of tokenApi when user is created
     *
     * @param User $user Entity of User
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function prePersist(User $user, LifecycleEventArgs $event)
    {
        $user->setApiToken(md5(uniqid(rand(), true)));
        $user->setSlug($this->slugger->slugify($user->getUsername()));
    }

    public function updateSlug(User $user, LifeCycleEventArgs $event )
    {
        $user->setSlug($this->slugger->slugify($user->getUsername()));
    }
}