// Menu mobile
const mobileMenu = document.querySelector('.mobile-menu');
const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.closed');

document.querySelector('.closed').addEventListener('click', (event) => {
    event.target.style.display = 'none';
    openButton.style.display = 'block';
    mobileMenu.style.display = 'block';
});

document.querySelector('.open').addEventListener('click', (event) => {
    event.target.style.display = 'none';
    closeButton.style.display = 'block';
    mobileMenu.style.display = 'none';
});

// Commander maintenant
const allDivs = document.querySelectorAll('#section-1 .w-1\\/2');
const titleElement = document.querySelector('#title');

document.querySelector('.order-now').addEventListener('click', () => {
    allDivs.forEach(el => el.style.display = 'none');
    titleElement.style.display = 'block';

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

    yearElement.innerHTML = parseInt(yearElement.innerHTML) + parseInt(event.target.dataset.year);
});

// Random numbers
const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('.btn-random').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('#orders-stat').innerHTML = random(99, 99999)+'+';
    document.querySelector('#customers-stat').innerHTML = random(99, 99999)+'+';
    document.querySelector('#chefs-stat').innerHTML = random(99, 99999)+'+';
});

// Formulaire
const emailElement = document.querySelector('#email');
const titleForm = document.querySelector('#title-form');

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.target;
    emailElement.value = '';

    form.style.display = 'none';
    titleForm.style.display = 'flex';
    titleForm.innerHTML = 'Merci '+emailElement.value;

    setTimeout(() => {
        form.style.display = 'flex';
        titleForm.style.display = 'none';
    }, 5000);
});
