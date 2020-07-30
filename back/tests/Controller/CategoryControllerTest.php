<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CategoryControllerTest extends WebTestCase
{

    public function testReadUser()
    {
        $client = static::createClient();

        $client->request('GET', '/api/category/test');

        $this->assertResponseIsSuccessful();
    }

    // public function testEdit()
    // {
    //     $client = static::createClient();

    //     $client->request('PUT', 'api/category/test', [], [], [], '{"name" : "test"}');

    //     $this->assertResponseIsSuccessful();
    // }

    // public function testAdd()
    // {
    //     $client = static::createClient();

    //     $client->request('POST', 'api/category', [], [], [], '{"name" : "test"}');

    //     $this->assertResponseIsSuccessful();
    // }

    // public function testDelete()
    // {
    //     $client = static::createClient();

    //     $client->request('DELETE', 'api/category/test');

    //     $this->assertResponseIsSuccessful();
    // }
}