<?php

namespace App\Entity;

use App\Entity\Avatar;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @UniqueEntity("email")
 * @UniqueEntity("username")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"avatar", "user", "testimony"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45, unique=true)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Assert\Length(
     *      min = 3,
     *      max = 25,
     *      minMessage = "Votre nom d'utilisateur doit au moins faire {{ limit }} caractère",
     *      maxMessage = "Votre nom d'utilisateur doit faire {{ limit }} caractère maximum",
     *      groups = {"registration","edit-profile"},
     * )
     * @Groups({"avatar", "command", "user", "testimony", "login"})
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Assert\Email(message = "L'email '{{ value }}' n'est pas valide", groups = {"registration","edit-profile"})
     * @Assert\Length(
     *      max = 255,
     *      maxMessage = "L'email est trop long",
     *       groups = {"registration","edit-profile"},
     * )
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Groups({"avatar", "command", "user"})
     */

    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Regex("/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[[:punct:]]).{8,}/", message = "Au moins une majuscule, une minuscule, un chiffre, un caractère special, et 8 caractère minimum", groups = {"password-edit", "registration","edit-profile"},)
     * @Assert\Length(
     *      max = 255,
     *      maxMessage = "Le mot de passe est trop long",
     *      groups = {"password-edit", "registration","edit-profile"},
     * )
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"password-edit", "registration"},)
     * @Groups({"avatar", "command", "user"})
     */

    private $password;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Regex("/^\d+/", message = "Entrez un nombre valid", groups = {"registration","edit-profile"})
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Groups({"avatar", "command", "user"})
     */

    private $level;

    /**
     * @ORM\Column(type="json")
     * @Groups({"avatar", "command", "user", "login"})
     */

    private $roles = [];

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Assert\Length(
     *      max = 45,
     *      maxMessage = "Le prénom est trop long",
     *       groups = {"registration","edit-profile"},
     * )
     * @Groups({"avatar", "command", "user"})
     */

    private $firstname;

    /**
     * @ORM\Column(type="string", length=45)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Assert\Length(
     *      max = 45,
     *      maxMessage = "Le nom est trop long",
     *       groups = {"registration","edit-profile"},
     * )
     * @Groups({"avatar", "command", "user"})
     */

    private $lastname;

    /**
     * @ORM\Column(type="string", length=85, nullable=true)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Assert\Length(
     *      max = 85,
     *      maxMessage = "Le nom de la ville est trop long",
     *      groups = {"registration","edit-profile"}
     * )
     * @Groups({"avatar", "command", "user"})
     */

    private $city;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex("/^[1-9]\d*$/", message = "Entrez un nombre valide", groups = {"registration","edit-profile"})
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Groups({"avatar", "command", "user"})
     */

    private $zip_code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\NotBlank(message = "Ce champ ne peut pas être vide.", groups = {"registration"})
     * @Assert\Length(
     *      max = 255,
     *      maxMessage = "L'adresse est trop longue",
     *       groups = {"registration","edit-profile"},
     * )
     * @Groups({"avatar", "command", "user"})
     */

    private $adress;

    /**
     * @ORM\OneToOne(targetEntity=Avatar::class, inversedBy="user", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user", "testimony"})
     */
    private $avatar;

    /**
     * @ORM\OneToMany(targetEntity=Command::class, mappedBy="user", cascade={"persist", "remove"})
     * @Groups({"user", "login"})
     */
    private $commands;

    /**
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @groups({"login"})
     */
    private $apiToken;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"avatar", "command", "user"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"avatar", "command", "user"})
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Testimony::class, mappedBy="user", orphanRemoval=true)
     */
    private $testimonies;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"avatar", "command", "user", "login"})
     */
    private $slug;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="builder")
     */
    private $builder;

    public function __construct()
    {
        $this->commands = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->testimonies = new ArrayCollection();
        $this->level = 1;
        //$this->builder = new ArrayCollection();
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

        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

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

    /**
     * @return Collection|Testimony[]
     */
    public function getTestimonies(): Collection
    {
        return $this->testimonies;
    }

    public function addTestimony(Testimony $testimony): self
    {
        if (!$this->testimonies->contains($testimony)) {
            $this->testimonies[] = $testimony;
            $testimony->setUser($this);
        }

        return $this;
    }

    public function removeTestimony(Testimony $testimony): self
    {
        if ($this->testimonies->contains($testimony)) {
            $this->testimonies->removeElement($testimony);
            // set the owning side to null (unless already changed)
            if ($testimony->getUser() === $this) {
                $testimony->setUser(null);
            }
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getBuilder(): ?self
    {
        return $this->builder;
    }

    public function setBuilder(?self $builder): self
    {
        $this->builder = $builder;

        return $this;
    }

    public function addBuilder(self $builder): self
    {
        if (!$this->builder->contains($builder)) {
            $this->builder[] = $builder;
            $builder->setBuilder($this);
        }

        return $this;
    }

    public function removeBuilder(self $builder): self
    {
        if ($this->builder->contains($builder)) {
            $this->builder->removeElement($builder);
            // set the owning side to null (unless already changed)
            if ($builder->getBuilder() === $this) {
                $builder->setBuilder(null);
            }
        }

        return $this;
    }
}
