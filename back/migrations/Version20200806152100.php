<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200806152100 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE command_config_data (id INT AUTO_INCREMENT NOT NULL, preconfiguration TINYINT(1) DEFAULT NULL, config_proc VARCHAR(255) DEFAULT NULL, config_proc_model VARCHAR(255) DEFAULT NULL, config_proc_link VARCHAR(255) DEFAULT NULL, config_board VARCHAR(255) DEFAULT NULL, config_board_model VARCHAR(255) DEFAULT NULL, config_board_link VARCHAR(255) DEFAULT NULL, config_gc VARCHAR(255) DEFAULT NULL, config_gc_model VARCHAR(255) DEFAULT NULL, config_gc_link VARCHAR(255) DEFAULT NULL, config_ram VARCHAR(255) DEFAULT NULL, config_ram_model VARCHAR(255) DEFAULT NULL, config_ram_link VARCHAR(255) DEFAULT NULL, config_refresh VARCHAR(255) DEFAULT NULL, config_refresh_model VARCHAR(255) DEFAULT NULL, config_refresh_link VARCHAR(255) DEFAULT NULL, config_storage VARCHAR(255) DEFAULT NULL, config_storage_model VARCHAR(255) DEFAULT NULL, config_storage_link VARCHAR(255) DEFAULT NULL, config_boardsound VARCHAR(255) DEFAULT NULL, config_boardsound_model VARCHAR(255) DEFAULT NULL, config_boardsound_link VARCHAR(255) DEFAULT NULL, config_case VARCHAR(255) DEFAULT NULL, config_case_model VARCHAR(255) DEFAULT NULL, config_case_link VARCHAR(255) DEFAULT NULL, config_power VARCHAR(255) DEFAULT NULL, config_power_model VARCHAR(255) DEFAULT NULL, config_power_link VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE command_data (id INT AUTO_INCREMENT NOT NULL, command_id INT NOT NULL, utilisation VARCHAR(255) DEFAULT NULL, utilisation_details VARCHAR(255) DEFAULT NULL, budget TINYINT(1) DEFAULT NULL, amount NUMERIC(10, 0) DEFAULT NULL, gap NUMERIC(10, 0) DEFAULT NULL, UNIQUE INDEX UNIQ_C595DEE33E1689A (command_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE command_device_data (id INT AUTO_INCREMENT NOT NULL, device TINYINT(1) DEFAULT NULL, device_screen VARCHAR(255) DEFAULT NULL, device_screen_model VARCHAR(255) DEFAULT NULL, device_screen_link VARCHAR(255) DEFAULT NULL, device_screen_size VARCHAR(255) DEFAULT NULL, device_screen_res VARCHAR(255) DEFAULT NULL, device_keyboard VARCHAR(255) DEFAULT NULL, device_keyboard_model VARCHAR(255) DEFAULT NULL, device_keyboard_link VARCHAR(255) DEFAULT NULL, device_keyboard_type VARCHAR(255) DEFAULT NULL, device_keyboard_switch VARCHAR(255) DEFAULT NULL, device_keyboard_language VARCHAR(255) DEFAULT NULL, device_mouse VARCHAR(255) DEFAULT NULL, device_mouse_model VARCHAR(255) DEFAULT NULL, device_mouse_link VARCHAR(255) DEFAULT NULL, device_mouse_type VARCHAR(255) DEFAULT NULL, device_mouse_filaire VARCHAR(255) DEFAULT NULL, device_mousepad VARCHAR(255) DEFAULT NULL, device_mousepad_model VARCHAR(255) DEFAULT NULL, device_mousepad_link VARCHAR(255) DEFAULT NULL, device_mousepad_type VARCHAR(255) DEFAULT NULL, device_mousepad_size VARCHAR(255) DEFAULT NULL, device_headphone VARCHAR(255) DEFAULT NULL, device_headphone_model VARCHAR(255) DEFAULT NULL, device_headphone_link VARCHAR(255) DEFAULT NULL, device_headphone_type VARCHAR(255) DEFAULT NULL, device_headphone_size VARCHAR(255) DEFAULT NULL, device_enceinte VARCHAR(255) DEFAULT NULL, device_enceinte_model VARCHAR(255) DEFAULT NULL, device_enceinte_link VARCHAR(255) DEFAULT NULL, device_enceinte_type VARCHAR(255) DEFAULT NULL, device_enceinte_bass VARCHAR(255) DEFAULT NULL, device_webcam VARCHAR(255) DEFAULT NULL, device_webcam_model VARCHAR(255) DEFAULT NULL, device_webcam_link VARCHAR(255) DEFAULT NULL, device_webcam_res VARCHAR(255) DEFAULT NULL, device_printer VARCHAR(255) DEFAULT NULL, device_printer_model VARCHAR(255) DEFAULT NULL, device_printer_link VARCHAR(255) DEFAULT NULL, device_printer_type VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE command_spec_data (id INT AUTO_INCREMENT NOT NULL, spec_important VARCHAR(255) DEFAULT NULL, spec_sli TINYINT(1) DEFAULT NULL, spec_overclock TINYINT(1) DEFAULT NULL, spec_storage VARCHAR(255) DEFAULT NULL, spec_storage_quantity INT DEFAULT NULL, spec_wifi TINYINT(1) DEFAULT NULL, spec_wifi_room TINYINT(1) DEFAULT NULL, spec_fiber TINYINT(1) DEFAULT NULL, spec_sound TINYINT(1) DEFAULT NULL, spec_sound_utilisation VARCHAR(255) DEFAULT NULL, spec_sound_utilisation_other VARCHAR(255) DEFAULT NULL, spec_light VARCHAR(255) DEFAULT NULL, os TINYINT(1) DEFAULT NULL, oschoice VARCHAR(255) DEFAULT NULL, os_name VARCHAR(255) DEFAULT NULL, os_active TINYINT(1) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE command_data ADD CONSTRAINT FK_C595DEE33E1689A FOREIGN KEY (command_id) REFERENCES command (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE command_config_data');
        $this->addSql('DROP TABLE command_data');
        $this->addSql('DROP TABLE command_device_data');
        $this->addSql('DROP TABLE command_spec_data');
    }
}
