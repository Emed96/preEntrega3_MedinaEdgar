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

const termo = [];

catalogoAcero.forEach(t => {
    termo.push(
        new Articulos(t.NOMBRE, t.CODIGO, t.TIPO, t['PRECIO-P'])
    )
})

catalogoAcrilico.forEach(t => {
    termo.push(
        new Articulos(t.NOMBRE, t.CODIGO, t.TIPO, t['PRECIO-P'])
    )
})

catalogoPlastico.forEach(t => {
    termo.push(
        new Articulos(t.NOMBRE, t.CODIGO, t.TIPO, t['PRECIO-P'])
    )
})

const art = document.querySelector(".articulos")

termo.forEach(te => {
    art.innerHTML += 
        `<article>
        <div class="btn-agregar">
            <button id="agregarCarrito" class="botonAgregarCarrito" btnAgregarCarrito1>
                <span>
                    Añadir
                </span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"/></svg>
                </span>
            </button>
        </div>
        <div class="nombreArticulo">
                    <h3>Titulo del Articulo</h3>
                    <span>${te.tipo}</span>
                </div>
        <div class="texto">
            <span>${te.precio}</span>
        </div>
        <div class="imagentermoejemplo">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"/><path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"/><path d="m12 12-1-1-2 3h10l-4-6z"/></svg>
        </div>
    </article>`
})
console.log(art);

/*const articulosNom = document.querySelectorAll('.nombreArticulo');
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

agregarCarrito3.addEventListener('click', Agregar3);*/



