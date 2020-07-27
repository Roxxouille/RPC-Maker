<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use App\Repository\AvatarRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AvatarRepository::class)
 */
class Avatar
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"avatar", "user"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "user"})
     */
    private $image;

    /**
     * @ORM\OneToOne(targetEntity=User::class, mappedBy="avatar", cascade={"persist", "remove"})
     * @Groups({"avatar"})
     * @MaxDepth(2)
     */
    private $user;

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
}
