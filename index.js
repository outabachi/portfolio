const liste = document.querySelectorAll(".liste");
function activeLink() {
    liste.forEach((item) =>
        item.classList.remove("active"));
    this.classList.add("active");
}
liste.forEach((item) =>
    item.addEventListener("click", activeLink));
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    const accueil = document.getElementById('accueil');
    const quiSuisJe = document.getElementById('qui-suis-je');
    const mesProjets = document.getElementById('mes-projets');
    const contact = document.getElementById('contact');

    const accueilPos = accueil.offsetTop;
    const quiSuisJePos = quiSuisJe.offsetTop;
    const mesProjetsPos = mesProjets.offsetTop;
    const contactPos = contact.offsetTop;

    if (scrollPosition >= accueilPos && scrollPosition < quiSuisJePos - 100) {
        liste.forEach((item) => item.classList.remove("active"));
        liste[0].classList.add("active");
    }
    if (scrollPosition >= quiSuisJePos - 100 && scrollPosition < mesProjetsPos - 100) {
        liste.forEach((item) => item.classList.remove("active"));
        liste[1].classList.add("active");
    }
    if (scrollPosition >= mesProjetsPos - 150 && scrollPosition < contactPos - 150) {
        liste.forEach((item) => item.classList.remove("active"));
        liste[2].classList.add("active");
    }
    let documentHeight = document.documentElement.scrollHeight;

    let windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
        liste.forEach((item) => item.classList.remove("active"));
        liste[3].classList.add("active");
    }
    
});

function scrollToElement1() {
    document.getElementById('accueil').scrollIntoView({ behavior: 'smooth' });
}
function scrollToElement2() {
    document.getElementById('qui-suis-je').scrollIntoView({ behavior: 'smooth' });
    
}
function scrollToElement3() {
    document.getElementById('mes-projets').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        window.scrollBy({
            top: -100,
            behavior: 'smooth'
        });
    }, 500);
}
function scrollToElement4() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

const text = "Bonjour, je suis Mohamed Outabachi, votre développeur full-stack !";
let index = 0;
const speed = 100;
const textElement = document.getElementById("p-text-banner");

function typeWriter() {
   
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
const showSlider = (type) => {
    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
};