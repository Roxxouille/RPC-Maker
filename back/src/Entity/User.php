<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Email(
     *      message = "The email '{{ value }}' is not a valid email.")
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Regex("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[[:punct:]]).{8,}", message = "At least one upper case English letter, At least one lower case English letter, At least one digit, At least one special character, Minimum eight in length")
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $password;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Regex("\d+", message = "please enter a digit number.)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $level;

    /**
     * @ORM\Column(type="json")
     * @Assert\Json
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $role = [];

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=85, nullable=true)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $city;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+", message = "please enter a digit number.)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $zip_code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message = "This field should not be blank.")
     */
    private $adress;

    /**
     * @ORM\OneToOne(targetEntity=Avatar::class, inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $avatar;

    /**
     * @ORM\OneToMany(targetEntity=Command::class, mappedBy="user")
     */
    private $commands;

    public function __construct()
    {
        $this->commands = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getRole(): ?array
    {
        return $this->role;
    }

    public function setRole(array $role): self
    {
        $this->role = $role;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getZipCode(): ?int
    {
        return $this->zip_code;
    }

    public function setZipCode(?int $zip_code): self
    {
        $this->zip_code = $zip_code;

        return $this;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getAvatar(): ?Avatar
    {
        return $this->avatar;
    }

    public function setAvatar(Avatar $avatar): self
    {
        $this->avatar = $avatar;

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
            $command->setUser($this);
        }

        return $this;
    }

    public function removeCommand(Command $command): self
    {
        if ($this->commands->contains($command)) {
            $this->commands->removeElement($command);
            // set the owning side to null (unless already changed)
            if ($command->getUser() === $this) {
                $command->setUser(null);
            }
        }

        return $this;
    }
}
