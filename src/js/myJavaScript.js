$(document).ready(function(){
    $('.scroll').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
        return false;
    });
    });


