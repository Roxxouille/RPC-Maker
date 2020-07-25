<?php

namespace App\DataFixtures\Provider;

use Faker\Provider\Base;

class RpcMakerProvider extends Base
{
    private static $categories = [
        'Processeur',
        'Carte mère',
        'Carte graphique',
        'RAM',
        'Ventirad / Watercooling',
        'Lecteur / Graveur',
        'Carte son',
        'Carte wifi',
        'Boitier',
        'Alimentation',
        'HDDs',
        'SSDs',
        'Systeme d\'exploitation',
        'Ecran',
        'Clavier',
        'Souris',
        'Tapis',
        'Micro-Casque',
        'Enceintes',
        'Webcam',
        'Imprimante',
    ];

    private static $graphicCardBrands = [
        'ASUS',
        'MSI',
        'Gigabyte',
        'EVGA',
        'Zotac',
        'Galax',
        'PNY',
        'Palit',
        'PowerColor',
        'Sapphire',
        'Inno3D',
        'XFX',
        'HIS',
        'VisionTek',
        'AFOX',
        'Manli',
    ];

    private static $gpuBrands = [
        'AMD radeon',
        'Nvidia GeForce gtx',
    ];

    private static $processorBrands = [
        'AMD',
        'Intel'
    ];

    private static $caseBrands = [
        'Aigo',
        'AMAX Information Technologies',
        'Antec',
        'AOpen',
        'APEVIA',
        'ASRock',
        'Asus',
        'Be quiet!',
        'Chassis Plans',
        'Cooler Master',
        'Corsair Components',
        'Dell',
        'Deepcool',
        'DFI',
        'ECS',
        'EVGA Corporation',
        'Foxconn',
        'Fractal Design',
        'Gigabyte Technology',
        'IBall',
        'Lian Li',
        'MSI',
        'MiTAC',
        'NZXT',
        'Phanteks',
        'Razer',
        'Rosewill',
        'Seasonic',
        'Shuttle',
        'SilverStone Technology',
        'Thermaltake',
        'Ultra Products',
        'XFX',
        'Zalman',
    ];

    private static $motherboardBrands = [
        'ASRock',
        'Asus',
        'Biostar',
        'EVGA Corporation',
        'Gigabyte Technology',
        'MSI',
    ];

    private static $hddsBrands = [
        'Seagate Technology',
        'Toshiba',
        'Western Digital'
    ];

    private static $ssdsBrands = [
        'Intel',
        'Samsung',
        'Toshiba',
        'Adata',
        'HP',
    ];

    private static $ventiradBrands = [
        'Aigo',
        'Antec',
        'Be quiet!',
        'Corsair',
        'Cooler Master',
        'Deepcool',
        'Delta Electronics',
        'Ebm-papst',
        'Inventec',
        'Minebea (NMB)',
        'Nidec',
        'Noctua',
        'Scythe',
        'Thermaltake',
        'Zalman',
    ];

    private static $computerMonitorBrands = [
        'Alienware',
        'Apple',
        'Acer',
        'AOC Monitors',
        'Asus',
        'AOpen',
        'BenQ',
        'Chassis Plans',
        'Dell',
        'Eizo',
        'Fujitsu',
        'Gateway',
        'HannStar',
        'Lenovo',
        'LG',
        'MSI',
        'NEC',
        'Philips',
        'Planar Systems',
        'Samsung',
        'Sceptre Incorporated',
        'Sharp',
        'Sony',
        'Tatung Company',
        'ViewSonic',
    ];

