<?php

namespace App\Controller\Api;

use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    /**
     * @Route("/email", name="email", methods="POST")
     */
    public function sendEmail(MailerInterface $mailer, Request $request, ValidatorInterface $validator)
    {
        //get the data send by the user
        $content = (array) json_decode($request->getContent());
        
        // check if the email is correct
        $emailConstraint = new Assert\Email();
        $emailConstraint->message = "L'email {{ value }} n'est pas valide";
        $errors = $validator->validate($content['email'], $emailConstraint);

        // if there is an error, return them in a json format
        if (count($errors) > 0) {
            $errorMessage = $errors[0]->getMessage();
            return $this->json(['error' => $errorMessage], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

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