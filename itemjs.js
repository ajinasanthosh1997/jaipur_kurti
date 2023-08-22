$( '.owl-carousel' ).owlCarousel({
    items: 3,
    nav: true,
    dots: true,
    mouseDrag: true,
    responsiveClass: true,
    loop:true,
    center: true,
    
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 1
        }
    }
  });
  // item owl
const slides=document.querySelectorAll(".slide")
var counter=0;
// console.log('slides')
slides.forEach(
  (slide,index)=>{
    slide.style.left=`${index * 100}%`
  }
)

const goPrev = () => {
  counter--
  slideImage()
}

const goNext = () => {
  counter++
  slideImage()
}

const slideImage = () =>{
  slides.forEach(
    (slide) => {
      slide.style.transform=`translateX(-${counter *100}%)`
    }
  )
}


const countElement = document.querySelector('.count');
const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');

let itemCount = 1;

decrementButton.addEventListener('click', () => {
  if (itemCount > 1) {
    itemCount--;
    countElement.textContent = itemCount;
  }
});

incrementButton.addEventListener('click', () => {
  itemCount++;
  countElement.textContent = itemCount;
});