    private static $keyBoardBrands = [
        'A4Tech',
        'Alps',
        'Amkette',
        'APEVIA',
        'Arctic',
        'Behavior Tech Computer (BTC)',
        'Chassis Plans',
        'Cherry',
        'Chicony Electronics',
        'Corsair',
        'Cooler Master',
        'CTI Electronics Corporation',
        'Das Keyboard',
        'Fujitsu–Siemens',
        'Gigabyte Technology',
        'G.Skill',
        'Hama Photo',
        'HyperX',
        'IBall',
        'intex',
        'Kensington Computer Products Group',
        'Key Tronic',
        'Lite-On',
        'Logitech',
        'Microsoft',
        'Razer',
        'Saitek',
        'Samsung',
        'SteelSeries',
        'Targus',
        'Terabyte',
        'Thermaltake',
        'Trust',
        'TypeMatrix',
        'Umax',
        'Unicomp',
    ];

    private static $mouseBrands = [
        'A4Tech',
        'Acer',
        'Adesso',
        'Alienware',
        'APEVIA',
        'Arctic',
        'Asus',
        'Behavior Tech Computer (BTC)',
        'Belkin',
        'Cooler Master',
        'Corsair Components',
        'Creative Technology',
        'CTI Electronics Corporation',
        'Dai-Tech',
        'Fellowes, Inc.',
        'Flextronics',
        'General Electric',
        'Gigabyte Technology',
        'Hama Photo',
        'IBall',
        'intex',
        'TVS Electronics',
        'Kensington Computer Products Group',
        'Key Tronic',
        'Labtec',
        'Lite-On',
        'Logitech',
        'Microsoft',
        'Myria',
        'Mitsumi',
        'OCZ Technology',
        'Razer',
        'Riotoro',
        'Saitek',
        'Samsung',
        'SilverStone Technology',
        'Sony',
        'SteelSeries',
        'Targus',
        'Terabyte',
        'Toshiba',
        'Trust',
        'Umax',
        'Verbatim Corporation',
        'Zalman',
    ];

    private static $mousePadBrands = [
        'A4Tech',
        'Acer',
        'Alienware',
        'Corsair Components',
        'Logitech',
        'Razer',
        'SteelSeries',
        'Targus',
        'Trust',
        'Verbatim Corporation',
    ];

    private static $speakerBrands = [
        'Altec Lansing',
        'AOpen',
        'Auzentech',
        'Behringer',
        'Bose Corporation',
        'Canyon',
        'Cemex',
        'Cerwin-Vega',
        'Corsair Memory',
        'Creative Technology',
        'Edifier',
        'General Electric',
        'Gigabyte Technology',
        'Hama Photo',
        'Harman International Industries',
        'Hercules',
        'IBall',
        'Intex',
        'Klipsch',
        'Logic',
        'Logitech',
        'M-Audio',
        'MartinLogan',
        'Philips',
        'Plantronics ',
        'Razer',
        'Shuttle Inc.',
        'Sonodyne',
        'Sony',
        'SteelSeries',
        'Teufel',
        'Trust',
        'Yamaha',
    ];

    private static $networkCardBrands = [
        '3Com',
        'Asus',
        'Atheros',
        'Belkin',
        'Chelsio Communications',
        'Cisco',
        'CNet',
        'D-Link',
        'Gigabyte Technology',
        'IBM',
        'Intel',
        'JCG',
        'Linksys',
        'Ralink',
        'Mellanox',
        'Netgear',
        'Raza Microelectronics',
        'Solarflare',
        'StarTech.com',
        'TP-Link',
        'USRobotics',
        'Zoom',
    ];

    private static $powerSupplyUnitBrands = [
        'Adata',
        'Aerocool',
        'Antec',
        'APEVIA',
        'Arctic',
        'Be quiet!',
        'Cooler Master',
        'Corsair',
        'Deepcool',
        'Delta Electronics',
        'Dynex',
        'EVGA Corporation',
        'Fractal Design',
        'Foxconn',
        'FSP Group',
        'Gigabyte Technology',
        'Lian-Li',
        'LiteOn',
        'Maplin',
        'NZXT',
        'OCZ Technology',
        'PC Power and Cooling',
        'Seasonic',
        'Seventeam',
        'SilverStone',
        'StarTech.com',
        'Super Flower',
        'Thermaltake',
        'Trust',
        'XFX',
        'Xilence',
        'Zalman',
    ];

