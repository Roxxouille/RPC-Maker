<?php

namespace App\EventListener;

use App\Entity\User;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
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
    }
}