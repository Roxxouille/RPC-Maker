<?php

namespace App\EventListener;

use App\Entity\Command;
use App\Repository\UserRepository;
use App\Service\MySlugger;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class CommandListener
{
    private $slugger;
    private $userRepo;
    private $em;

    public function __construct(MySlugger $slugger, UserRepository $userRepo, EntityManagerInterface $em)
    {
        $this->slugger = $slugger;
        $this->userRepo = $userRepo;
        $this->em = $em;
    }

    /**
     * Creation of tokenApi when command is created
     *
     * @param Command $command Entity of Command
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function sluggify(Command $command, LifecycleEventArgs $event)
    {
        $command->setSlug($this->slugger->slugify($command->getName()));
    }

    public function levelChange(Command $command, LifecycleEventArgs $event)
    {
        $user = $command->getUser();
        $commandsStatus = [];
        $commands = $this->userRepo->find($user)->getCommands();
        foreach($commands as $command){
            $commandsStatus[] = $command->getStatus();
        }
        $user->setLevel(array_sum($commandsStatus));

        $this->em->persist($user);
        $this->em->flush();
    }


}