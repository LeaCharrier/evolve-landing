jQuery(document).ready(function($) {
  scrollNav();
});


  var scrollNav = function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();    
      if (scroll > 100) {
        console.log('scroll');
      }
    });
  }