    private static $ramBrands = [
        'ADATA',
        'Apacer',
        'Asus',
        'Axiom',
        'Buffalo Technology',
        'Chaintech',
        'Corsair Memory',
        'Dataram',
        'Fujitsu',
        'G.Skill',
        'GeIL',
        'HyperX',
        'IBM',
        'Infineon',
        'Kingston Technology',
        'Lenovo',
        'Micron Technology',
        'Crucial',
        'Mushkin',
        'Netlist',
        'PNY',
        'Rambus',
        'Ramtron International',
        'Rendition',
        'Renesas Technology',
        'Samsung Semiconductor',
        'Sandisk',
        'Sea Sonic',
        'SK Hynix',
        'Silicon Power',
        'Super Talent',
        'Toshiba',
        'Transcend',
        'Virtium',
        'Wilk Elektronik',
        'Winbond',
        'Wintec Industries Inc.',
    ];

    private static $headphoneBrands = [
        'AKG Acoustics',
        'Altec Lansing',
        'Amkette',
        'Andrea Electronics',
        'Asus',
        'Audio-Technica',
        'Beats Electronics',
        'Beyerdynamic',
        'Biostar',
        'Bose Corporation',
        'Bush (brand)',
        'Corsair Memory',
        'Creative Technology',
        'Edifier',
        'Fostex',
        'Grado Labs',
        'Hercules',
        'IHome',
        'JBL',
        'JLab Audio',
        'JVC',
        'Klipsch Audio Technologies',
        'Koss Corporation',
        'Meze Headphones',
        'Microsoft',
        'Monster Cable',
        'Philips',
        'Plantronics',
        'Plantronics Gamecom',
        'Razer',
        'Samsung',
        'Sennheiser',
        'Shure',
        'Skullcandy',
        'SMS Audio',
        'Sonodyne',
        'Sony',
        'Stax Earspeakers',
        'SteelSeries',
        'Thermaltake',
        'Technics (brand)',
        'Thinksound',
        'Thrustmaster',
        'Turtle Beach Systems',
        'Ultrasone',
        'V-Moda',
        'Yamaha',
        'Panasonic',
    ];

    private static $soundCardBrands = [
        'Ad Lib, Inc.',
        'Gravis',
        'Analog Devices',
        'Asus',
        'Aureal Semiconductor',
        'Auzentech',
        'C-Media',
        'Conrad',
        'Creative Technology',
        'Diamond Multimedia',
        'Avid Audio',
        'E-MU Systems',
        'Ensoniq',
        'ESS Technology',
        'Focusrite',
        'Hercules',
        'HT Omega',
        'Korg',
        'Lexicon',
        'M-Audio',
        'MOTU',
        'PreSonus',
        'Razer',
        'Realtek',
        'Roland',
        'Speedlink',
        'StarTech.com',
        'Silicon Integrated Systems',
        'TerraTec',
        'Turtle Beach',
        'VIA Technologies',
        'Yamaha',
    ];

    private static $webcamBrands = [
        'A4Tech',
        'Behavior Tech Computer',
        'Canon',
        'Creative Technology',
        'D-Link',
        'ELECOM',
        'FaceVsion',
        'General Electric',
        'Hama Photo',
        'Hewlett-Packard',
        'iMicro',
        'Intel',
        'Labtec',
        'Lenovo',
        'Logitech',
        'Kodak',
        'Microsoft',
        'Philips',
        'Sabrent',
        'Samsung',
        'Silicon Power',
        'Trust',
        'TP-Link',
    ];

    private static $printerBrands = [
        'HP',
        'Canon',
        'Epson',
        'Lexmark',
        'Brother',
        'Samsung',
        'Kyocera',
    ];

    private static $operatingSystemBrands = [
        'Windows 10',
        'Linux',
        'Windows 7',
        'Windows xp',
        'Ubuntu',
        'Debian',
    ];

    private static $cdPlayerBrands = [
        'Samsung',
        'Asus',
        'Buffalo'
    ];

