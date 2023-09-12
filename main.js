$(function () {
  $("#how-you-doin")
    .mouseout(function () {
      $(this).text("How you doin?");
    })
    .mouseover(function () {
      $(this).text("Hope you are doin good!");
    });

  $('#how-you-doin').on('click', function () {
    try {
      var eventProperties = {
        "page url": "https://girishgv21.github.io/", "platform": "Web", "button name": "How you Doin?"
      };
      logEventAmplitude("web_user", "hero button clicked", eventProperties);
    } catch (err) {
      console.log(err);
    }
  })

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".header-row").addClass("active");
    } else {
      $(".header-row").removeClass("active");
    }

  });

  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
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

      $('.page-menu').on('click', function () {
        $(".trigger-click").trigger("click");
      })
    }
  }

  checkPosition()

  document.getElementById("year").innerHTML = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: json
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });

});
