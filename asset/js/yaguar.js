$(document).ready(function () {
     $(".carousel").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "30px",
          arrows: true,
          responsive: [
               {
                    breakpoint: 1200,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "30px",
                         slidesToShow: 6,
                    },
               },
               {
                    breakpoint: 992,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "40px",
                         slidesToShow: 4,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 3,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "0px",
                         slidesToShow: 2,
                    },
               },
          ],
     });
});
