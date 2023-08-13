
$(document).ready(function(){
    $("#owl-demo").owlCarousel({
        autoPlay:3000,
        items:6,
        itemsDesktop:[1199,5],
        itemsDesktopSmall:[979,5]

    });
});
$(function () {
  // Remove Search if user Resets Form or hits Escape!
$('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
console.log(event.currentTarget);
if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
  $(event.currentTarget).attr('type') == 'reset') {
  closeSearch();
}
});

function closeSearch() {
      var $form = $('.navbar-collapse form[role="search"].active')
  $form.find('input').val('');
$form.removeClass('active');
}

// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
event.preventDefault();
var $form = $(this).closest('form'),
  $input = $form.find('input');
$form.addClass('active');
$input.focus();

});
// ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
// if your form is ajax remember to call `closeSearch()` to close the search container
$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
event.preventDefault();
var $form = $(this).closest('form'),
  $input = $form.find('input');
$('#showSearchTerm').text($input.val());
      closeSearch()
});
});

// $('.owl-carousel').owlCarousel({
//   margin: 15,
//   nav: true,
//   navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
//   responsive: {
//     0: {
//       items: 1
//     },
//     600: {
//       items: 2
//     },
//     1000: {
//       items: 3
//     }
//   }
// });
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });
// $(document).ready(function() {
 
//   $("#owl-demo").owlCarousel({
//     navigation : true
//   });
 
// });
$( '.owl-carousel' ).owlCarousel({
  items: 8,
  nav: true,
  dots: false,
  mouseDrag: true,
  responsiveClass: true,
  loop:true,
  center: true,
  
  responsive: {
      0:{
        items: 1
      },
      480:{
        items: 3
      },
      769:{
        items: 6
      }
  }
});

//Background image
$( '.img-wrap' ).each( function(){
  var img = $( this ).find( 'img' );
  var src = img.attr( 'src' );
  $( this ).css( 'background-image', 'url( '+ src +' )' );
});
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<span>&#8249;</span>", "<span>&#8250;</span>"]
  });
});

function toggleParagraph(){
  const paragraph=document.getElementById('hidden-paragraph');
  if (paragraph.style.display==='none'){
    paragraph.style.display='block';
  }else{
    paragraph.style.display='none';
  }
  
}

// item owl
const slides=document.querySelectorAll(".slide")
var counter=0;
// console.log('slides')
slides.forEach(
  (slide,index)=>{
    slide.style.left='${index * 100}%'
  }
)

function myFunction1(){
  var x=document.getElementById("myTopnav");
  if(x.className === "nvbr"){
    x.className += " responsive";
  }else {
    x.className = "nvbr";
  }
}
const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});


const menuToggleBtn=document.querySelector(".menu-toggle");
const navlist=document.querySelector(".nvbr");

menuToggleBtn.addEventListener("click",function(){
  navlist.classList.toggle("active");
});

// navbar

function toggleMenu() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
  document.getElementById("slideshow-container").style.paddingTop='500px';
}

function toggleDropdown(event) {
  var dropdown = event.target.closest(".drpdwn");
  if (dropdown) {
    dropdown.classList.toggle("show-dropdown");
  }
}

// Attach click event to the document to handle dropdown toggling
document.addEventListener('click', toggleDropdown);
function toggleNextDivPosition() {
  var nextDiv = document.querySelector('.ne');
  nextDiv.classList.toggle('down');
}

// close
$(document).ready(function(){
  $('.owl-carousel2').owlCarousel({
    items: 1, // Number of items to show on smaller screens
    loop: true,
    nav: true,
    dots: true,
    responsive: {
      // Responsive settings for larger screens (optional)
      768: {
        items: 3, // Number of items to show on larger screens
      }
    }
  });
});
function myfun2(){
  var x=document.getElementById("mydiv")
  if (x.style.display === 'none'){
    x.style.display='block';
  } else{
    x.style.display='none';
  }
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true, // Change to 'false' if you don't want navigation arrows
    responsive: {
      0: {
        items: 1 // Show 1 item on screens of all sizes (width <= 0px)
      }
    }
  });
});


document.addEventListener("click", function(event) {
  var navbar = document.querySelector(".navbar");
  var targetElement = event.target; // Element that was clicked

  // Check if the clicked element is outside the navbar
  
     if (!navbar.contains(targetElement)) {
    // The click was outside the navbar, so hide the navbar or perform any other action here.
    navbar.style.display = "none"; // Example: hide the navbar
  }

});
