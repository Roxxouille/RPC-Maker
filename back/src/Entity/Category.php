<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=CategoryRepository::class)
 */
class Category
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"category", "item"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.")
     * @Assert\Length(
     *      max = 45,
     *      maxMessage = "Le nom de la catégorie est trop long",
     * )
     * @Groups({"category", "item"})
     */
    private $name;

    /**
     * @ORM\Column(type="json", nullable=true)
     * @Assert\Json( message = "this is not a valid Json.")
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.")
     * @Groups({"category", "item"})
     */
    private $specs = [];

    /**
     * @ORM\OneToMany(targetEntity=Item::class, mappedBy="category")
     * @Groups("category")
     */
    private $items;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"category", "item"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"category", "item"})
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
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

    public function getSpecs(): ?array
    {
        return $this->specs;
    }

    public function setSpecs(?array $specs): self
    {
        $this->specs = $specs;

        return $this;
    }

    /**
     * @return Collection|Item[]
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(Item $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;
            $item->setCategory($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);
            // set the owning side to null (unless already changed)
            if ($item->getCategory() === $this) {
                $item->setCategory(null);
            }
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }
}
