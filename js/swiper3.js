/* swiper slide side-bar */

var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    autoplay:{
      dalay:2500,
    },
    loop:true,
  });


  /* swiper slide Sale_slide */

var swiper = new Swiper(".sale_sec", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests: true,
      clickable: true
    },
    slidesPerView: 5,
    spaceBetween:30,
    autoplay:{
      dalay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
  });