<?php

namespace App\Entity;

use App\Repository\CommandDeviceDataRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CommandDeviceDataRepository::class)
 */
class CommandDeviceData
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"command_info"})
     */
    private $id;

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"command_info"})
     */
    private $device;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceScreen;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceScreenModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceScreenLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceScreenSize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceScreenRes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboard;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboardModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboardLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboardType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboardSwitch;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceKeyboardLanguage;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMouse;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMouseModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMouseLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMouseType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMouseFilaire;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMousepad;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMousepadModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMousepadLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMousepadType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceMousepadSize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceHeadphone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceHeadphoneModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceHeadphoneLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceHeadphoneType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceHeadphoneSize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceEnceinte;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceEnceinteModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceEnceinteLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceEnceinteType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceEnceinteBass;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceWebcam;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceWebcamModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceWebcamLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $deviceWebcamRes;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $devicePrinter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $devicePrinterModel;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $devicePrinterLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"command_info"})
     */
    private $devicePrinterType;

    /**
     * @ORM\OneToOne(targetEntity=CommandData::class, mappedBy="commandDeviceData", cascade={"persist", "remove"})
     */
    private $commandData;

    public function getDevice(): ?bool
    {
        return $this->device;
    }

    public function setDevice(?bool $device): self
    {
        $this->device = $device;

        return $this;
    }

    public function getDeviceScreen(): ?string
    {
        return $this->deviceScreen;
    }

    public function setDeviceScreen(?string $deviceScreen): self
    {
        $this->deviceScreen = $deviceScreen;

        return $this;
    }

    public function getDeviceScreenModel(): ?string
    {
        return $this->deviceScreenModel;
    }

    public function setDeviceScreenModel(?string $deviceScreenModel): self
    {
        $this->deviceScreenModel = $deviceScreenModel;

        return $this;
    }

    public function getDeviceScreenLink(): ?string
    {
        return $this->deviceScreenLink;
    }

    public function setDeviceScreenLink(?string $deviceScreenLink): self
    {
        $this->deviceScreenLink = $deviceScreenLink;

        return $this;
    }

    public function getDeviceScreenSize(): ?string
    {
        return $this->deviceScreenSize;
    }

    public function setDeviceScreenSize(?string $deviceScreenSize): self
    {
        $this->deviceScreenSize = $deviceScreenSize;

        return $this;
    }

    public function getDeviceScreenRes(): ?string
    {
        return $this->deviceScreenRes;
    }

    public function setDeviceScreenRes(?string $deviceScreenRes): self
    {
        $this->deviceScreenRes = $deviceScreenRes;

        return $this;
    }

    public function getDeviceKeyboard(): ?string
    {
        return $this->deviceKeyboard;
    }

    public function setDeviceKeyboard(?string $deviceKeyboard): self
    {
        $this->deviceKeyboard = $deviceKeyboard;

        return $this;
    }

    public function getDeviceKeyboardModel(): ?string
    {
        return $this->deviceKeyboardModel;
    }

    public function setDeviceKeyboardModel(?string $deviceKeyboardModel): self
    {
        $this->deviceKeyboardModel = $deviceKeyboardModel;

        return $this;
    }

    public function getDeviceKeyboardLink(): ?string
    {
        return $this->deviceKeyboardLink;
    }

    public function setDeviceKeyboardLink(string $deviceKeyboardLink): self
    {
        $this->deviceKeyboardLink = $deviceKeyboardLink;

        return $this;
    }

    public function getDeviceKeyboardType(): ?string
    {
        return $this->deviceKeyboardType;
    }

    public function setDeviceKeyboardType(?string $deviceKeyboardType): self
    {
        $this->deviceKeyboardType = $deviceKeyboardType;

        return $this;
    }

    public function getDeviceKeyboardSwitch(): ?string
    {
        return $this->deviceKeyboardSwitch;
    }

    public function setDeviceKeyboardSwitch(?string $deviceKeyboardSwitch): self
    {
        $this->deviceKeyboardSwitch = $deviceKeyboardSwitch;

        return $this;
    }

    public function getDeviceKeyboardLanguage(): ?string
    {
        return $this->deviceKeyboardLanguage;
    }

    public function setDeviceKeyboardLanguage(?string $deviceKeyboardLanguage): self
    {
        $this->deviceKeyboardLanguage = $deviceKeyboardLanguage;

        return $this;
    }

    public function getDeviceMouse(): ?string
    {
        return $this->deviceMouse;
    }

    public function setDeviceMouse(?string $deviceMouse): self
    {
        $this->deviceMouse = $deviceMouse;

        return $this;
    }

    public function getDeviceMouseModel(): ?string
    {
        return $this->deviceMouseModel;
    }

    public function setDeviceMouseModel(?string $deviceMouseModel): self
    {
        $this->deviceMouseModel = $deviceMouseModel;

        return $this;
    }

    public function getDeviceMouseLink(): ?string
    {
        return $this->deviceMouseLink;
    }

    public function setDeviceMouseLink(?string $deviceMouseLink): self
    {
        $this->deviceMouseLink = $deviceMouseLink;

        return $this;
    }

    public function getDeviceMouseType(): ?string
    {
        return $this->deviceMouseType;
    }

    public function setDeviceMouseType(?string $deviceMouseType): self
    {
        $this->deviceMouseType = $deviceMouseType;

        return $this;
    }

    public function getDeviceMouseFilaire(): ?string
    {
        return $this->deviceMouseFilaire;
    }

    public function setDeviceMouseFilaire(?string $deviceMouseFilaire): self
    {
        $this->deviceMouseFilaire = $deviceMouseFilaire;

        return $this;
    }

    public function getDeviceMousepad(): ?string
    {
        return $this->deviceMousepad;
    }

    public function setDeviceMousepad(?string $deviceMousepad): self
    {
        $this->deviceMousepad = $deviceMousepad;

        return $this;
    }

    public function getDeviceMousepadModel(): ?string
    {
        return $this->deviceMousepadModel;
    }

    public function setDeviceMousepadModel(?string $deviceMousepadModel): self
    {
        $this->deviceMousepadModel = $deviceMousepadModel;

        return $this;
    }

    public function getDeviceMousepadLink(): ?string
    {
        return $this->deviceMousepadLink;
    }

    public function setDeviceMousepadLink(?string $deviceMousepadLink): self
    {
        $this->deviceMousepadLink = $deviceMousepadLink;

        return $this;
    }

    public function getDeviceMousepadType(): ?string
    {
        return $this->deviceMousepadType;
    }

    public function setDeviceMousepadType(?string $deviceMousepadType): self
    {
        $this->deviceMousepadType = $deviceMousepadType;

        return $this;
    }

    public function getDeviceMousepadSize(): ?string
    {
        return $this->deviceMousepadSize;
    }

    public function setDeviceMousepadSize(?string $deviceMousepadSize): self
    {
        $this->deviceMousepadSize = $deviceMousepadSize;

        return $this;
    }

    public function getDeviceHeadphone(): ?string
    {
        return $this->deviceHeadphone;
    }

    public function setDeviceHeadphone(?string $deviceHeadphone): self
    {
        $this->deviceHeadphone = $deviceHeadphone;

        return $this;
    }

    public function getDeviceHeadphoneModel(): ?string
    {
        return $this->deviceHeadphoneModel;
    }

    public function setDeviceHeadphoneModel(?string $deviceHeadphoneModel): self
    {
        $this->deviceHeadphoneModel = $deviceHeadphoneModel;

        return $this;
    }

    public function getDeviceHeadphoneLink(): ?string
    {
        return $this->deviceHeadphoneLink;
    }

    public function setDeviceHeadphoneLink(?string $deviceHeadphoneLink): self
    {
        $this->deviceHeadphoneLink = $deviceHeadphoneLink;

        return $this;
    }

    public function getDeviceHeadphoneType(): ?string
    {
        return $this->deviceHeadphoneType;
    }

    public function setDeviceHeadphoneType(?string $deviceHeadphoneType): self
    {
        $this->deviceHeadphoneType = $deviceHeadphoneType;

        return $this;
    }

    public function getDeviceHeadphoneSize(): ?string
    {
        return $this->deviceHeadphoneSize;
    }

    public function setDeviceHeadphoneSize(?string $deviceHeadphoneSize): self
    {
        $this->deviceHeadphoneSize = $deviceHeadphoneSize;

        return $this;
    }

    public function getDeviceEnceinte(): ?string
    {
        return $this->deviceEnceinte;
    }

    public function setDeviceEnceinte(?string $deviceEnceinte): self
    {
        $this->deviceEnceinte = $deviceEnceinte;

        return $this;
    }

    public function getDeviceEnceinteModel(): ?string
    {
        return $this->deviceEnceinteModel;
    }

    public function setDeviceEnceinteModel(?string $deviceEnceinteModel): self
    {
        $this->deviceEnceinteModel = $deviceEnceinteModel;

        return $this;
    }

    public function getDeviceEnceinteLink(): ?string
    {
        return $this->deviceEnceinteLink;
    }

    public function setDeviceEnceinteLink(?string $deviceEnceinteLink): self
    {
        $this->deviceEnceinteLink = $deviceEnceinteLink;

        return $this;
    }

    public function getDeviceEnceinteType(): ?string
    {
        return $this->deviceEnceinteType;
    }

    public function setDeviceEnceinteType(?string $deviceEnceinteType): self
    {
        $this->deviceEnceinteType = $deviceEnceinteType;

        return $this;
    }

    public function getDeviceEnceinteBass(): ?string
    {
        return $this->deviceEnceinteBass;
    }

    public function setDeviceEnceinteBass(?string $deviceEnceinteBass): self
    {
        $this->deviceEnceinteBass = $deviceEnceinteBass;

        return $this;
    }

    public function getDeviceWebcam(): ?string
    {
        return $this->deviceWebcam;
    }

    public function setDeviceWebcam(?string $deviceWebcam): self
    {
        $this->deviceWebcam = $deviceWebcam;

        return $this;
    }

    public function getDeviceWebcamModel(): ?string
    {
        return $this->deviceWebcamModel;
    }

    public function setDeviceWebcamModel(?string $deviceWebcamModel): self
    {
        $this->deviceWebcamModel = $deviceWebcamModel;

        return $this;
    }

    public function getDeviceWebcamLink(): ?string
    {
        return $this->deviceWebcamLink;
    }

    public function setDeviceWebcamLink(?string $deviceWebcamLink): self
    {
        $this->deviceWebcamLink = $deviceWebcamLink;

        return $this;
    }

    public function getDeviceWebcamRes(): ?string
    {
        return $this->deviceWebcamRes;
    }

    public function setDeviceWebcamRes(?string $deviceWebcamRes): self
    {
        $this->deviceWebcamRes = $deviceWebcamRes;

        return $this;
    }

    public function getDevicePrinter(): ?string
    {
        return $this->devicePrinter;
    }

    public function setDevicePrinter(?string $devicePrinter): self
    {
        $this->devicePrinter = $devicePrinter;

        return $this;
    }

    public function getDevicePrinterModel(): ?string
    {
        return $this->devicePrinterModel;
    }

    public function setDevicePrinterModel(?string $devicePrinterModel): self
    {
        $this->devicePrinterModel = $devicePrinterModel;

        return $this;
    }

    public function getDevicePrinterLink(): ?string
    {
        return $this->devicePrinterLink;
    }

    public function setDevicePrinterLink(?string $devicePrinterLink): self
    {
        $this->devicePrinterLink = $devicePrinterLink;

        return $this;
    }

    public function getDevicePrinterType(): ?string
    {
        return $this->devicePrinterType;
    }

    public function setDevicePrinterType(?string $devicePrinterType): self
    {
        $this->devicePrinterType = $devicePrinterType;

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
        if ($commandData->getCommandDeviceData() !== $this) {
            $commandData->setCommandDeviceData($this);
        }

        return $this;
    }
}
