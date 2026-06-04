console.log("JS chargé");

let currentIndex = 0; //position de ma slide 

const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

console.log(leftArrow);
console.log(rightArrow);




//Slide déjà présent
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

/*  Ajout bullet point : Partie installation*/
// créer les points
for (let i = 0; i < slides.length; i++) {
	// récupération du conteneur des dots
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
console.log("valeur i : %d valeur de slide.length : %d", i, slides.length);
}

// récupération de tous les dots créés
const dots = document.querySelectorAll(".dot");
// on active le premier dot (première image affichée)
dots[0].classList.add("dot_selected");

// fonction mise à jour
function updateSlide() {
	bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image;
	bannerText.innerHTML = slides[currentIndex].tagLine;

	document.querySelector(".dot_selected").classList.remove("dot_selected");
	dots[currentIndex].classList.add("dot_selected");
}


/*
// flèche gauche (repars et s'arrete au 1er)
leftArrow.addEventListener("click", () => {
	currentIndex--;
	updateSlide();
});

// flèche droite (s'arrete au 4eme)
rightArrow.addEventListener("click", () => {
	currentIndex++;
	updateSlide();
}); */




// clic flèche gauche (image précédente)
leftArrow.addEventListener("click", () => {

	// si on est à la première image → on va à la dernière
	if (currentIndex === 0) {
		currentIndex = slides.length - 1;
	} else {
		// sinon on recule
		currentIndex--;
	}
			// met à jour image + texte + point
	updateSlide();
});

// clic flèche droite (aller à la prochaine image)
rightArrow.addEventListener("click", () => {

	// si on est à la dernière image → on revient à la première
	if (currentIndex === slides.length - 1) {
		currentIndex = 0;
	} else {
		// sinon on avance
		currentIndex++;
	}
	// met à jour image + texte + point
	updateSlide();
});