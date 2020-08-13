<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\StatusRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=StatusRepository::class)
 */
class Status
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(
     *  type="integer"
     * )
     */
    private $id;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255
     * )
     */
    private $name;

    /**
     * @ORM\OneToMany(
     *  targetEntity=Command::class,
     *  mappedBy="status",
     *  orphanRemoval=true
     * )
     */
    private $commands;

    /**
     * @ORM\Column(
     *  type="integer"
     * )
     * @Groups({
     *  "command", "user"
     * })
     */
    private $statusNumber;

    public function __construct()
    {
        $this->commands = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Command[]
     */
    public function getCommands(): Collection
    {
        return $this->commands;
    }

    public function addCommand(Command $command): self
    {
        if (!$this->commands->contains($command)) {
            $this->commands[] = $command;
            $command->setStatus($this);
        }

        return $this;
    }

    public function removeCommand(Command $command): self
    {
        if ($this->commands->contains($command)) {
            $this->commands->removeElement($command);
            // set the owning side to null (unless already changed)
            if ($command->getStatus() === $this) {
                $command->setStatus(null);
            }
        }

        return $this;
    }

    public function getStatusNumber(): ?int
    {
        return $this->statusNumber;
    }

    public function setStatusNumber(int $statusNumber): self
    {
        $this->statusNumber = $statusNumber;

        return $this;
    }
}
