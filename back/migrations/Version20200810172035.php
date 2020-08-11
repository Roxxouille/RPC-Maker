<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200810172035 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE command ADD command_data_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE command ADD CONSTRAINT FK_8ECAEAD4D89FF2DF FOREIGN KEY (command_data_id) REFERENCES command_data (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8ECAEAD4D89FF2DF ON command (command_data_id)');
        $this->addSql('ALTER TABLE command_data CHANGE command_id command_id INT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE command DROP FOREIGN KEY FK_8ECAEAD4D89FF2DF');
        $this->addSql('DROP INDEX UNIQ_8ECAEAD4D89FF2DF ON command');
        $this->addSql('ALTER TABLE command DROP command_data_id');
        $this->addSql('ALTER TABLE command_data CHANGE command_id command_id INT NOT NULL');
    }
}
