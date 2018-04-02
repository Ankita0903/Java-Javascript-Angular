
	var actorApp= angular.module('actorApp',[]);
		
    actorApp.controller('ActorController', function ActorController($scope){


	function Actor(name, image, bio) {
    var name = name;
    var image = image;
	var bio = bio;
	
    
    this.getName = function() 
	{ return name; 
	};
    
    this.getImage = function() 
	{ return image; 
	};
   
   this.getBio = function()
   { return bio; };
}

	$scope.cast=[
    new Actor("Scarlett Johansson", "Scarlett Johansson.jpg", "Scarlett Ingrid Johansson is an American actress and singer. She was among the world's highest-paid actresses from 2014 to 2016, has made multiple appearances in the Forbes Celebrity 100, and has a star on the Hollywood Walk of Fame."),
    new Actor("Chris Evans", "Chris Evans.jpg", "Chris Evans Christopher Robert Evans[1] (born June 13, 1981)[2] is an American actor. Evans is known for his superhero roles as the Marvel Comics characters Captain America in the Marvel Cinematic Universe"),
    new Actor("Robert Downey Jr", "Robert Downey Jr.jpg", "Robert John Downey Jr.is an American actor and singer. His career has included critical and popular success in his youth, followed by a period of substance abuse and legal troubles, and a resurgence of commercial success in middle age."),
    new Actor("Chris Hemsworth", "Chris Hemsworth.jpg", "Christopher Hemsworth[1] (born 11 August 1983)[2][3] is an Australian actor. He is known for playing Kim Hyde in the Australian TV series Home and Away (2004–07) and Thor in the Marvel Cinematic Universe since 2011."),
    new Actor("Jeremy Renner", "Jeremy Renner.jpg", "Jeremy Lee Renner is an American actor. He appeared largely in independent films, such as Dahmer and Neo Ned. Renner appeared in supporting roles in bigger films, such as S.W.A.T. "),
    new Actor("Mark Ruffalo", "Mark Ruffalo.jpg", "Mark Alan Ruffalo is an American actor, filmmaker, and social activist. He made his screen debut in an episode of CBS Summer Playhouse (1989), followed by minor film roles. He was part of the original cast of This Is Our Youth (1996), for which he was nominated for an Independent Spirit Award. Thomas William Hiddleston is an English actor, producer, and musician. At the beginning of his career, he appeared in West End theatre productions of Cymbeline and Ivanov."),
    new Actor("Tom Hiddleston", "Tom Hiddleston.jpg", "Thomas William Hiddleston is an English actor, producer, and musician. At the beginning of his career, he appeared in West End theatre productions of Cymbeline and Ivanov."),
    new Actor("Samuel L. Jackson", "Samuel L. Jackson.jpg", "Samuel Leroy Jackson is an American actor and film producer. He achieved prominence and critical acclaim in the early 1990s with films such as Goodfellas, Jungle Fever, Patriot Games,."),
    new Actor("Cobie Smulders", "Cobie Smulders.jpg", "Jacoba Francisca Maria "Cobie" Smulders is a Canadian actress and model. She is best known for her starring roles as Robin Scherbatsky on the television comedy series How I Met Your Mother and Maria Hill in the Marvel Cinematic Universe.")
   
	];

});
