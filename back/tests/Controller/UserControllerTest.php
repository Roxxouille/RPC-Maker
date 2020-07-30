<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserControllerTest extends WebTestCase
{

    public function testReadUser()
    {
        $client = static::createClient();

        $client->request('GET', '/api/user/test');

        $this->assertResponseIsSuccessful();
    }

    public function testEdit()
    {
        $client = static::createClient();

        $client->request('PUT', 'api/user/test', [], [], [], '{"city" : "bordeaux",
            "zip_code" : 33000,
            "adress" : "DTC"}');

        $this->assertResponseIsSuccessful();
    }

}