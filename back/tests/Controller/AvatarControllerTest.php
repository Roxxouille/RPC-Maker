<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AvatarControllerTest extends WebTestCase
{

    public function testReadUser()
    {
        $client = static::createClient();

        $client->request('GET', '/api/avatar/test');

        $this->assertResponseIsSuccessful();
    }

}