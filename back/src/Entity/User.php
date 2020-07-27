<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"avatar", "user"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45, unique=true)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\Email(message = "The email '{{ value }}' is not a valid email.")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Regex("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[[:punct:]]).{8,}/", message = "At least one upper case English letter, At least one lower case English letter, At least one digit, At least one special character, Minimum eight in length")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $password;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Regex("\d+", message = "please enter a valid number.")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $level;

    /**
     * @ORM\Column(type="json")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $roles = [];

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $firstname;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $lastname;

    /**
     * @ORM\Column(type="string", length=85, nullable=true)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $city;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("\d+", message = "please enter a digit number.")
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $zip_code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message = "This field should not be blank.")
     * @Groups({"avatar", "command", "user"})
     */

    private $adress;

    /**
     * @ORM\OneToOne(targetEntity=Avatar::class, inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user"})
     */
    private $avatar;

    /**
     * @ORM\OneToMany(targetEntity=Command::class, mappedBy="user")
     * @Groups({"user"})
     */
    private $commands;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     */
    private $apiToken;

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


    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @see UserInterface
     */
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

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        // $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

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

    public function getApiToken(): ?string
    {
        return $this->apiToken;
    }

    public function setApiToken(?string $apiToken): self
    {
        $this->apiToken = $apiToken;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}
