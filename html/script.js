// Menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('.closed');
const closeButton = document.querySelector('.open');

// On ouvre le menu en cliquant sur le burger
burgerButton.addEventListener('click', (event) => {
    // Si on utilise event.target, attention, ce n'est pas forcément le button
    // mais ça peut être le svg dedans ou un élément qui est dans le bouton.
    // Le event.currentTarget est forcément l'élément sur lequel on a mis l'événement
    // au clic.
    console.log(event.target, event.currentTarget);
    burgerButton.style.display = 'none';
    closeButton.style.display = 'block';
    mobileMenu.style.display = 'block';
});

// On ferme le menu en cliquant la croix
closeButton.addEventListener('click', () => {
    closeButton.style.display = 'none';
    burgerButton.style.display = 'block';
    mobileMenu.style.display = 'none';
});

// Commander maintenant
const allDivs = document.querySelectorAll('#section-1 .w-1\\/2');
const titleElement = document.querySelector('#title');

document.querySelector('.order-now').addEventListener('click', (event) => {
    event.preventDefault();

    // Cacher les divs et afficher le titre
    allDivs.forEach(el => el.style.display = 'none');
    titleElement.style.display = 'block';

    // Au bout de 5 secondes, je réaffiche les divs et je cache le titre
    setTimeout(() => {
        allDivs.forEach(el => el.style.display = 'block');
        titleElement.style.display = 'none';
    }, 5000);
});

// Vidéo
const videoImg = document.querySelector('#video img');
const videoIframe = document.querySelector('#video iframe');

document.querySelector('.btn-play').addEventListener('click', () => {
    videoImg.style.display = 'none';
    videoIframe.style.display = 'block';
});

// Year
const yearElement = document.querySelector('#year');

document.querySelector('.btn-year').addEventListener('click', (event) => {
    event.preventDefault();
    let button = event.currentTarget; // le bouton qui est cliqué

    // Le parseInt nous assure qu'on travaille bien avec des entiers et pas des chaines de
    // caractères ('5' + '1' = '51')
    yearElement.innerHTML = parseInt(yearElement.innerHTML) + parseInt(button.dataset.year);
});

// Random numbers
const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.btn-random').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('#orders-stat').innerHTML = random(1, 99999)+'+';
    document.querySelector('#customers-stat').innerHTML = random(1, 99999)+'+';
    document.querySelector('#chefs-stat').innerHTML = random(1, 99999)+'+';
});

// Formulaire
const emailElement = document.querySelector('#email');
const titleForm = document.querySelector('#title-form');

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Si le champ est vide, on ne fait rien
    if (emailElement.value === '') {
        return; // On arrête le code
    }

    const form = event.currentTarget;

    form.style.display = 'none';
    titleForm.style.display = 'block';
    titleForm.innerHTML = 'Merci '+emailElement.value;
    emailElement.value = ''; // Je vide le champ après l'envoi du formulaire

    setTimeout(() => {
        form.style.display = 'flex';
        titleForm.style.display = 'none';
    }, 5000);
});
