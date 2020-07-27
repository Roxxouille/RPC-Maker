<?php

namespace App\EventListener;

use App\Entity\User;

class UserListener
{
    public function prePersist(User $user)
    {
        $user->setApiToken(md5(uniqid(rand(), true)));
    }
}