    private static $usernames = [
        'Ryanarex',
        'IHasEyes',
        'Ryana Grateful Eyes',
        'Ryanaasaurus Rex',
        'Ryana Creepy Ankles',
        'Ryana Italian',
        'Uber Grateful Pigeon',
        'Disguised Pigeon',
        'GratefulEyesOMG',
        'CreepyEyesLOL',
        'GenerousEyesOMG',
        'GratefulAnklesLOL',
        'CreepyAnklesOMG',
        'GenerousAnklesLMAO',
        'Iamgrateful',
        'Iamcreepy',
        'Iamgenerous',
        'IamRyana',
        'PigeonMilk',
        'Ryana Generous Pigeon',
        'MindOfRyana',
        'Gamerpigeon',
        'The Grateful Gamer',
        'The Creepy Gamer',
        'The Generous Gamer',
        'DrGrateful',
        'RyanaEyespopper',
        'BigGratefulPigeon',
        'ItIsYePigeon',
        'Ry4n4',
        'Pigeon Boy',
        'Pigeon Girl',
        'Pigeon Person',
        'Captain Grateful',
        'IHasAnkles',
        'Total Pigeon',
        'The Grateful Italian Dude',
        'The Gaming Pigeon',
        'Gaming With Ryana',
        'Mr Game Pigeon',
        'Ms Game Pigeon',
    ];

    public function randomUsername()
    {
        return $this->generator->randomElement(self::$usernames);
    }

    public function cdPlayerBrand()
    {
        return $this->generator->randomElement(self::$cdPlayerBrands);
    }

    public function operatingSystemBrand()
    {
        return $this->generator->randomElement(self::$operatingSystemBrands);
    }

    public function printerBrand()
    {
        return $this->generator->randomElement(self::$printerBrands);
    }

    public function categoryName()
    {
        return self::$categories;
    }

    public function graphicCardBrand()
    {
        return $this->generator->randomElement(self::$graphicCardBrands);
    }

    public function gpuBrand()
    {
        return $this->generator->randomElement(self::$gpuBrands);
    }

    public function processorBrand()
    {
        return $this->generator->randomElement(self::$processorBrands);
    }
    
    public function caseBrand()
    {
        return $this->generator->randomElement(self::$caseBrands);
    }

    public function motherboardBrand()
    {
        return $this->generator->randomElement(self::$motherboardBrands);
    }

    public function hddsBrand()
    {
        return $this->generator->randomElement(self::$hddsBrands);
    }
    
    public function ssdsBrand()
    {
        return $this->generator->randomElement(self::$ssdsBrands);
    }

    public function ventiradBrand()
    {
        return $this->generator->randomElement(self::$ventiradBrands);
    }

    public function computerMonitorBrand()
    {
        return $this->generator->randomElement(self::$computerMonitorBrands);
    }

    public function keyBoardBrand()
    {
        return $this->generator->randomElement(self::$keyBoardBrands);
    }

    public function mouseBrand()
    {
        return $this->generator->randomElement(self::$mouseBrands);
    }

    public function mousePadBrand()
    {
        return $this->generator->randomElement(self::$mousePadBrands);
    }

    public function speakerBrand()
    {
        return $this->generator->randomElement(self::$speakerBrands);
    }

    public function networkCardBrand()
    {
        return $this->generator->randomElement(self::$networkCardBrands);
    }

    public function powerSupplyUnitBrand()
    {
        return $this->generator->randomElement(self::$powerSupplyUnitBrands);
    }

    public function ramBrand()
    {
        return $this->generator->randomElement(self::$ramBrands);
    }

    public function headphoneBrand()
    {
        return $this->generator->randomElement(self::$headphoneBrands);
    }

    public function soundCardBrand()
    {
        return $this->generator->randomElement(self::$soundCardBrands);
    }

    public function webcamBrand()
    {
        return $this->generator->randomElement(self::$webcamBrands);
    }



}