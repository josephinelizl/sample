/*eslint-env jquery*/

$(window).scroll(function() {
              if ($(this).scrollTop() > 10) {
                  $('.navbar').addClass('try');
              } else {
                  $('.navbar').removeClass('try');
                
              }
 });
              
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 120) {
                 $('.footer1').hide();
          }else{
                  $('.footer1').show();
          }
    });
        
             $(document).on('click','#collapsingNavbar2',function(e) {
                if( $(e.target).is('a') ) {
                    $(this).collapse('hide');
                }
            });
              
            function myFunction(a) {
            var x = document.getElementById("cafe");
            var y = document.getElementById("drinks");
            var z = document.getElementById("food");
            if( a == 1 ){
                x.style.display  = "block";
                y.style.display = "none";
                z.style.display = "none";

            }
            else if( a == 2 ){
                x.style.display  = "none";
                y.style.display = "block";
                z.style.display = "none";
            }
              else
              {
                x.style.display  = "none";
                y.style.display = "none";
                z.style.display = "block";
              }

            }
              
           $(document).ready(function(){
                $(".menubutton").click(function(){
                  $(".menubutton").removeClass("active");
                  $(this).addClass("active");
                });
               });
           $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.center-content').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});
