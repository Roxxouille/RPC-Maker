<?php

namespace App\Tests\Controller;

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
        yield ['/api/avatar'];
        yield ['/api/category'];
        yield ['/api/command'];
        yield ['/api/item'];
        yield ['/api/user'];
        // ...
    }
}