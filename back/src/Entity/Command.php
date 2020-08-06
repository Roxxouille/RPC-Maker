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
     * @Assert\Regex("/^\d+/", message = "Veuillez entrer un nombre valide")
     * @Groups({"category", "command", "user"})
     */
    private $status;

    /**
     * @ORM\Column(type="json")
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.")
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
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"category", "command", "user"})
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=Testimony::class, mappedBy="command", cascade={"persist", "remove"})
     */
    private $testimony;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"user"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=45)
     * @Groups({"user"})
     * @Assert\Length(
     *      max = 45,
     *      maxMessage = "Le nom de la commande est trop long",
     * )
     */
    private $name;

    public function __construct()
    {
        $this->item = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->status = 0;
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

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getTestimony(): ?Testimony
    {
        return $this->testimony;
    }

    public function setTestimony(Testimony $testimony): self
    {
        $this->testimony = $testimony;

        // set the owning side of the relation if necessary
        if ($testimony->getCommand() !== $this) {
            $testimony->setCommand($this);
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
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
}
