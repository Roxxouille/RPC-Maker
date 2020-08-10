<?php

namespace App\Controller\Api;

use Symfony\Component\Mime\Email;
use Symfony\Component\Validator\Validation;
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
    public function sendEmail(MailerInterface $mailer, Request $request)
    {
        //get the data send by the user
        $content = (array) json_decode($request->getContent());
        
        // Check if the value are correct
        $validator = Validation::createValidator();

        $input = [
            'email' => $content['email'],
            'content' => $content['content'],
            'firstname' => $content['firstname'],
            'lastname' => $content['lastname'],
        ];

        $constraint = new Assert\Collection([
            'email' => [
                new Assert\Email(['message' => "L'email {{ value }} n'est pas valide"]),
                new Assert\NotBlank(['message' => "Ce champ ne peut pas être vide."]),
            ],
            'content' => new Assert\NotBlank(['message' => "Ce champ ne peut pas être vide."]),
            'firstname' => new Assert\NotBlank(['message' => "Ce champ ne peut pas être vide."]),
            'lastname' => new Assert\NotBlank(['message' => "Ce champ ne peut pas être vide."]),
        ]);
 
        $errors = $validator->validate($input, $constraint);

        if (count($errors) > 0) {

            $errorsArray = [];

            foreach ($errors as $error) {
                if($error->getPropertyPath() == "[email]"){
                    $errorsArray['email'][] = $error->getMessage();
                }
                if($error->getPropertyPath() == "[content]"){
                    $errorsArray['content'][] = $error->getMessage();
                }
                if($error->getPropertyPath() == "[firstname]"){
                    $errorsArray['firstname'][] = $error->getMessage();
                }
                if($error->getPropertyPath() == "[lastname]"){
                    $errorsArray['lastname'][] = $error->getMessage();
                }
            }
            return $this->json($errorsArray, Response::HTTP_UNPROCESSABLE_ENTITY);
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