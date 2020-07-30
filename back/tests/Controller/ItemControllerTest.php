<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ItemControllerTest extends WebTestCase
{

    public function testReadUser()
    {
        $client = static::createClient();

        $client->request('GET', '/api/item/test');

        $this->assertResponseIsSuccessful();
    }

}