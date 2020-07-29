<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\TestimonyRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=TestimonyRepository::class)
 * @UniqueEntity("command")
 */
class Testimony
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"testimony"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.")
     * @Groups({"testimony"})
     */
    private $content;

    /**
     * @ORM\Column(type="integer")
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.")
     * @Assert\Regex("/^[1-5]$/", message = "Veuillez mettre une note entre 1 et 5")
     * @Groups({"testimony"})
     */
    private $score;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="testimonies")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"testimony"})
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity=Command::class, inversedBy="testimony", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $command;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getScore(): ?int
    {
        return $this->score;
    }

    public function setScore(int $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getCommand(): ?Command
    {
        return $this->command;
    }

    public function setCommand(Command $command): self
    {
        $this->command = $command;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
