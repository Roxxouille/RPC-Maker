<?php

namespace App\EventListener;

use App\Entity\User;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
    public function prePersist(User $user, LifecycleEventArgs $event)
    {
        $user->setApiToken(md5(uniqid(rand(), true)));
    }
}