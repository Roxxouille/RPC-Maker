<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Item;
use App\Entity\User;
use App\Entity\Avatar;
use App\Entity\Command;
use App\Entity\Message;
use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\DataFixtures\Provider\RpcMakerProvider;
use App\Entity\CommandConfigData;
use App\Entity\CommandData;
use App\Entity\CommandDeviceData;
use App\Entity\CommandSpecData;
use App\Entity\Status;
use App\Entity\Testimony;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    // Une propriété pour accueillir notre encodeur
    private $encoder;

    // On récupère notre "service" via le constructeur de la fixture
    // qui est elle-même un service
    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        // use of faker for the fixtures
        $faker = Faker\Factory::create();
        // adding custom provider
        $faker->addProvider(new RpcMakerProvider($faker));

        $categoryList = [];
        // fixtures for Category
        foreach ($faker->categoryName as $categoryName => $categorySpec) {
            $category = new Category();
            $category->setName($categoryName);
            $category->setSpecs($categorySpec);
            $category->setCreatedAt(new \DateTime);
            $category->setUpdatedAt(new \DateTime);
            $manager->persist($category);
            $categoryList[] = $category;
        }
        $itemList = [];
        // fixtures for Item
        for ($i = 0; $i < 600; $i++) {
            $item = new Item();
            $item->setCreatedAt(new \DateTime);
            $item->setUpdatedAt(new \DateTime);
            $randomCategoryObject = $faker->randomElement($categoryList);
            $randomCategory = $randomCategoryObject->getName();

            // custom name for each category of items 
            if ($randomCategory == 'Processeur') {
                $item->setName(
                    $faker->processorBrand
                        . ' '
                        . $faker->randomElement([1, 3, 5, 7])
                        . ' '
                        . $faker->numberBetween(10, 99) . '00'
                );
            } else if ($randomCategory == 'Carte mère') {
                $item->setName(
                    $faker->motherboardBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->numberBetween(10, 99)
                        . '00'
                );
            } else if ($randomCategory == 'Carte graphique') {
                $item->setName(
                    $faker->gpuBrand
                        . ' '
                        . $faker->graphicCardBrand
                        . ' '
                        . $faker->numberBetween(10, 99)
                        . '00'
                );
            } else if ($randomCategory == 'RAM') {
                $item->setName(
                    $faker->ramBrand
                        . ' '
                        . $faker->randomElement([2, 4, 8, 16, 32, 64])
                        . ' GO DDR'
                        .  $faker->numberBetween(2, 4)
                );
            } else if ($randomCategory == 'Ventirad / Watercooling') {
                $item->setName(
                    $faker->ventiradBrand
                        . ' '
                        . $faker->word()
                        . ' '
                        . $faker->numberBetween(1, 10)
                );
            } else if ($randomCategory == 'Carte son') {
                $item->setName(
                    $faker->soundCardBrand
                        . ' '
                        . $faker->word()
                        . ' '
                        . $faker->randomDigitNotNull()
                );
            } else if ($randomCategory == 'Carte wifi') {
                $item->setName(
                    $faker->networkCardBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->randomLetter()
                        . $faker->numberBetween(10, 99)
                );
            } else if ($randomCategory == 'Boitier') {
                $item->setName(
                    $faker->caseBrand
                        .  ' '
                        . $faker->randomLetter()
                        . $faker->randomLetter()
                        . $faker->numberBetween(10, 99)
                );
            } else if ($randomCategory == 'Alimentation') {
                $item->setName(
                    $faker->powerSupplyUnitBrand
                        . ' '
                        . $faker->numberBetween(1000, 10000)
                        . ' '
                        . $faker->randomElement([400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 950])
                        . 'W'
                );
            } else if ($randomCategory == 'HDDs') {
                $item->setName(
                    $faker->hddsBrand
                        . ' '
                        . $faker->randomElement([1, 2, 4, 8, 16, 32])
                        . 'To'
                );
            } else if ($randomCategory == 'SSDs') {
                $item->setName(
                    $faker->ssdsBrand
                        . $faker->randomElement([120, 250, 500, 750, 480, 240])
                        . 'Go'
                );
            } else if ($randomCategory == 'Clavier') {
                $item->setName(
                    $faker->keyBoardBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->randomDigitNotNull()
                        . '0'
                );
            } else if ($randomCategory == 'Souris') {
                $item->setName(
                    $faker->mouseBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->randomDigitNotNull()
                        . $faker->randomDigitNotNull()
                        . '0'
                );
            } else if ($randomCategory == 'Tapis') {
                $item->setName(
                    $faker->mousePadBrand
                        . ' '
                        . $faker->numberBetween(10, 50)
                        . ' cm x '
                        . $faker->numberBetween(10, 50)
                        . ' cm'
                );
            } else if ($randomCategory == 'Micro-Casque') {
                $item->setName(
                    $faker->headphoneBrand
                        . $faker->randomElement([5, 7])
                        . '1 '
                        . $faker->randomElement(['USB', 'JACK'])
                        . ' '
                        . $faker->randomElement(['Micro', ''])
                );
            } else if ($randomCategory == 'Enceintes') {
                $item->setName(
                    $faker->speakerBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->randomDigitNotNull()
                        . $faker->randomDigitNotNull()
                        . '0'
                );
            } else if ($randomCategory == 'Webcam') {
                $item->setName(
                    $faker->webcamBrand
                        . $faker->randomElement(['720p', '1080p'])
                        . ' '
                        . $faker->randomElement(['Micro', ''])
                );
            } else if ($randomCategory == 'Ecran') {
                $item->setName(
                    $faker->computerMonitorBrand
                        . ' '
                        . $faker->randomElement([13, 15, 19, 17, 20, 21, 22, 23, 24, 26, 27, 30])
                        . '" '
                        . $faker->randomLetter()
                        . $faker->numberBetween(100, 999)
                        . $faker->randomLetter()
                        . $faker->randomLetter()
                );
            } else if ($randomCategory == 'Imprimante') {
                $item->setName(
                    $faker->printerBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->randomLetter()
                        . $faker->numberBetween(1000, 9999)
                        . $faker->randomLetter()
                );
            } else if ($randomCategory == 'Systeme d\'exploitation') {
                $item->setName(
                    $faker->operatingSystemBrand
                );
            } else if ($randomCategory == 'Lecteur / Graveur') {
                $item->setName(
                    $faker->cdPlayerBrand
                        . ' '
                        . $faker->randomLetter()
                        . $faker->numberBetween(100, 999)
                        . $faker->randomLetter()
                        . $faker->randomLetter()
                );
            }

            $item->setCategory($randomCategoryObject);
            $item->setPrice($faker->numberBetween(50, 500));
            $item->setUrl($faker->url());
            $manager->persist($item);
            $itemList[] = $item;
        }

        $avatarList = [];
        // fixtures for Avatar
        for ($i = 0; $i < 50; $i++) {
            $avatar = new Avatar;
            $avatar->setCreatedAt(new \DateTime);
            $avatar->setUpdatedAt(new \DateTime);
            $avatar->setImage($faker->numberBetween(1, 9) . '.png');
            $manager->persist($avatar);
            $avatarList[] = $avatar;
        }

        $builderList = [];
        $builders = [
            'Raphaël' => 'raphael@gmail.com',
            'Alexis' => 'alexis@gmail.com',
            'Paul' => 'paul@gmail.com',
            'Sebastien' => 'sebastien@gmail.com',
        ];
        // add one user with builder roles
        foreach ($builders as $key => $builder) {
            $user = new User;
            $user->setCreatedAt(new \DateTime);
            $user->setUpdatedAt(new \DateTime);
            $user->setUsername($key);
            $user->setEmail($builder);
            $user->setPassword($this->encoder->encodePassword($user, 'builder'));
            $user->setRoles(['ROLE_BUILDER']);
            $user->setFirstname($faker->firstName);
            $user->setLastname($faker->lastName);
            $user->setAvatar($faker->unique->randomElement($avatarList));
            $builderList[] = $user;
            $manager->persist($user);
        }

        $userList = [];

        for ($i = 0; $i < 25; $i++) {
            $user = new User;
            $user->setCreatedAt(new \DateTime);
            $user->setUpdatedAt(new \DateTime);
            $user->setUsername($faker->unique->randomUsername);
            $user->setEmail($faker->unique->email);
            $user->setPassword($this->encoder->encodePassword($user, 'user'));
            $user->setRoles(['ROLE_USER']);
            $user->setFirstname($faker->firstName);
            $user->setLastname($faker->lastName);
            $user->setAvatar($faker->unique->randomElement($avatarList));
            $user->setBuilder($faker->randomElement($builderList));
            $manager->persist($user);
            $userList[] = $user;
        }

        $commandDataList = [];
        for ($i = 0; $i < 25; $i++) {
            $commandConfigData = new CommandConfigData;
            $commandConfigData->setPreconfiguration(false);
            $commandConfigData->setConfigBoardModel('Data');
            $commandConfigData->setConfigCaseModel('Encore du data');

            $manager->persist($commandConfigData);

            $commandSpecData = new CommandSpecData;
            $commandSpecData->setOsName('Windaube');
            $commandSpecData->setSpecFiber(true);

            $manager->persist($commandSpecData);

            $commandDeviceData = new CommandDeviceData;
            $commandDeviceData->setDeviceKeyboardModel('Corsair k70');
            $commandDeviceData->setDeviceScreenModel('AOC 144HZ');

            $manager->persist($commandDeviceData);

            $commandData = new CommandData;
            $commandData->setCommandConfigData($commandConfigData);
            $commandData->setCommandDeviceData($commandDeviceData);
            $commandData->setCommandSpecData($commandSpecData);

            $manager->persist($commandData);
            $commandDataList[] = $commandData;
        }

        $statusName = [
            'Formulaire envoyé',
            'Formulaire accepté par le monteur',
            'Formulaire confirmé par le client',
            'Commande confirmée (paiement)',
        ];
        $statusList = [];
        for ($i = 0; $i < 4; $i++){
            $status = new Status;
            $status->setName($statusName[$i]);
            $status->setStatusNumber($i + 1);
            $statusList[] = $status;
            $manager->persist($status);
        }

        // fixtures for Command
        $commandList = [];
        for ($i = 0; $i < 25; $i++) {
            $command = new Command;
            $command->setCreatedAt(new \DateTime);
            $command->setUpdatedAt(new \DateTime);
            $command->setName($faker->word());
            $command->setUser($faker->unique()->randomElement($userList));
            $command->setStatus($faker->randomElement($statusList));
            $command->setCommandData($commandDataList[$i]);
            // adding 20 item, each of one category, for one command
            foreach ($categoryList as $key => $category) {
                $item = $faker->randomElement($itemList);
                while ($category->getName() != $item->getCategory()->getName()) {
                    $item = $faker->randomElement($itemList);
                }
                $command->addItem($item);
            }
            $commandList[] = $command;
            $manager->persist($command);
        }

        // fixtures for Testimony
        for ($i = 0; $i < 16; $i++) {
            $testimony = new Testimony;
            $testimony->setContent($faker->text($faker->numberBetween(30, 255)));
            $testimony->setScore($faker->numberBetween(1, 5));
            $command = $faker->unique->randomElement($commandList);
            $testimony->setCommand($command);
            $testimony->setUser($command->getUser());
            $testimony->setCreatedAt(new \DateTime);
            $testimony->setUpdatedAt(new \DateTime);
            $manager->persist($testimony);
        }

        // fixtures for builder Message

        for ($i = 0; $i < 100; $i++) {
            $clientList = [];
            $message = new Message;
            $message->setCreatedAt($faker->dateTimeThisMonth('now', 'Europe/Paris'));
            $message->setContent($faker->sentence());
            $message->setFromUser($faker->randomElement($builderList));
            foreach ($userList as $user) {
                if ($user->getBuilder() === $message->getFromUser()) {
                    $clientList[] = $user;
                }
            }
            $message->setToUser($faker->randomElement($clientList));
            $manager->persist($message);
        }

        // fixtures for user Message
        for ($i = 0; $i < 100; $i++) {
            $message = new Message;
            $message->setCreatedAt($faker->dateTimeThisMonth('now', 'Europe/Paris'));
            $message->setContent($faker->sentence());
            $message->setFromUser($faker->randomElement($userList));
            $message->setToUser($message->getFromUser()->getBuilder());
            $manager->persist($message);
        }


        // DONNEES DE TEST

        // fixtures for Avatar
        $avatar = new Avatar;
        $avatar->setCreatedAt(new \DateTime);
        $avatar->setUpdatedAt(new \DateTime);
        $avatar->setImage('test');
        $manager->persist($avatar);

        // fixture for User
        $user = new User;
        $user->setCreatedAt(new \DateTime);
        $user->setUpdatedAt(new \DateTime);
        $user->setUsername('test');
        $user->setEmail('test@test.com');
        $user->setPassword($this->encoder->encodePassword($user, 'test'));
        $user->setLevel($faker->randomDigitNotNull);
        $user->setRoles(['ROLE_USER']);
        $user->setFirstname('test');
        $user->setLastname('test');
        $user->setAvatar($avatar);
        $user->setBuilder($faker->randomElement($builderList));
        $manager->persist($user);

        $commandConfigData = new CommandConfigData;
        $commandConfigData->setPreconfiguration(false);
        $commandConfigData->setConfigBoardModel('Data');
        $commandConfigData->setConfigCaseModel('Encore du data');

        $manager->persist($commandConfigData);

        $commandSpecData = new CommandSpecData;
        $commandSpecData->setOsName('Windaube');
        $commandSpecData->setSpecFiber(true);

        $manager->persist($commandSpecData);

        $commandDeviceData = new CommandDeviceData;
        $commandDeviceData->setDeviceKeyboardModel('Corsair k70');
        $commandDeviceData->setDeviceScreenModel('AOC 144HZ');

        $manager->persist($commandDeviceData);

        $commandData = new CommandData;
        $commandData->setCommandConfigData($commandConfigData);
        $commandData->setCommandDeviceData($commandDeviceData);
        $commandData->setCommandSpecData($commandSpecData);

        $manager->persist($commandData);

        // fixtures for Command
        $command = new Command;
        $command->setCreatedAt(new \DateTime);
        $command->setUpdatedAt(new \DateTime);
        $command->setName('test');
        $command->setStatus($statusList[1]);
        $command->setCommandData($commandData);
        $command->setData(['Data' => 'Oui', 'Non']);
        $command->setUser($user);

        // adding 20 item, each of one category, for one command
        foreach ($categoryList as $key => $category) {
            $item = $faker->randomElement($itemList);
            while ($category->getName() != $item->getCategory()->getName()) {
                $item = $faker->randomElement($itemList);
            }
            $command->addItem($item);
        }
        $manager->persist($command);

        $category = new Category();
        $category->setName('test');
        $category->setSpecs($categorySpec);
        $category->setCreatedAt(new \DateTime);
        $category->setUpdatedAt(new \DateTime);
        $manager->persist($category);

        $item = new Item();
        $item->setName('test');
        $item->setCreatedAt(new \DateTime);
        $item->setUpdatedAt(new \DateTime);
        $item->setCategory($category);
        $item->setPrice($faker->numberBetween(50, 500));
        $item->setUrl($faker->url());
        $manager->persist($item);

        $manager->flush();
    }
}
