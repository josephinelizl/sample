/*eslint-env jquery*/ /* navbar changes color when scrolled down */
$(window).scroll(function() {
    if ($(this).scrollTop() > 70 && $('.navbar').width() > 700) {
        $('.navbar').addClass('try');
    } else {
        $('.navbar').removeClass('try');
    }
}); /* Show bottom footer and hide the static footer when srolled down at the bottom of the page */
$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 220) {
        $('.footer1').hide();
    } else {
        $('.footer1').show();
    }
}); /*$(function(){if ($('#mobile-number').width() > 767){$('#mobile-number').attr('href', '#tm-section-4');}else{$('#mobile-number').attr('href', 'tel:1-773-961-8096');}}); /* navigation links hide when click */
$(window).click(function(e) {
    if (!$(e.target).is('.navbar')) {
        $('.collapse').collapse('hide');
    }
});


/* Menus button */
$('.carousel').mouseenter(function() {
    $(this).carousel('pause');
}).mouseleave(function() {
    $(this).carousel('next');
});

function changeMenu(a) {
    var dailyspecials = document.getElementById("dailyspecials");
    var coffee = document.getElementById("coffee");
    var drinks = document.getElementById("drinks");
    var food = document.getElementById("food");
    if (a == 1) {
        dailyspecials.style.display = "block";
        coffee.style.display = "none";
        drinks.style.display = "none";
        food.style.display = "none";
    } else if (a == 2) {
        dailyspecials.style.display = "none";
        coffee.style.display = "block";
        drinks.style.display = "none";
        food.style.display = "none";
    } else if (a == 3) {
        dailyspecials.style.display = "none";
        coffee.style.display = "none";
        drinks.style.display = "block";
        food.style.display = "none";
    } else {
        dailyspecials.style.display = "none";
        coffee.style.display = "none";
        drinks.style.display = "none";
        food.style.display = "block";
    }
} /* menu button changes active class*/
$(document).ready(function() {
    $(".menubutton").click(function() {
        $(".menubutton").removeClass("activebuttons");
        $(this).addClass("activebuttons");
    });
}); /* text fadein when scrolled at the view of about,play,leagues and menus sections */
$(document).ready(function() { /* Every time the window is scrolled ... */
    $(window).scroll(function() { /* Check the location of each desired element */
        $('.center-content').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height(); /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object && $(window).width() > 400) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
}); /* text fadein when scrolled at the view of happy hour section */
$(document).ready(function() { /* Every time the window is scrolled ... */
    $(window).scroll(function() { /* Check the location of each desired element */
        $('.happydesc').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height(); /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
});
$(document).ready(function() { /* Every time the window is scrolled ... */
    $(window).scroll(function() { /* Check the location of each desired element */
        $('.surgelogo').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height(); /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
});
$(document).ready(function() { /* Every time the window is scrolled ... */
    $(window).scroll(function() { /* Check the location of each desired element */
        $('.parallaxcontent').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height(); /* If the object is completely visible in the window, fade it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 500);
            }
        });
    });
});