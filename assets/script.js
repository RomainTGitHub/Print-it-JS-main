const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des flèches de navigation du carrousel
var prevButton = document.querySelector('.carousel-control-prev');
var nextButton = document.querySelector('.carousel-control-next');

// Ajout d'événements de clic aux flèches de navigation
prevButton.addEventListener('click', function () {
	console.log('Flèche précédente cliquée');
});

nextButton.addEventListener('click', function () {
	console.log('Flèche suivante cliquée');
});