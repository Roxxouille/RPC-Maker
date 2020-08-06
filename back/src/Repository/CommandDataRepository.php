<?php

namespace App\Repository;

use App\Entity\CommandData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CommandData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommandData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommandData[]    findAll()
 * @method CommandData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommandDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommandData::class);
    }

    // /**
    //  * @return CommandData[] Returns an array of CommandData objects
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
    public function findOneBySomeField($value): ?CommandData
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
