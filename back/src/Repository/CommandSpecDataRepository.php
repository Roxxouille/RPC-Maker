<?php

namespace App\Repository;

use App\Entity\CommandSpecData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CommandSpecData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommandSpecData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommandSpecData[]    findAll()
 * @method CommandSpecData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommandSpecDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommandSpecData::class);
    }

    // /**
    //  * @return CommandSpecData[] Returns an array of CommandSpecData objects
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
    public function findOneBySomeField($value): ?CommandSpecData
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
