<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CommandControllerTest extends WebTestCase
{

    public function testReadUser()
    {
        $client = static::createClient();

        $client->request('GET', '/api/command/test');

        $this->assertResponseIsSuccessful();
    }

}