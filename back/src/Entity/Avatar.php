<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use App\Repository\AvatarRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AvatarRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Avatar
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(
     *  type="integer"
     * )
     * @Groups({
     *  "avatar",
     *  "user",
     *  "testimony"
     * })
     */
    private $id;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255
     * )
     * @Assert\NotBlank(
     *  message = "Ce champ ne peut pas être vide."
     * )
     * @Groups({
     *  "avatar",
     *  "user",
     *  "testimony"
     * })
     */
    private $image;

    /**
     * @ORM\OneToOne(
     * targetEntity=User::class,
     *  mappedBy="avatar",
     *  cascade={
     *      "persist", 
     *      "remove"
     *      }
     * )
     * @Groups({
     *  "avatar"
     * })
     * @MaxDepth(2)
     */
    private $user;

    /**
     * @ORM\Column(
     *  type="datetime"
     * )
     * @Groups({
     *  "avatar", "user"
     * })
     */
    private $createdAt;

    /**
     * @ORM\Column(
     *  type="datetime"
     * )
     * @Groups({
     *  "avatar",
     *  "user"
     * })
     */
    private $updatedAt;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255
     * )
     */
    private $slug;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        // set the owning side of the relation if necessary
        if ($user->getAvatar() !== $this) {
            $user->setAvatar($this);
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
