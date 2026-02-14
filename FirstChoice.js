const slides = document.querySelectorAll('.slider img');
// console.log("Slides found:", slides.length);

const slider = document.querySelector('.slider');
let index = 0;
let interval;

function autoSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }

    slider.scrollTo({
        left: slides[index].offsetLeft,
        behavior: "smooth"
        
    });   
}

function startSlide() {
    interval = setInterval(autoSlide, 6000);
    console.log("Started");
}

function stopSlide() {
    clearInterval(interval);
    console.log("Stop");
}

slider.addEventListener("mouseenter", stopSlide);
slider.addEventListener("mouseleave", startSlide);

startSlide();

{/* <div><button onClick="topFunction()" id="backToTop" title="To Top">Top</button></div> */}