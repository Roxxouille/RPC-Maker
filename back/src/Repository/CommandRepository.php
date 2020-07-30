<?php

namespace App\Repository;

use App\Entity\Command;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Command|null find($id, $lockMode = null, $lockVersion = null)
 * @method Command|null findOneBy(array $criteria, array $orderBy = null)
 * @method Command[]    findAll()
 * @method Command[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommandRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Command::class);
    }

    // /**
    //  * @return Command[] Returns an array of Command objects
    //  */
    public function findOneByUser($command)
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'u')
            ->leftJoin('c.user', 'u')
            ->where('c = :command')
            ->setParameter('command', $command)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    
    public function findNumerOfPcBuilded()
    {
        $qb = $this->createQueryBuilder('c');
        $qb->select('count(c)');
        $qb->where('c.status >= 4');

        $count = $qb->getQuery()->getSingleScalarResult();

        return $count;
    }

    public function findNumerOfQuoteCreated()
    {
        $qb = $this->createQueryBuilder('c');
        $qb->select('count(c)');
        $qb->where('c.status >= 1');

        $count = $qb->getQuery()->getSingleScalarResult();

        return $count;
    }

    /*
    public function findOneBySomeField($value): ?Command
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
