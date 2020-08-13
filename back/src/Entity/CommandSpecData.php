<?php

namespace App\Entity;

use App\Repository\CommandSpecDataRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommandSpecDataRepository::class)
 */
class CommandSpecData
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(
     *  type="integer"
     * )
     * @Groups({
     *  "command_info"
     * })
     */
    private $id;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotBlank(
     *  message="Veuillez indiquez ce qui est le plus important pour vous",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specImportant;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous êtes intrésser par le SLI",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specSli;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous êtes intrésser par l'overclocking'",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specOverclock;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotBlank(
     *  message="Veuillez indiquez par quel type de stockage vous êtes intéressé",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specStorage;

    /**
     * @ORM\Column(
     *  type="integer",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Positive(
     *  message="Veuillez rentrer un nombre valide",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     * @Assert\NotNull(
     *  message="Veuillez la quantité de stockage que vous voulez",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specStorageQuantity;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous voulez une carte wifi" ,
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specWifi;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous êtes dans la même pièces que le routeur",
     *  groups = {
     *      "validation_five_wifi_true"
     *      }
     * )
     */
    private $specWifiRoom;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous avez la fibre",
     *  groups = {
     *      "validation_five_wifi_true"
     *      }
     * )
     */
    private $specFiber;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous êtes intrésser par une carte son",
     *  groups = {
     *      "validation_five"
     *      }
     * )
     */
    private $specSound;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Notblank(
     *  message="Veuillez indiquez pour quelle utilisation",
     *  groups = {
     *      "validation_five_sound_true"
     *      }
     * )
     */
    private $specSoundUtilisation;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotBlank(
     *  message="Veuillez préciser",
     *  groups = {
     *      "validation_five_sound_other"
     *      }
     * )
     */
    private $specSoundUtilisationOther;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     */
    private $specLight;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous voulez un systeme d'exploitation",
     *  groups = {
     *      "validation_six"
     *      }
     * )
     */
    private $os;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotBlank(
     *  message="Veuillez indiquez quel systeme d'exploitation vous voulez",
     *  groups = {
     *      "validation_six_os_true"
     *      }
     * )
     */
    private $oschoice;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     */
    private $osName;

    /**
     * @ORM\Column(
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotBlank(
     *  message="Veuillez indiquezsi vous voulez que l'on vous l'active",
     *  groups = {
     *      "validation_six_os_true"
     *      }
     * )
     */
    private $osActive;

    /**
     * @ORM\OneToOne(
     * targetEntity=CommandData::class,
     *  mappedBy="commandSpecData",
     *  cascade={
     *      "persist",
     *      "remove"
     *      }
     * )
     */
    private $commandData;

    public function getSpecImportant(): ?string
    {
        return $this->specImportant;
    }

    public function setSpecImportant(?string $specImportant): self
    {
        $this->specImportant = $specImportant;

        return $this;
    }

    public function getSpecSli(): ?bool
    {
        return $this->specSli;
    }

    public function setSpecSli(?bool $specSli): self
    {
        $this->specSli = $specSli;

        return $this;
    }

    public function getSpecOverclock(): ?bool
    {
        return $this->specOverclock;
    }

    public function setSpecOverclock(?bool $specOverclock): self
    {
        $this->specOverclock = $specOverclock;

        return $this;
    }

    public function getSpecStorage(): ?string
    {
        return $this->specStorage;
    }

    public function setSpecStorage(?string $specStorage): self
    {
        $this->specStorage = $specStorage;

        return $this;
    }

    public function getSpecStorageQuantity(): ?int
    {
        return $this->specStorageQuantity;
    }

    public function setSpecStorageQuantity(?int $specStorageQuantity): self
    {
        $this->specStorageQuantity = $specStorageQuantity;

        return $this;
    }

    public function getSpecWifi(): ?bool
    {
        return $this->specWifi;
    }

    public function setSpecWifi(?bool $specWifi): self
    {
        $this->specWifi = $specWifi;

        return $this;
    }

    public function getSpecWifiRoom(): ?bool
    {
        return $this->specWifiRoom;
    }

    public function setSpecWifiRoom(?bool $specWifiRoom): self
    {
        $this->specWifiRoom = $specWifiRoom;

        return $this;
    }

    public function getSpecFiber(): ?bool
    {
        return $this->specFiber;
    }

    public function setSpecFiber(?bool $specFiber): self
    {
        $this->specFiber = $specFiber;

        return $this;
    }

    public function getSpecSound(): ?bool
    {
        return $this->specSound;
    }

    public function setSpecSound(?bool $specSound): self
    {
        $this->specSound = $specSound;

        return $this;
    }

    public function getSpecSoundUtilisation(): ?string
    {
        return $this->specSoundUtilisation;
    }

    public function setSpecSoundUtilisation(?string $specSoundUtilisation): self
    {
        $this->specSoundUtilisation = $specSoundUtilisation;

        return $this;
    }

    public function getSpecSoundUtilisationOther(): ?string
    {
        return $this->specSoundUtilisationOther;
    }

    public function setSpecSoundUtilisationOther(?string $specSoundUtilisationOther): self
    {
        $this->specSoundUtilisationOther = $specSoundUtilisationOther;

        return $this;
    }

    public function getSpecLight(): ?string
    {
        return $this->specLight;
    }

    public function setSpecLight(?string $specLight): self
    {
        $this->specLight = $specLight;

        return $this;
    }

    public function getOs(): ?bool
    {
        return $this->os;
    }

    public function setOs(?bool $os): self
    {
        $this->os = $os;

        return $this;
    }

    public function getOschoice(): ?string
    {
        return $this->oschoice;
    }

    public function setOschoice(?string $oschoice): self
    {
        $this->oschoice = $oschoice;

        return $this;
    }

    public function getOsName(): ?string
    {
        return $this->osName;
    }

    public function setOsName(?string $osName): self
    {
        $this->osName = $osName;

        return $this;
    }

    public function getOsActive(): ?bool
    {
        return $this->osActive;
    }

    public function setOsActive(?bool $osActive): self
    {
        $this->osActive = $osActive;

        return $this;
    }

    public function getCommandData(): ?CommandData
    {
        return $this->commandData;
    }

    public function setCommandData(CommandData $commandData): self
    {
        $this->commandData = $commandData;

        // set the owning side of the relation if necessary
        if ($commandData->getCommandSpecData() !== $this) {
            $commandData->setCommandSpecData($this);
        }

        return $this;
    }
}
