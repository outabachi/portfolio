const liste = document.querySelectorAll(".liste");
function activeLink() {
    liste.forEach((item) =>
        item.classList.remove("active"));
    this.classList.add("active");
}
liste.forEach((item) =>
    item.addEventListener("click", activeLink));

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
}