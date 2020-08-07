<?php

namespace App\Repository;

use App\Entity\CommandDeviceData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CommandDeviceData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommandDeviceData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommandDeviceData[]    findAll()
 * @method CommandDeviceData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommandDeviceDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommandDeviceData::class);
    }

    // /**
    //  * @return CommandDeviceData[] Returns an array of CommandDeviceData objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CommandDeviceData
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
