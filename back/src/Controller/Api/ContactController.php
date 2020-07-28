<?php

namespace App\Controller\Api;

use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/api/email")
     */
    public function sendEmail(MailerInterface $mailer, Request $request)
    {
        $content = (array) json_decode($request->getContent());
        
        $email = (new Email())
            ->from($content['email'])
            ->to('ralflegranddu56@gmail.com')
            ->subject('Contact from '. $content['firstname'] . ' ' . $content['lastname'])
            ->text($content["content"]);
        $mailer->send($email);

        return $this->json(['status' => 'mail send'], Response::HTTP_OK);
    }
}