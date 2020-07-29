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
        //get the data send by the user
        $content = (array) json_decode($request->getContent());
        
        //create an email with this data
        $email = (new Email())
            ->from($content['email'])
            ->to('us80@hotmail.fr')
            ->subject('Contact from '. $content['firstname'] . ' ' . $content['lastname'])
            ->text($content["content"]);

        //send the email formatted
        $mailer->send($email);

        //send a json response with a ok status
        return $this->json(['status' => 'mail send'], Response::HTTP_OK);
    }
}