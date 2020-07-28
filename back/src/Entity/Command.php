<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CommandRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CommandRepository::class)
 */
class Command
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"category", "command", "user"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"category", "command", "user"})
     */
    private $file;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Regex("/^\d+/", message = "please enter a valid number.")
     * @Groups({"category", "command", "user"})
     */
    private $status;

    /**
     * @ORM\Column(type="json")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"category", "command", "user"})
     */
    private $data = [];

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="commands")
     * @Groups({"category", "command"})
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=Item::class, inversedBy="commands")
     * @Groups({"command", "user"})
     */
    private $item;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"category", "command", "user"})
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"category", "command", "user"})
     */
    private $updated_at;

    public function __construct()
    {
        $this->item = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(?string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getStatus(): ?int
    {
        
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getData(): ?array
    {
        return $this->data;
    }

    public function setData(array $data): self
    {
        $this->data = $data;

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

    /**
     * @return Collection|Item[]
     */
    public function getItem(): Collection
    {
        return $this->item;
    }

    public function addItem(Item $item): self
    {
        if (!$this->item->contains($item)) {
            $this->item[] = $item;
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->item->contains($item)) {
            $this->item->removeElement($item);
        }

        return $this;
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

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }
}
