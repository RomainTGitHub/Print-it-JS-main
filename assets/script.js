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
];

// Récupération des éléments du carrousel
const carouselContainer = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');
const carouselIndicators = document.querySelector('.carousel-indicators');

let currentSlideIndex = 0;
let autoScrolling = true; // Défilement automatique activé par défaut

// Fonction pour afficher les diapositives
function showSlides() {
	// Création du contenu HTML pour chaque diapositive
	const slidesHTML = slides.map((slide, index) => `
        <div class="carousel-item ${index === currentSlideIndex ? 'active' : ''}">
            <img src="assets/images/slideshow/${slide.image}" class="d-block w-100" alt="Slide">
            <div class="carousel-caption">
                <p>${slide.tagLine}</p>
            </div>
        </div>
    `).join('');

	// Insertion du contenu HTML dans le conteneur du carrousel
	carouselContainer.innerHTML = slidesHTML;

	// Mise à jour des indicateurs de navigation
	updateIndicators();
}

// Afficher les diapositives au chargement de la page
showSlides();

// Fonction pour mettre à jour les indicateurs de navigation
function updateIndicators() {
	carouselIndicators.innerHTML = ''; // Réinitialisation des indicateurs

	slides.forEach((_, index) => {
		const indicator = document.createElement('li');
		indicator.classList.add('indicator');
		indicator.dataset.slideTo = index;
		if (index === currentSlideIndex) {
			indicator.classList.add('active');
		}
		carouselIndicators.appendChild(indicator);
	});
}

// Fonction pour activer l'indicateur correspondant à la diapositive actuelle
function setActiveIndicator() {
	const indicators = document.querySelectorAll('.indicator');
	indicators.forEach((indicator, index) => {
		if (index === currentSlideIndex) {
			indicator.classList.add('active');
		} else {
			indicator.classList.remove('active');
		}
	});
}

// Appel de la fonction autoSlide pour activer le défilement automatique
autoSlide();

// Fonction pour passer à la diapositive suivante automatiquement
function autoSlide() {
	setInterval(() => {
		if (autoScrolling) {
			nextSlide();
		}
	}, 5000); // Défilement toutes les 5 secondes
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	showSlides();
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	showSlides();
}

// Écouteurs d'événements pour les clics sur les flèches de navigation
prevButton.addEventListener('click', (event) => {
	if (event.button === 0) { // Vérification si le clic est fait avec le bouton gauche de la souris
		autoScrolling = false;
		prevSlide();
		console.log('Flèche précédente cliquée');
	}
});

nextButton.addEventListener('click', (event) => {
	if (event.button === 0) { // Vérification si le clic est fait avec le bouton gauche de la souris
		autoScrolling = false;
		nextSlide();
		console.log('Flèche suivante cliquée');
	}
});

// Écouteur d'événement pour les clics sur les indicateurs de navigation
carouselIndicators.addEventListener('click', (event) => {
	if (event.target && event.target.matches('.indicator')) {
		const slideTo = parseInt(event.target.dataset.slideTo);
		currentSlideIndex = slideTo;
		showSlides();
	}
});
