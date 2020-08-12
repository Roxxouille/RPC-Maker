<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(
     *  type="integer"
     * )
     * @groups({
     *  "message"
     * })
     */
    private $id;

    /**
     * @ORM\Column(
     *  type="datetime"
     * )
     * @groups({
     *  "message"
     * })
     */
    private $created_at;

    /**
     * @ORM\Column(
     * type="text",
     *  nullable=true
     * )
     * @groups({
     *  "message"
     * })
     */
    private $content;

    /**
     * @ORM\ManyToOne(
     * targetEntity=User::class,
     *  inversedBy="messagesSend
     * ")
     * @ORM\JoinColumn(
     *  nullable=false
     * )
     * @groups({
     *  "message"
     * })
     */
    private $fromUser;

    /**
     * @ORM\ManyToOne(
     *  targetEntity=User::class,
     *  inversedBy="messagesReceived"
     * )
     * @ORM\JoinColumn(
     *  nullable=false
     * )
     * @groups({
     *  "message"
     * })
     */
    private $toUser;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @groups({
     *  "message"
     * })
     */
    private $dateToShow;

    public function __construct()
    {
        $this->created_at = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getFromUser(): ?User
    {
        return $this->fromUser;
    }

    public function setFromUser(?User $fromUser): self
    {
        $this->fromUser = $fromUser;

        return $this;
    }

    public function getToUser(): ?User
    {
        return $this->toUser;
    }

    public function setToUser(?User $toUser): self
    {
        $this->toUser = $toUser;

        return $this;
    }

    public function getDateToShow(): ?string
    {
        return $this->dateToShow;
    }

    public function setDateToShow(?string $dateToShow): self
    {
        $this->dateToShow = $dateToShow;

        return $this;
    }
}
