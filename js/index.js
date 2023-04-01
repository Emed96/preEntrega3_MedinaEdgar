//import {currentSlide} from '../scss/utils/_variables.scss'

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

const carousel = document.querySelectorAll('[data-carousel]');
carousel.forEach(carousel => new Carousel(carousel));

