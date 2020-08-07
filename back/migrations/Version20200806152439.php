<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200806152439 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE command_data ADD command_config_data_id INT NOT NULL, ADD command_spec_data_id INT NOT NULL, ADD command_device_data_id INT NOT NULL');
        $this->addSql('ALTER TABLE command_data ADD CONSTRAINT FK_C595DEEA7259B9D FOREIGN KEY (command_config_data_id) REFERENCES command_config_data (id)');
        $this->addSql('ALTER TABLE command_data ADD CONSTRAINT FK_C595DEE88F69673 FOREIGN KEY (command_spec_data_id) REFERENCES command_spec_data (id)');
        $this->addSql('ALTER TABLE command_data ADD CONSTRAINT FK_C595DEE588F80F0 FOREIGN KEY (command_device_data_id) REFERENCES command_device_data (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C595DEEA7259B9D ON command_data (command_config_data_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C595DEE88F69673 ON command_data (command_spec_data_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C595DEE588F80F0 ON command_data (command_device_data_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE command_data DROP FOREIGN KEY FK_C595DEEA7259B9D');
        $this->addSql('ALTER TABLE command_data DROP FOREIGN KEY FK_C595DEE88F69673');
        $this->addSql('ALTER TABLE command_data DROP FOREIGN KEY FK_C595DEE588F80F0');
        $this->addSql('DROP INDEX UNIQ_C595DEEA7259B9D ON command_data');
        $this->addSql('DROP INDEX UNIQ_C595DEE88F69673 ON command_data');
        $this->addSql('DROP INDEX UNIQ_C595DEE588F80F0 ON command_data');
        $this->addSql('ALTER TABLE command_data DROP command_config_data_id, DROP command_spec_data_id, DROP command_device_data_id');
    }
}
