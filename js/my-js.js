$(document).ready(function () {
  // start js for navbar //
  if ($(window).width() < 991) {
    lastScroll = 0;
    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
      } else {
        $(".reham-search").slideUp("500");
        $(".btn-search-mobile .la-search").removeClass("la-times");
      }
      lastScroll = scroll;
      if (scroll == 0) {
        $(".reham-search").slideDown("500");
        $(".btn-search-mobile .la-search").removeClass("la-times");
      }
    });
  }
  $(".btn-search-mobile").click(function (e) {
    $(".fixed .reham-search").slideToggle("500");
    $(".btn-search-mobile .la-search").toggleClass("la-times");
  });

  (function ($) {
    // Begin jQuery36.
    $(function () {
      // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      // open mobile-search

      // Clicking away from dropdown will remove the dropdown class

      $(".dropdown").click(function (e) {
        $(".drop-mobile").toggle();
        $(".up-arrow").toggle();
        $(".down-arrow").toggle();

        // Close one dropdown when selecting another
      });
      // Toggle open and close nav styles on click
      $(".nav-toggle").click(function () {
        // $(".re-show").toggle();
        $(".re-hide").css("display", "block");
        $(".cover").toggle();
      });
      $(".re-show").click(function (event) {
        if (document.dir == "rtl") {
          $("nav ").css("right", "0");
        } else {
          $("nav ").css("left", "0");
        }
        $("body").css("overflow", "hidden");
        $(".navv").toggle();
        if ($(".nav-list").hasClass("dismiss")) {
          $(".nav-list").removeClass("dismiss").addClass("selected").show();
        }
        event.preventDefault();
      });
      $(".re-hide").click(function (event) {
        if ($(".nav-list").hasClass("selected")) {
          $(".nav-list").removeClass("selected").addClass("dismiss");
        }
        event.preventDefault();
        $("body").css("overflow", "auto");
        $(".cover").toggle();
        // $(".re-show").toggle();
      });
      $(".cover").on("click", function () {
        $(".re-hide").click();
      });
    }); // end DOM ready
  })(jQuery); // end jQuery83"9?"

  if ($(window).width() > 991) {
    var previousScroll = 0;
    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll < 100) {
        $(".fixed-nav")
          .removeClass("fixed")
          .removeClass("fixed1")
          .removeClass("is-visible");
      } else if (
        currentScroll > 0 &&
        currentScroll < $(document).height() - $(window).height()
      ) {
        if (currentScroll > previousScroll) {
          hideNav();
        } else {
          showNav();
        }
        previousScroll = currentScroll;
      }
    });

    function hideNav() {
      $(".fixed-nav")
        .removeClass("is-visible")
        .addClass("is-hidden")
        .addClass("fixed")
        .addClass("fixed1");
    }

    function showNav() {
      $(".fixed-nav")
        .removeClass("is-hidden")
        .removeClass("fixed1")
        .addClass("is-visible")
        .addClass("scrolling");
    }
  }

  if ($(window).width() < 991) {
    var previousScroll = 0;
    $(window).scroll(function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll < 100) {
        $(".header")
          .removeClass("fixed")
          .removeClass("fixed1")
          .removeClass("is-visible");
      } else if (
        currentScroll > 0 &&
        currentScroll < $(document).height() - $(window).height()
      ) {
        if (currentScroll > previousScroll) {
          hideNav();
        } else {
          showNav();
        }
        previousScroll = currentScroll;
      }
    });

    function hideNav() {
      $(".header")
        .removeClass("is-visible")
        .addClass("is-hidden")
        .addClass("fixed")
        .addClass("fixed1");
    }

    function showNav() {
      $(".header")
        .removeClass("is-hidden")
        .removeClass("fixed1")
        .addClass("is-visible")
        .addClass("scrolling");
    }
  }

  // end  js for navbar //

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // start footer accordion  //
  if ($(window).width() < 991) {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function myFunction(y) {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        $(this).siblings(".panel").slideToggle(200);
      });
    }
    $(".accordion").click(function () {
      $(this).children("i").toggle();
    });
  }
  //end footer accordion //

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // start slider carousel //
  var owl = $(".slider");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    rtl: document.dir == "rtl" ? true : false,
    loop: true,

    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='las la-angle-right right-arrow'></i>",
      "<i class='las la-angle-left left-arrow'></i>",
    ],
    responsive: {
      0: {
        autoplay: true,
        items: 1,
      },
      600: {
        autoplay: true,
        items: 1,
      },
      1200: {
        autoplay: true,
        items: 1,
      },
    },
  });

  // end slider carousel //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // product carousel //

  var owl = $(".product");
  owl.owlCarousel({
    nav: true,
    rtl: document.dir == "rtl" ? true : false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='las la-angle-right right-arrow'></i>",
      "<i class='las la-angle-left left-arrow'></i>",
    ],
    responsive: {
      0: {
        margin: 20,
        items: 3,
      },
      600: {
        margin: 30,
        items: 2,
      },
      1200: {
        margin: 30,
        items: 6,
      },
    },
  });

  // end product carousel //

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // add-cart carousel //

  var owl = $(".add-cart-carousel");
  owl.owlCarousel({
    nav: true,
    rtl: document.dir == "rtl" ? true : false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='las la-angle-right right-arrow'></i>",
      "<i class='las la-angle-left left-arrow'></i>",
    ],
    responsive: {
      0: {
        margin: 10,
        items: 2,
      },
      600: {
        margin: 30,
        items: 2,
      },
      1200: {
        margin: 30,
        items: 4,
      },
    },
  });

  // end add-cart carousel //
  // brands carousel //

  var owl = $(".brand");
  owl.owlCarousel({
    nav: false,
    rtl: document.dir == "rtl" ? true : false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      "<i class='las la-angle-right right-arrow'></i>",
      "<i class='las la-angle-left left-arrow'></i>",
    ],
    responsive: {
      0: {
        margin: 15,
        items: 3,
      },
      600: {
        margin: 50,
        items: 3,
      },
      1200: {
        margin: 45,
        items: 6,
      },
    },
  });

  // end brands carousel //

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /// wow js ///
  new WOW().init();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// search for mobile //
$(".search-icon").click(function () {
  $(".search-block-in-mobile").toggle();
  $(".search-input").focus();
});

// end search for mobile //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// scroll to top //
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
