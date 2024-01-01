(function($) {
  
  "use strict";

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });

  // Responsive Menu
  var $offcanvasNav = $("#offcanvasNav a");
  $offcanvasNav.on("click", function () {
    var link = $(this);
    var closestUl = link.closest("ul");
    var activeLinks = closestUl.find(".active");
    var closestLi = link.closest("li");
    var linkStatus = closestLi.hasClass("active");
    var count = 0;

    closestUl.find("ul").slideUp(function () {
      if (++count == closestUl.find("ul").length)
        activeLinks.removeClass("active");
    });

    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });

  // Vertical Menu Js
  const $btnMenu = $(".menu-btn");
  const $vmenuContent = $(".vmenu-content");
  $btnMenu.on("click", function (event) {
    $vmenuContent.slideToggle(500);
  });

  $vmenuContent.each(function () {
    var $ul = $(this),
      $lis = $ul.find(".menu-item:gt(08)"),
      isExpanded = $ul.hasClass("expanded");
    $lis[isExpanded ? "show" : "hide"]();

    if ($lis.length > 0) {
      $ul.append(
        $(
          '<li class="expand">' +
            (isExpanded
              ? '<a class="minus" href="javascript:void(0);"><span>- Close Categories</span></a>'
              : '<a href="javascript:void(0);"><span>+ More Categories</span></a>') +
            "</li>"
        ).on("click", function (event) {
          var isExpanded = $ul.hasClass("expanded");
          event.preventDefault();
          $(this).html(
            isExpanded
              ? '<a href="javascript:void(0);"><span>+ More Categories</span></a>'
              : '<a class="minus" href="javascript:void(0);"><span>- Close Categories</span></a>'
          );
          $ul.toggleClass("expanded");
          $lis.toggle(300);
        })
      );
    }
  });

  // Swipper JS

  // Home Slider
  var swiper = new Swiper('.home-slider-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    }
  });

  // Home Slider
  var swiper = new Swiper('.home-slider2-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    }
  });

  // Home Slider
  var swiper = new Swiper('.home-slider3-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  // Product Slider Grid
  var productSliderGrid4 = new Swiper('.product-slider8-container', {
    slidesPerView: 5,
    slidesPerGroup: 10,
    spaceBetween: 0,
    loop: true,
    grid: {rows: 2},
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1200:{
          slidesPerView : 5,
          grid: {rows: 2}
      },

      992:{
          slidesPerView : 4,
          grid: {rows: 2}
      },

      768:{
          slidesPerView : 3,
          grid: {rows: 2}
      },

      480:{
          slidesPerView : 2,
          grid: {rows: 2}
      },

      320:{
          slidesPerView : 1,
          grid: {rows: 2}
      }
    }
  });

  // Product Slider
  var swiper = new Swiper('.product-slider-container', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: true,
    spaceBetween : 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1500:{
          slidesPerView : 5
      },

      992:{
          slidesPerView : 4
      },

      768:{
          slidesPerView : 3
      },

      625:{
          slidesPerView : 2,
      },

      576:{
          slidesPerView : 2,
      },

      480:{
          slidesPerView : 2,
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Product Slider
  var swiper = new Swiper('.product-slider2-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    spaceBetween : 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1500:{
          slidesPerView : 3
      },

      1200:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 2
      },

      768:{
          slidesPerView : 2
      },

      625:{
          slidesPerView : 2,
      },

      576:{
          slidesPerView : 2,
      },

      480:{
          slidesPerView : 2,
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Product Slider Grid
  var productSliderGrid1 = new Swiper('.product-slider3-container', {
    slidesPerView: 1,
    grid: {rows: 5},
    spaceBetween: 30,
    speed: 1300,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1200:{
          slidesPerView : 1,
          grid: {rows: 5}
      },

      992:{
          slidesPerView : 3,
          grid: {rows: 5}
      },

      768:{
          slidesPerView : 2,
          grid: {rows: 5}
      },

      576:{
          slidesPerView : 2,
          grid: {rows: 5}
      },

      0:{
          slidesPerView : 1,
          grid: {rows: 5}
      }
    }
  });

  // Product Slider
  var swiper = new Swiper('.product-slider4-container', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    spaceBetween : 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1500:{
          slidesPerView : 2
      },

      1200:{
          slidesPerView : 2
      },

      992:{
          slidesPerView : 4
      },

      768:{
          slidesPerView : 3
      },

      576:{
          slidesPerView : 2,
      },

      480:{
          slidesPerView : 2,
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Product Slider
  var swiper = new Swiper('.product-slider5-container', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    spaceBetween : 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1500:{
          slidesPerView : 4
      },

      992:{
          slidesPerView : 4
      },

      768:{
          slidesPerView : 3
      },

      625:{
          slidesPerView : 2,
      },

      480:{
          slidesPerView : 2,
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Product Slider Grid
  var productSliderGrid2 = new Swiper('.product-slider6-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    }
  });

  // Product Slider Grid
  var productSliderGrid3 = new Swiper('.product-slider7-container', {
    slidesPerView: 5,
    slidesPerGroup: 10,
    spaceBetween: 0,
    loop: true,
    grid: {rows: 2},
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1200:{
          slidesPerView : 5,
          grid: {rows: 2}
      },

      992:{
          slidesPerView : 4,
          grid: {rows: 2}
      },

      768:{
          slidesPerView : 3,
          grid: {rows: 2}
      },

      480:{
          slidesPerView : 2,
          grid: {rows: 2}
      },

      320:{
          slidesPerView : 1,
          grid: {rows: 2}
      }
    }
  });

  // Product Slider
  var productNav = new Swiper('.single-product-offer-nav-slider', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    breakpoints: {
      576:{
          slidesPerView : 4,
      },

      0:{
          slidesPerView : 2
      }
    }
  });

  var productThumb = new Swiper('.single-product-offer-thumb-slider', {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: '.single-product-offer-nav .swiper-button-next',
      prevEl: '.single-product-offer-nav .swiper-button-prev',
    },
    thumbs: {
      swiper: productNav
    }
  });

  // Product Slider
  var productNav = new Swiper('.single-product-nav-slider', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 4,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    breakpoints: {

      768:{
          slidesPerView : 4
      },

      576:{
          slidesPerView : 3
      },

      480:{
          slidesPerView : 3
      },

      0:{
          slidesPerView : 2
      }
    }
  });

  var productThumb = new Swiper('.single-product-thumb-slider', {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: '.single-swiper-nav .swiper-button-next',
      prevEl: '.single-swiper-nav .swiper-button-prev',
    },
    thumbs: {
      swiper: productNav
    }
  });

  var ProductThumb = new Swiper('.single-product-quick-view-slider', {
    slidesPerView : 1,
    loop: true,
    speed: 1000,
    spaceBetween : 0,
    autoplay: false,
    navigation: {
      nextEl: '.single-product-quick-view-slider .swiper-button-next',
      prevEl: '.single-product-quick-view-slider .swiper-button-prev',
    },
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Product Slider
  var swiper = new Swiper('.blog-slider-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    spaceBetween : 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    breakpoints: {
      1500:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2
      },

      625:{
          slidesPerView : 1,
      },

      576:{
          slidesPerView : 1,
      },

      480:{
          slidesPerView : 1,
      },

      0:{
          slidesPerView : 1
      }
    }
  });
  
  // Product Slider
  var swiper = new Swiper('.category-slider-container', {
    slidesPerView: 8,
    slidesPerGroup: 1,
    loop: true,
    spaceBetween : 0,
    navigation: {
      nextEl: '.category-slider-content .swiper-button-next',
      prevEl: '.category-slider-content .swiper-button-prev',
    },
    breakpoints: {
      1500:{
          slidesPerView : 8
      },

      992:{
          slidesPerView : 6
      },

      768:{
          slidesPerView : 4
      },

      625:{
          slidesPerView : 3,
      },

      480:{
          slidesPerView : 3,
      },

      360:{
          slidesPerView : 2,
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Brand-logo Slider
  var swiper = new Swiper('.brand-logo-slider-container', {
    slidesPerView : 5,
    loop: true,
    speed: 1000,
    spaceBetween : 0,
    autoplay: false,
    navigation: {
      nextEl: '.brand-logo-slider-content .swiper-button-next',
      prevEl: '.brand-logo-slider-content .swiper-button-prev',
    },
    breakpoints: {
      1200:{
          slidesPerView : 5
      },

      992:{
          slidesPerView : 4,
          spaceBetween : 30
      },

      768:{
          slidesPerView : 3,
          spaceBetween : 30

      },

      576:{
          slidesPerView : 3,
          spaceBetween : 30
      },

      380:{
          slidesPerView : 3,
          spaceBetween : 30
      },

      0:{
          slidesPerView : 2,
          spaceBetween : 30
      }
    }
  });

  // Testimonial JS
  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    }
  });

  // Fancybox Js
  $('.lightbox-image').fancybox();
  
  // Images Zoom
  $('.zoom-hover').zoom();

  // Countdown JS
  var now = new Date();
  var day = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear() + 1;
  var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

  $('.countdown-timer').countdown({
    date: '7/13/2022 23:59:59', // TODO Date format: 07/27/2017 17:00:00
    offset: +2, // TODO Your Timezone Offset
    day: 'Day',
    days: 'Days',
    hideOnComplete: true
  });

  //Header My Acc btn
  $(".header-action-dropdown-toggle").on('click', function() {
    $(".info-dropdown-toggle").slideToggle("100");
  });
  $(".header-offcanvas-dropdown-toggle").on('click', function() {
    $(".info-dropdown-offcanvas-toggle").slideToggle("100");
  });

  //Shop review btn
  $(".review-write-btn").on('click', function() {
    $(".product-review-form").toggle('active');
  });

  // Product Qty
  var proQty = $(".pro-qty");
  proQty.append('<a href="#" class="inc qty-btn"><i class="icon-arrow-up"></i></a>');
  proQty.append('<a href="#" class= "dec qty-btn"><i class="icon-arrow-down"></i></a>');
  $('.qty-btn').on('click', function(e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  //Checkout Page Checkbox Accordion
  $("#create_pwd").on("change", function() {
    $(".account-create").slideToggle("100");
  });

  $("#ship_to_different").on("change", function() {
    $(".ship-to-different").slideToggle("100");
  });

  $('.checkout-toggle').on('click', function() {
    $('.open-toggle').slideToggle(1000);
  });

  // Search Box JS
  var searchwrapper = $(".search-box-wrapper");
  $(".btn-search-menu").on('click', function() {
    searchwrapper.addClass('show');
    $("#search-input").focus();
  });
  $(".search-close").on('click', function() {
    searchwrapper.removeClass('show');
  });

  // Checkout Toggle Active
  $('.checkout-coupon-active').on('click', function(e) {
    e.preventDefault();
    $('.checkout-coupon-content').slideToggle(1000);
  });

  var checked = $( '.sin-payment input:checked' )
  if(checked){
    $(checked).siblings( '.payment-box' ).slideDown(900);
  };
 $( '.sin-payment input' ).on('change', function() {
    $( '.payment-box' ).slideUp(900);
    $(this).siblings( '.payment-box' ).slideToggle(900);
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 213) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
    }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText === '') {
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
    });
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  

})(window.jQuery);