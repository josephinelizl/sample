/*eslint-env jquery*/

    /* navbar changes color when scrolled down */
    $(window).scroll(function() {
                  if ($(this).scrollTop() > 70) {
                      $('.navbar').addClass('try');
                      $('.navbar-brand.mr-0 img').attr('src', '../2096_individual/img/surge.png');
                      $('.navbar-brand.mr-0 img').attr('width', '150px');
                      $('.navbar-brand.mr-0 img').attr('height', '40px');
                     
                  } else {
                      $('.navbar').removeClass('try');
                      $('.navbar-brand.mr-0 img').attr('src', '../2096_individual/img/sample.png');
                      $('.navbar-brand.mr-0 img').attr('width', '180px');
                      $('.navbar-brand.mr-0 img').attr('height', '55px');
                  }
     });
     /* Show bottom footer and hide the static footer when srolled down at the bottom of the page */         
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 220) {
                 $('.footer1').hide();
          }else{
                  $('.footer1').show();
          }
    });
        /* navigation links hide when click */
             $(document).on('click','#collapsingNavbar2',function(e) {
                if( $(e.target).is('a') ) {
                    $(this).collapse('hide');
                }
            });

          /* Menus button */    
            function changeMenu(a) {
            var dailyspecials = document.getElementById("dailyspecials");
            var coffee = document.getElementById("coffee");
            var drinks= document.getElementById("drinks");
            var food = document.getElementById("food");
            var dailyimg = document.getElementById("dailyspecialimg");
            var coffeeimg = document.getElementById("coffeeimg");
            var drinksimg = document.getElementById("drinksimg");
            var foodimg = document.getElementById("foodimg");
            if( a == 1 ){
                dailyspecials.style.display = "block";
                coffee.style.display  = "none";
                drinks.style.display = "none";
                food.style.display = "none";
                dailyimg.style.display = "block";
                coffeeimg.style.display  = "none";
                drinksimg.style.display = "none";
                foodimg.style.display = "none";

            }
            else if( a == 2 ){
                dailyspecials.style.display = "none";
                coffee.style.display  = "block";
                drinks.style.display = "none";
                food.style.display = "none";
                dailyimg.style.display = "none";
                coffeeimg.style.display  = "block";
                drinksimg.style.display = "none";
                foodimg.style.display = "none";
            }
            else if( a == 3 ){
                dailyspecials.style.display = "none";
                coffee.style.display  = "none";
                drinks.style.display = "block";
                food.style.display = "none";
                dailyimg.style.display = "none";
                coffeeimg.style.display  = "none";
                drinksimg.style.display = "block";
                foodimg.style.display = "none";
            }
                
              else
              {
                dailyspecials.style.display = "none";
                coffee.style.display  = "none";
                drinks.style.display = "none";
                food.style.display = "block";
                dailyimg.style.display = "none";
                coffeeimg.style.display  = "none";
                drinksimg.style.display = "none";
                foodimg.style.display = "block";
              }

            }
              
        /* menu button changes active class*/

           $(document).ready(function(){
                $(".menubutton").click(function(){
                  $(".menubutton").removeClass("activebuttons");
                  $(this).addClass("activebuttons");
                });
               });

        /* text fadein when scrolled at the view of about,play,leagues and menus sections */
           $(document).ready(function() {
    
            /* Every time the window is scrolled ... */
            $(window).scroll( function(){

                /* Check the location of each desired element */
                $('.center-content').each( function(i){

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it */
                    if( bottom_of_window > bottom_of_object ){

                        $(this).animate({'opacity':'1'},500);

                    }

                }); 

            });

        });

        /* text fadein when scrolled at the view of happy hour section */

           $(document).ready(function() {
    
            /* Every time the window is scrolled ... */
            $(window).scroll( function(){

                /* Check the location of each desired element */
                $('.happyrow').each( function(i){

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it */
                    if( bottom_of_window > bottom_of_object ){

                        $(this).animate({'opacity':'1'},500);

                    }

                }); 

            });

        });

      $(document).ready(function() {
    
            /* Every time the window is scrolled ... */
            $(window).scroll( function(){

                /* Check the location of each desired element */
                $('.surgelogo').each( function(i){

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it */
                    if( bottom_of_window > bottom_of_object ){

                        $(this).animate({'opacity':'1'},500);

                    }

                }); 

            });

        });

    $(document).ready(function() {
    $('.carousel').carousel({
      interval: 10000
    });
  });

   $(document).ready(function() {
    
            /* Every time the window is scrolled ... */
            $(window).scroll( function(){

                /* Check the location of each desired element */
                $('.parallaxcontent').each( function(i){

                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();

                    /* If the object is completely visible in the window, fade it */
                    if( bottom_of_window > bottom_of_object ){

                        $(this).animate({'opacity':'1'},500);

                    }

                }); 

            });

        });
    