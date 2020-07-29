<?php
namespace App\Tests\Repository;

use App\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class CategoryRepositoryTest extends KernelTestCase
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

    public function testSearchByName()
    {
        $category = $this->entityManager
            ->getRepository(Category::class)
            ->findOneBy(['name' => 'Webcam'])
        ;

        $this->assertSame(['resolution' =>[0 => '720p', 1 => '1080p', 2 => '4k']], $category->getSpecs());
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // doing this is recommended to avoid memory leaks
        $this->entityManager->close();
        $this->entityManager = null;
    }
}