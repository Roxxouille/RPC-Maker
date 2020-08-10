<?php

namespace App\EventListener;

use App\Entity\Command;
use App\Entity\Message;
use App\Repository\ItemRepository;
use App\Service\MySlugger;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class CommandListener
{
    private $slugger;
    private $userRepo;
    private $em;
    private $itemRepo;

    public function __construct(MySlugger $slugger, UserRepository $userRepo,ItemRepository $itemRepo, EntityManagerInterface $em)
    {
        $this->slugger = $slugger;
        $this->userRepo = $userRepo;
        $this->em = $em;
        $this->itemRepo = $itemRepo;
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

    public function sendFirstMessage(Command $command, LifecycleEventArgs $event)
    {
        $user = $command->getUser();
        $data = $command->getCommandData();
        $configData = $data->getCommandConfigData();
        $specData = $data->getCommandSpecData();
        $deviceData = $data->getCommandDeviceData();

        $messageContent = 'Salut ! Je suis ' . $user->getUsername() . ". " . "\n";

        if($data->getBudget()){
            $messageContent .= "J'ai un budget de " . $data->getAmount() . " et une marge de " . $data->getGap() . ". ";
        }

        $messageContent .= " J'utiliserais ce pc pour du " .$data->getUtilisation() . ". ";

        if(!empty($data->getUtilisationDetails())){
            $messageContent .= "explication : " .$data->getUtilisationDetails();
        }

        if($configData->getPreconfiguration()){
            $messageContent .= "J'ai déjà des idées de pièces tel que : ";

            if(!empty($configData->getConfigProcModel())){
                $messageContent .= "ce processeur : " . $configData->getConfigProcModel();
                if(!empty($configData->getConfigProcLink())){
                    $messageContent .= " le lien : " . $configData->getConfigProcLink();
                }
            }
            else {
                if(!empty($configData->getConfigProc())){
                    $proc = $this->itemRepo->findBy(['name' => $configData->getConfigProc()]);
                    $messageContent .= "Ce prossesseur : " . $proc[0]->getName() . ", le lien : " . $proc[0]->getUrl();
                }
            }
        }



        $message = new Message;

        $message->setContent(nl2br($messageContent));
        $message->setFromUser($user);
        $message->setToUser($user->getBuilder());

        $this->em->persist($message);
        $this->em->flush();
    }
}