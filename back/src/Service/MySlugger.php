<?php
namespace App\Service;

use Symfony\Component\String\Slugger\SluggerInterface;

class MySlugger
{
    private $slugger;
    // Le Slug en minuscule ou non
    private $toLower;

    public function __construct(SluggerInterface $slugger, bool $toLower)
    {
        $this->slugger = $slugger;
        $this->toLower = $toLower;
    }

    /**
     * @param String $string La chaine à slugifier
     * @return String
     */
    public function slugify(string $string) : string
    {
        // Le nouveau slug, en minuscule
        // @see : https://symfony.com/doc/current/components/string.html#methods-to-create-string-objects
        // @see : https://symfony.com/doc/current/components/string.html#methods-to-change-case
        
        // Doit-on passer le slug en minuscule ?
        if($this->toLower === true) {
            $slug = $this->slugger->slug($string)->lower();
        } else {
            $slug = $this->slugger->slug($string);
        }

        return $slug;
    }
}