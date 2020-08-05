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
     *  Sluggify the name of Command on creation or update
     *
     * @param Command $command Entity of Command
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function sluggify(Command $command, LifecycleEventArgs $event)
    {
        $command->setSlug($this->slugger->slugify($command->getName()));
    }

    /**
     * Change the level of the User when the status of the command is updated
     *
     * @param Command $command Entity of Command
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function levelChange(Command $command, LifecycleEventArgs $event)
    {
        // getting the user related to the command
        $user = $command->getUser();
        //getting all the status of all the command this user have
        $commandsStatus = [];
        $commands = $this->userRepo->find($user)->getCommands();
        foreach($commands as $command){
            $commandsStatus[] = $command->getStatus();
        }
        // getting the sum of all the status to create the level of the user
        $user->setLevel(array_sum($commandsStatus));
        // persist it in the database
        $this->em->persist($user);
        $this->em->flush();
    }
}