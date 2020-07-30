<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApplicationAvailabilityFunctionalTest extends WebTestCase
{
    /**
     * @dataProvider urlProvider
     */
    public function testPageIsSuccessful($url)
    {
        $client = self::createClient();
        $client->request('GET', $url);

        $this->assertResponseIsSuccessful();

        $this->assertResponseHeaderSame('Content-Type', 'application/json');
    }

    public function urlProvider()
    {
        yield ['/api/avatars'];
        yield ['/api/categories'];
        yield ['/api/commands'];
        yield ['/api/items'];
        yield ['/api/users'];
        // ...
    }
}