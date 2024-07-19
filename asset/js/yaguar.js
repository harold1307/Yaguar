$(document).ready(function () {
     $(".carousel").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 3000,
          centerMode: true,
          centerPadding: "30px",
          arrows: false,
          variableWidth: true,
          easing: "linear",
          touchMove: true,
          responsive: [
               {
                    breakpoint: 1399,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "30px",
                         slidesToShow: 6,
                    },
               },
               {
                    breakpoint: 1200,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "30px",
                         slidesToShow: 6,
                         variableWidth: false,
                    },
               },
               {
                    breakpoint: 992,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "20px",
                         slidesToShow: 5,
                         variableWidth: false,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "10px",
                         slidesToShow: 3,
                         variableWidth: false,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "10px",
                         slidesToShow: 2,
                         variableWidth: false,
                    },
               },
               {
                    breakpoint: 320,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "10px",
                         slidesToShow: 2,
                         variableWidth: false,
                    },
               },
          ],
     });
});

$(document).ready(function () {
     $(".carousel_testimonios").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: "30px",
          arrows: true,
          responsive: [
               {
                    breakpoint: 1200,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 3,
                    },
               },
               {
                    breakpoint: 992,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 2,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 1,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 1,
                    },
               },
          ],
     });
});

document.querySelectorAll(".pasos-pc-menu-btn").forEach(function (item) {
     var pmdHAC = new bootstrap.Tab(item);
     item.addEventListener("mouseover", function () {
          document.querySelectorAll(".pasos-pc-menu-btn").forEach(function (item2) {
               item2.classList.remove("active");
          });
          document.querySelectorAll(".pasos-pc-contenido-item").forEach(function (item3) {
               item3.classList.remove("active");
          });
          pmdHAC.show();
     });
});
