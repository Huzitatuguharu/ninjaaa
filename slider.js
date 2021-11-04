
// arrow click
function plusSlides(){
  if(item_image0.style.display =="block"){
  item_image0.style.display = "none";
item_image1.style.display = "block";
}else{
item_image0.style.display = "block";
item_image1.style.display = "none";
}
}

// // dot click
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = list.state.item.img;
// //   let dots = document.getElementsByClassName("blogSlider__dots--dot");
  
// //   lastSlide clickRightarrow
//   if (n > slides.length) {
//     n = 0;
//   }

// // FirstSlide clickLeftarrow
//   if (n < 0) {
//     n = slides.length-1;
//   }

// //   all displaynone
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }

// //   display selected img
// //   slides[0].style.display = "block";
// //   dots[slideIndex].className += " active";
// }