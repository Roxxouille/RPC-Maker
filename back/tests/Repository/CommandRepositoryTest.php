<?php
namespace App\Tests\Repository;

use App\Entity\User;
use App\Entity\Command;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CommandRepositoryTest extends KernelTestCase
{
     /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    protected function setUp(): void
    {
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    public function testSearchByUser()
    {
        $userId = $this->entityManager
        ->getRepository(User::class)
        ->findOneBy(['username' => 'test']);

        $category = $this->entityManager
            ->getRepository(Command::class)
            ->findOneBy(['user' => $userId]);

        $this->assertSame(1, $category->getStatus());
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}