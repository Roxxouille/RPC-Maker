<?php

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Message|null find($id, $lockMode = null, $lockVersion = null)
 * @method Message|null findOneBy(array $criteria, array $orderBy = null)
 * @method Message[]    findAll()
 * @method Message[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    // /**
    //  * @return Message[] Returns an array of Message objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function findMesByUsers($from, $to)
    {
        // $dql = 'SELECT mes FROM App\Entity\Message mes ORDER BY mes.created_at ASC';
        // $query = $this->getEntityManager()->createQuery($dql);

        return $this->createQueryBuilder('m')
            ->andWhere('(m.fromUser = :from AND m.toUser = :to) OR (m.fromUser = :to AND m.toUser = :from)')
            ->setParameters(['from' => $from, 'to' => $to])
            ->addOrderBy('m.created_at', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
