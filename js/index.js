import catalogoAcrilico from '../data/acrilico.json' assert {type: 'json'}
import catalogoAcero from '../data/acero.json' assert {type: 'json'}
import catalogoPlastico from '../data/plastico.json' assert {type: 'json'}

class Carousel{
    constructor(carousel){
        //find elements
        this.carousel = carousel;
        this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
        this.buttonNext = carousel.querySelector(`[data-carousel-button-next]`);
        this.slidesContainer = carousel.querySelector(`[data-carousel-slides-container]`);

        //state
        this.currentSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        //add events
        this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
        this.buttonNext.addEventListener('click', this.handleNext.bind(this));
    }

    handleNext(){
        //this.currentSlide = modulo(this.currentSlide + 1, this.numSlides);
        this.currentSlide = (this.currentSlide + 1) % this.numSlides;
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
        // console.log('boton adelante');
        // console.log(this.carousel.style.getPropertyValue('--current-slide'));
    }

    handlePrevious(){
        //this.currentSlide = modulo(this.currentSlide - 1, this.numSlides);
        this.currentSlide = (this.currentSlide - 1 < 0 ) ? (this.currentSlide - 1) + this.numSlides : (this.currentSlide - 1) % this.numSlides;
        this.carousel.style.setProperty('--current-slide', this.currentSlide);
        // console.log('boton aatras');
        // console.log(this.carousel.style.getPropertyValue('--current-slide'));
    }
}

class Articulos{
    constructor(nom, id, tipo, precio){
        this.nom = nom;
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const carousel = document.querySelectorAll('[data-carousel]');
carousel.forEach(carousel => new Carousel(carousel));

const termo = [
    new Articulos("Termo Mate", "A17188", "ACRILICO", 160),
    new Articulos("Glitter Star", "A010232-MET", "ACRILICO", 180), 
    new Articulos("Vaso Fiest", "VA1565", "PLASTICO", 30)
];


const articulosNom = document.querySelectorAll('.nombreArticulo');
const articulosP = document.querySelectorAll('.precio');

articulosNom.forEach((art, i) => {
    art.innerText = termo[i].nom
});

articulosP.forEach((art, i) => {
    art.innerText = "$"+termo[i].precio
});

//console.log(articulosP[1]);

function Agregar(){
    const data = JSON.stringify(termo[0]);
    console.log(data);
    localStorage.setItem('1',data);
}

function Agregar2(){
    const data = JSON.stringify(termo[1]);
    console.log(data);
    localStorage.setItem('2',data);
}

function Agregar3(){
    const data = JSON.stringify(termo[2]);
    console.log(data);
    localStorage.setItem('3',data);
}

const agregarCarrito1 = document.querySelector('[btnAgregarCarrito1]');

agregarCarrito1.addEventListener('click', Agregar);

const agregarCarrito2 = document.querySelector('[btnAgregarCarrito2]');

agregarCarrito2.addEventListener('click', Agregar2);

const agregarCarrito3 = document.querySelector('[btnAgregarCarrito3]');

agregarCarrito3.addEventListener('click', Agregar3);


console.log(catalogoAcero);
