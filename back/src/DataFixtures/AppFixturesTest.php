<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\User;
use App\Entity\Avatar;
use App\Entity\Command;
use App\DataFixtures\AppFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use App\DataFixtures\Provider\RpcMakerProvider;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixturesTest extends Fixture
{
    // Une propriété pour accueillir notre encodeur
    private $encoder;

    // On récupère notre "service" via le constructeur de la fixture
    // qui est elle-même un service
    public function __construct(UserPasswordEncoderInterface $encoder)

    {
        $this->encoder = $encoder;
    }

    public function categoryList(AppFixtures $appFixtures)
    {
        $categoryList = $appFixtures->getCategoryList();

        return $categoryList;
    }

    public function itemList(AppFixtures $appFixtures)
    {
        $itemList = $appFixtures->getItemList();

        return $itemList;
    }

    public function load(ObjectManager $manager)
    {
        // use of faker for the fixtures
        $faker = Faker\Factory::create();
        // adding custom provider
        $faker->addProvider(new RpcMakerProvider($faker));

        $categoryList = categoryList();
        $itemList = itemList();

        // fixtures for Avatar
        $avatar = new Avatar;
        $avatar->setCreatedAt(new \DateTime);
        $avatar->setUpdatedAt(new \DateTime);
        $avatar->setImage($faker->sentence);
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
        $user->setFirstname($faker->firstName);
        $user->setLastname($faker->lastName);
        $user->setAvatar($avatar);
        $user->setApiToken(md5(uniqid(rand(), true)));
        $manager->persist($user);

        // fixtures for Command
        $command = new Command;
        $command->setCreatedAt(new \DateTime);
        $command->setUpdatedAt(new \DateTime);
        $command->setStatus($faker->numberBetween(1, 5));
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

        $manager->flush();
    }
}
