$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.popup-link').magnificPopup({
        type: 'image'
    });


    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.nav-wrap button').click(function(){
        window.location.replace("kontakt.html");
    })

})