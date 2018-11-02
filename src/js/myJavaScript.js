$(document).ready(function(){
    $('.scroll').on('click', function() {  
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
        return false;
    });



    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
           console.log(scroll);
            if(scroll >= 999 ){
                $('#rollRed').addClass("rollRed");
                $('#rollGray').addClass("rollGrayAnim");
                $('#rollRed').removeClass("rollGray");
            }
             if(scroll >= 3500){
               $('#sec6-col1').addClass('apear');

               setTimeout(function() {
                $('#sec6-col2').addClass('apear');
            }, 300);
            setTimeout(function() {
                $('#sec6-col3').addClass('apear');
            }, 600);
              
            }
            
        });

        $("#pisiteNam").click(function(){
            $("#myForm2").slideDown("slow");
        });
})
    
   


