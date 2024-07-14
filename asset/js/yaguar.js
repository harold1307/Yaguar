$(document).ready(function () {
     $(".carousel").slick({
          infinite: true,
          slidesToShow: 7,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          centerMode: true,
          centerPadding: "20px",  
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
                         centerPadding: "20px",
                         slidesToShow: 4,
                    },
               },
               {
                    breakpoint: 768,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "10px",
                         slidesToShow: 3,
                    },
               },
               {
                    breakpoint: 480,
                    settings: {
                         arrows: false,
                         centerMode: true,
                         centerPadding: "10px",
                         slidesToShow: 2,
                    },
               },
          ],
     });
});

//Botones

$(function () {
     $(".btn-6")
          .on("mouseenter", function (e) {
               var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
               $(this).find("span").css({ top: relY, left: relX });
          })
          .on("mouseout", function (e) {
               var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
               $(this).find("span").css({ top: relY, left: relX });
          });
});
