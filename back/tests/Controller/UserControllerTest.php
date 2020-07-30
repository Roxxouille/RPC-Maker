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

    public function testAdd()
    {
        $client = static::createClient();

        $client->request('POST', 'api/user', [], [], [], '{
            "username" : "testadd",
            "password" : "T3stadd.",
            "email" : "testadd@testadd.com",
            "level" : 3,
            "firstname" : "alexis",
            "lastname" : "d\'angelo",
            "city" : "france",
            "zip_code" : 33000,
            "adress" : "DTC",
            "command_data" : 
                {
                    "Data":"Oui",
                    "0":"Non"
                }
        }');

        $this->assertResponseIsSuccessful();
    }

}