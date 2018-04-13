$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 250 ;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});

jQuery(document).ready(function($) {
  scrollNav();
  submit();
});


  var scrollNav = function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();    
      if (scroll > 450) {
        $(".header-container").addClass("scroll");
      } else {
        $(".header-container").removeClass("scroll");
      }
    });
  }

  var submit = function() {
    var $button = $('#submit');
    var $reset = $('#reset');

    $button.on('click', function(e) {
      e.preventDefault();
      setTimeout(function(){
         $button.addClass('clicked');
      }, 500);
      
      $button.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
            // Do something once!
            $(this).addClass('submited');
      });
    });



    $reset.on('click', function(e) {
      e.preventDefault();
      $button.removeClass('clicked');
      $button.removeClass('submited');
      $button.off('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd');
    });
  }