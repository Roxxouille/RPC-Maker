<?php

namespace App\EventListener;

use App\Entity\User;
use App\Entity\Message;
use App\Service\MySlugger;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class UserListener
{
    private $slugger;
    private $em;

    public function __construct(MySlugger $slugger, EntityManagerInterface $em)
    {
        $this->slugger = $slugger;
        $this->em = $em;
    }

    public function sluggify(User $user, LifecycleEventArgs $event)
    {
        $user->setSlug($this->slugger->slugify($user->getUsername()));
    }

}