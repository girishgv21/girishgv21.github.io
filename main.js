$(function () {
  $("#how-you-doin")
    .mouseout(function () {
      $(this).text("How you doin?");
    })
    .mouseover(function () {
      $(this).text("Hope you are doin good!");
    });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".header-row").addClass("active");
    } else {
      $(".header-row").removeClass("active");
    }
    
  });

  var lastScrollTop = 0;
    $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        $('header').addClass('hide');
    } else {
        $('header').removeClass('hide');
    }
    lastScrollTop = st;
    });
    

    function checkPosition() {
      if (window.matchMedia('(max-width: 768px)').matches) {
        $(".trigger-click").on("click", function () {
          $(this).toggleClass("active");
          $(".menu-col").slideToggle();
          $("header").toggleClass("transparent");
        });
      
        $('.page-menu').on('click', function() {
          $(".trigger-click").trigger( "click" );
        })
      }
  }

  checkPosition()

  document.getElementById("year").innerHTML = new Date().getFullYear();

});
