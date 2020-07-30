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

    // public function testEdit()
    // {
    //     $client = static::createClient();

    //     $client->request('PUT', 'api/command/test', [], [], [], '{"city" : "bordeaux",
    //         "zip_code" : 33000,
    //         "adress" : "DTC"}');

    //     $this->assertResponseIsSuccessful();
    // }

    // public function testAdd()
    // {
    //     $client = static::createClient();

    //     $client->request('POST', 'api/command', [], [], [], '{
    //         "username" : "test",
    //         "name" : "test",
    //         "data" : 
    //             {
    //                 "Data":"Oui",
    //                 "0":"Non"
    //             }
    //     }');

    //     $this->assertResponseIsSuccessful();
    // }

    public function testDelete()
    {
        $client = static::createClient();

        $client->request('DELETE', 'api/command/test');

        $this->assertResponseIsSuccessful();
    }

}