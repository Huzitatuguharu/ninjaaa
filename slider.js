
// const slider={
//   slideIndex : 0,
//   showSlides(slideIndex),

//   plusSlides(n) {
//     showSlides(slideIndex += n);
//   },
//   currentSlide(n) {
//     showSlides(slideIndex = n);
//   },

//   showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("blogSlides");
//     let dots = document.getElementsByClassName("blogSlider__dots--dot");
//     if (n > slides.length-1) {
//       slideIndex = 0;
//     }
//     if (n < 0) {
//       slideIndex = slides.length-1
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].className += " active";
//   }
// }
// // // dot click
// // function currentSlide(n) {
// //   showSlides(slideIndex = n);
// // }

// // function showSlides(n) {
// //   let i;
// //   let slides = list.state.item.img;
// // //   let dots = document.getElementsByClassName("blogSlider__dots--dot");
  
// // //   lastSlide clickRightarrow
// //   if (n > slides.length) {
// //     n = 0;
// //   }

// // // FirstSlide clickLeftarrow
// //   if (n < 0) {
// //     n = slides.length-1;
// //   }

// // //   all displaynone
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// // //   for (i = 0; i < dots.length; i++) {
// // //     dots[i].className = dots[i].className.replace(" active", "");
// // //   }

// // //   display selected img
// // //   slides[0].style.display = "block";
// // //   dots[slideIndex].className += " active";
// // }