//CAROUSEL A

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var direction;

prev.addEventListener('click', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(20%)'
});

next.addEventListener('click', function() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)'
});

slider.addEventListener('transitionend', function() {
    
    if (direction === -1){
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function() {
        slider.style.transition = 'all 0.5s';
    })

})







//CAROUSEL B

const sliderB = document.querySelector('.sliderB');
const carouselB = document.querySelector('.carouselB');

const prevB = document.querySelector('.prevB');
const nextB = document.querySelector('.nextB');

var directionB;

prevB.addEventListener('click', function() {
    if (directionB === -1) {
        sliderB.appendChild(sliderB.firstElementChild);
        directionB = 1;
    }
    
    carouselB.style.justifyContent = 'flex-end';
    sliderB.style.transform = 'translate(20%)'
});

nextB.addEventListener('click', function() {
    directionB = -1;
    carouselB.style.justifyContent = 'flex-start';
    sliderB.style.transform = 'translate(-20%)'
});

sliderB.addEventListener('transitionend', function() {
    
    if (directionB === -1){
        sliderB.appendChild(sliderB.firstElementChild);
    } else if (directionB === 1) {
        sliderB.prepend(sliderB.lastElementChild);
    }

    sliderB.style.transition = 'none';
    sliderB.style.transform = 'translate(0)';
    setTimeout(function() {
        sliderB.style.transition = 'all 0.5s';
    })

})