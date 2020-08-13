<?php

namespace App\Service;

use DateTime;

class DateToShow
{
    private $format = [
        'Monday'    => 'Lundi', 
        'Tuesday'   => 'Mardi', 
        'Wednesday' => 'Mercredi', 
        'Thursday'  => 'Jeudi', 
        'Friday'    => 'Vendredi', 
        'Saturday'  => 'Samedi', 
        'Sunday'    => 'Dimanche',
        'Mon' => 'Lun', 
        'Tue' => 'Mar', 
        'Wed' => 'Mer', 
        'Thu' => 'Jeu', 
        'Fri' => 'Ven', 
        'Sat' => 'Sam', 
        'Sun' => 'Dim',
        'January'   => 'Janvier', 
        'February'  => 'Février', 
        'March'     => 'Mars', 
        'April'     => 'Avril', 
        'May'       => 'Mai', 
        'June'      => 'Juin', 
        'July'      => 'Juillet',
        'August'    => 'Août', 
        'September' => 'Septembre',
        'October'   => 'Octobre',
        'November'  => 'Novembre', 
        'December'  => 'Décembre',
        'Feb' => 'Fév', 
        'Apr' => 'Avr', 
        'May' => 'Mai',
        'Jun' => 'Juin', 
        'Jul' => 'Juil',
        'Aug' => 'Août',
        'Dec' => 'Déc',
    ];

    private function tradDateToFr($date)
    {
        foreach($this->format as $englishDate => $frenchDate){
            if(stristr($date, $englishDate)){
                $date = str_replace($englishDate, $frenchDate, $date);
            }
        }
        return $date;
    }

    public function whatDateToShow($message)
    {
        $now = new \DateTime;
        
        $date = $this->tradDateToFr($message->getCreatedAt()->format('l j F Y'));

        if($message->getCreatedAt()->format('Y') == $now->format('Y')){
            $date = $this->tradDateToFr($message->getCreatedAt()->format('l j F'));
        }
        if($message->getCreatedAt()->format('z Y') == $now->format('z Y')){
            $date = $message->getCreatedAt()->format('H\hi');
        }
        if($message->getCreatedAt()->format('z') == $now->format('z') - 1 && $message->getCreatedAt()->format('Y') == $now->format('Y')){
            $date = 'Hier à ';
            $date .= $message->getCreatedAt()->format('H\hi');
        }

        return $date;
    }
}