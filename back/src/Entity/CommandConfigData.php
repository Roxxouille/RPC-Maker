<?php

namespace App\Entity;

use App\Repository\CommandConfigDataRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommandConfigDataRepository::class)
 */
class CommandConfigData
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
     *  type="boolean",
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\NotNull(
     *  message="Veuillez indiquez si vous avez déjà une configuration",
     *  groups = {
     *      "validation_three_bis"
     *      }
     * )
     */
    private $preconfiguration;

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
    private $configProc;

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
    private $configProcModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configProcLink;

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
    private $configBoard;

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
    private $configBoardModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configBoardLink;

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
    private $configGc;

    /**
     * @ORM\Column(
     *  type="string", 
     *  length=255, 
     *  nullable=true)
     * @Groups({
     *  "command_info"
     * })
     */
    private $configGcModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configGcLink;

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
    private $configRam;

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
    private $configRamModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255, 
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configRamLink;

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
    private $configRefresh;

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
    private $configRefreshModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configRefreshLink;

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
    private $configStorage;

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
    private $configStorageModel;

    /**
     * @ORM\Column(
     *  type="string", 
     *  length=255, 
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configStorageLink;

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
    private $configBoardsound;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255, 
     *  nullable=true
     * )
     * @Groups({"
     *  command_info
     * "})
     */
    private $configBoardsoundModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({"
     *  command_info
     * "})
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configBoardsoundLink;

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
    private $configCase;

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
    private $configCaseModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configCaseLink;

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
    private $configPower;

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
    private $configPowerModel;

    /**
     * @ORM\Column(
     *  type="string",
     *  length=255,
     *  nullable=true
     * )
     * @Groups({
     *  "command_info"
     * })
     * @Assert\Url(
     *  message="Veuillez insérer une url valide",
     *  groups = {
     *      "validation_four"
     *      }
     * )
     */
    private $configPowerLink;

    /**
     * @ORM\OneToOne(
     * targetEntity=CommandData::class,
     *  mappedBy="commandConfigData",
     *  cascade={
     *      "persist",
     *      "remove"
     *      }
     * )
     */
    private $commandData;

    public function getPreconfiguration(): ?bool
    {
        return $this->preconfiguration;
    }

    public function setPreconfiguration(?bool $preconfiguration): self
    {
        $this->preconfiguration = $preconfiguration;

        return $this;
    }

    public function getConfigProc(): ?string
    {
        return $this->configProc;
    }

    public function setConfigProc(?string $configProc): self
    {
        $this->configProc = $configProc;

        return $this;
    }

    public function getConfigProcModel(): ?string
    {
        return $this->configProcModel;
    }

    public function setConfigProcModel(?string $configProcModel): self
    {
        $this->configProcModel = $configProcModel;

        return $this;
    }

    public function getConfigProcLink(): ?string
    {
        return $this->configProcLink;
    }

    public function setConfigProcLink(?string $configProcLink): self
    {
        $this->configProcLink = $configProcLink;

        return $this;
    }

    public function getConfigBoard(): ?string
    {
        return $this->configBoard;
    }

    public function setConfigBoard(?string $configBoard): self
    {
        $this->configBoard = $configBoard;

        return $this;
    }

    public function getConfigBoardModel(): ?string
    {
        return $this->configBoardModel;
    }

    public function setConfigBoardModel(?string $configBoardModel): self
    {
        $this->configBoardModel = $configBoardModel;

        return $this;
    }

    public function getConfigBoardLink(): ?string
    {
        return $this->configBoardLink;
    }

    public function setConfigBoardLink(?string $configBoardLink): self
    {
        $this->configBoardLink = $configBoardLink;

        return $this;
    }

    public function getConfigGc(): ?string
    {
        return $this->configGc;
    }

    public function setConfigGc(?string $configGc): self
    {
        $this->configGc = $configGc;

        return $this;
    }

    public function getConfigGcModel(): ?string
    {
        return $this->configGcModel;
    }

    public function setConfigGcModel(?string $configGcModel): self
    {
        $this->configGcModel = $configGcModel;

        return $this;
    }

    public function getConfigGcLink(): ?string
    {
        return $this->configGcLink;
    }

    public function setConfigGcLink(?string $configGcLink): self
    {
        $this->configGcLink = $configGcLink;

        return $this;
    }

    public function getConfigRam(): ?string
    {
        return $this->configRam;
    }

    public function setConfigRam(?string $configRam): self
    {
        $this->configRam = $configRam;

        return $this;
    }

    public function getConfigRamModel(): ?string
    {
        return $this->configRamModel;
    }

    public function setConfigRamModel(?string $configRamModel): self
    {
        $this->configRamModel = $configRamModel;

        return $this;
    }

    public function getConfigRamLink(): ?string
    {
        return $this->configRamLink;
    }

    public function setConfigRamLink(?string $configRamLink): self
    {
        $this->configRamLink = $configRamLink;

        return $this;
    }

    public function getConfigRefresh(): ?string
    {
        return $this->configRefresh;
    }

    public function setConfigRefresh(?string $configRefresh): self
    {
        $this->configRefresh = $configRefresh;

        return $this;
    }

    public function getConfigRefreshModel(): ?string
    {
        return $this->configRefreshModel;
    }

    public function setConfigRefreshModel(?string $configRefreshModel): self
    {
        $this->configRefreshModel = $configRefreshModel;

        return $this;
    }

    public function getConfigRefreshLink(): ?string
    {
        return $this->configRefreshLink;
    }

    public function setConfigRefreshLink(?string $configRefreshLink): self
    {
        $this->configRefreshLink = $configRefreshLink;

        return $this;
    }

    public function getConfigStorage(): ?string
    {
        return $this->configStorage;
    }

    public function setConfigStorage(?string $configStorage): self
    {
        $this->configStorage = $configStorage;

        return $this;
    }

    public function getConfigStorageModel(): ?string
    {
        return $this->configStorageModel;
    }

    public function setConfigStorageModel(?string $configStorageModel): self
    {
        $this->configStorageModel = $configStorageModel;

        return $this;
    }

    public function getConfigStorageLink(): ?string
    {
        return $this->configStorageLink;
    }

    public function setConfigStorageLink(?string $configStorageLink): self
    {
        $this->configStorageLink = $configStorageLink;

        return $this;
    }

    public function getConfigBoardsound(): ?string
    {
        return $this->configBoardsound;
    }

    public function setConfigBoardsound(?string $configBoardsound): self
    {
        $this->configBoardsound = $configBoardsound;

        return $this;
    }

    public function getConfigBoardsoundModel(): ?string
    {
        return $this->configBoardsoundModel;
    }

    public function setConfigBoardsoundModel(?string $configBoardsoundModel): self
    {
        $this->configBoardsoundModel = $configBoardsoundModel;

        return $this;
    }

    public function getConfigBoardsoundLink(): ?string
    {
        return $this->configBoardsoundLink;
    }

    public function setConfigBoardsoundLink(?string $configBoardsoundLink): self
    {
        $this->configBoardsoundLink = $configBoardsoundLink;

        return $this;
    }

    public function getConfigCase(): ?string
    {
        return $this->configCase;
    }

    public function setConfigCase(?string $configCase): self
    {
        $this->configCase = $configCase;

        return $this;
    }

    public function getConfigCaseModel(): ?string
    {
        return $this->configCaseModel;
    }

    public function setConfigCaseModel(?string $configCaseModel): self
    {
        $this->configCaseModel = $configCaseModel;

        return $this;
    }

    public function getConfigCaseLink(): ?string
    {
        return $this->configCaseLink;
    }

    public function setConfigCaseLink(?string $configCaseLink): self
    {
        $this->configCaseLink = $configCaseLink;

        return $this;
    }

    public function getConfigPower(): ?string
    {
        return $this->configPower;
    }

    public function setConfigPower(?string $configPower): self
    {
        $this->configPower = $configPower;

        return $this;
    }

    public function getConfigPowerModel(): ?string
    {
        return $this->configPowerModel;
    }

    public function setConfigPowerModel(?string $configPowerModel): self
    {
        $this->configPowerModel = $configPowerModel;

        return $this;
    }

    public function getConfigPowerLink(): ?string
    {
        return $this->configPowerLink;
    }

    public function setConfigPowerLink(?string $configPowerLink): self
    {
        $this->configPowerLink = $configPowerLink;

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
        if ($commandData->getCommandConfigData() !== $this) {
            $commandData->setCommandConfigData($this);
        }

        return $this;
    }
}
