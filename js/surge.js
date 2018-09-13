/*eslint-env jquery*/

    /* navbar changes color when scrolled down */
    $(window).scroll(function() {
                  if ($(this).scrollTop() > 70 && $('.navbar').width() > 700) {
                      $('.navbar').addClass('try');  
                  } else {
                      $('.navbar').removeClass('try');
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


      $(function (){
        if($('#mobile-number').width() > 767){
            $('#mobile-number').attr('href', '#tm-section-4');
        } 
          else {
              $('#mobile-number').attr('href','tel:1-773-961-8096');
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
                    if( bottom_of_window > bottom_of_object && $(window).width() > 400 ){

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
                $('.happydesc').each( function(i){

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


 // When the window has finished loading create our google map below
      google.maps.event.addDomListener(window, 'load', init);
        
    function init() {
     // Basic options for a simple Google Map
     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
     var mapOptions = {
    // How zoomed in you want the map to start at (always required)
     zoom: 15,
     disableDefaultUI: true,
 
     // The latitude and longitude to center the map (always required)
         center: new google.maps.LatLng(41.9611785, -87.7100965), 
         
          // How you would like to style the map. 
         // This is where you would paste any style found on Snazzy Maps.
  styles: [{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"simplified"},{"color":"#fad21e"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#1e303d"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#fad21e"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1e303d"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"color":"#f0c514"},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"color":"#1e303d"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#1e303d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#94a5a6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#0b1926"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#182731"},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#e77e24"},{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#0e171d"}]}]
                };



     // Get the HTML DOM element that will contain your map 
     // We are using a div with id="map" seen below in the <body>
     var mapElement = document.getElementById('map');

     // Create the Google Map using our element and options defined above
     var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.9611785, -87.7100965),
    map: map,
    url: 'https://goo.gl/maps/UWSMZP41L1q',
    title: 'SURGE'
        });  
        
    google.maps.event.addListener(marker, 'click', function() {
      window.open(marker.url, '_blank');
    });  
    }

