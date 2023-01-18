let headr=document.querySelector('.header');
let menuImg=document.querySelector('.menu-img');
let closeImg=document.querySelector('.close-img');
function ShowHeader(){
headr.style.display='block';
menuImg.style.display='none';
closeImg.style.display='block';
};

function CloseHeader(){
headr.style.display='none';
menuImg.style.display='block';
closeImg.style.display='none';
};



// -------------slider-----
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var slideIndexo = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndexo += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndexo = 1}
  if (n < 1) {slideIndexo = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexo-1].style.display = "block";
}



let Animat=document.querySelector("#anime1");
if(this.window.pageYOffset < 650){
  Animat.style.visibility='hidden';
}
function animeOne(){
  Animat.className += " animate__fadeInUp";  
}
window.addEventListener('scroll',function(){
  if(this.window.pageYOffset > 650){
    Animat.style.visibility='visible';
    animeOne();
  }
});



let AnimatTwo=document.querySelector("#anime2");
if(this.window.pageYOffset < 925){
  AnimatTwo.style.visibility='hidden';
}
function animeTwo(){
  AnimatTwo.className += " animate__fadeInUp";
}
window.addEventListener('scroll',function(){
  if(this.window.pageYOffset > 925){
    animeTwo();
  AnimatTwo.style.visibility='visible';
  }
});
