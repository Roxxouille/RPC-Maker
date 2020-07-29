<?php

namespace App\EventListener;

use App\Entity\Command;
use App\Service\MySlugger;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class CommandListener
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
    public function prePersist(Command $command, LifecycleEventArgs $event)
    {
        $command->setSlug($this->slugger->slugify($command->getName()));
    }
}