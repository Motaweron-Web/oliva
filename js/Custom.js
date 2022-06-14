////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////  main  //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


$(document).ready(function () {



  /*  to change nav-bar color on scroll  */
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });


//dropify
  $('.dropify').dropify();
  
  //spinner
  $(".spinner ").fadeOut(1000);



  

  //SmoothScroll js
  var scroll = new SmoothScroll('a[href*="#"]');

  //AOS js
  AOS.init({
    offset: 90, // offset (in px) from the original trigger point
    duration: 500, // values from 0 to 3000, with step 50ms
  });


  // Material Select Initialization
  $(document).ready(function () {
    $('.mdb-select').materialSelect();
  });


  $('[data-fancybox]').fancybox({

    buttons: [
      "zoom",
      // "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
    ],
    transitionEffect: "slide",
    
    });

    
    
});





