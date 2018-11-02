$(document).ready(function(){
    var myInt=null;
    $('.scroll').on('click', function() { 
       
        var x=1000;
        var y=1230;
        var z=1653;
         myInt= setInterval(myCounter,10);
        function myCounter(){
            x+=23;
            y+=36;
            z+=45;
            $('#broj1').text(x);              
            $('#broj2').text(y);              
            $('#broj3').text(z);              
        } 

        $('html, body').animate({scrollTop: $(this.hash).offset().top - 330}, 1000);
        return false;
        
    });



    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
           console.log(scroll);

           if(scroll >= 915){
            clearInterval(myInt);
        }
            if(scroll >= 1299 ){
                $('#rollRed').addClass("rollRed");
                $('#rollGray').addClass("rollGrayAnim");
                $('#rollRed').removeClass("rollGray");
            }
        
            if(scroll >= 3000){
                $('#redBox2').addClass("redBox2");
                $('#rollGray2').addClass("rollGrayAnim2");
                $('#rollGray2').removeClass("rollGray2");

            }

            if(scroll >= 3500){
                $('#wraper3').removeClass("d-none");
                $('#wraper3').addClass("wraper3");
            }

            if(scroll >= 3800){
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

        $("#closeForm").click(function(){
            event.preventDefault();
            $("#myForm2").slideUp("slow");
        });

        $('#emailQuestion').click(function(){
            $('#movingLabelemail').removeClass('movingLabel');
            $('#movingLabelemail').addClass('emailQuestion');
        })

        $('#pitanjeQuestion').click(function(){
            $('#movingLabelpitanje').removeClass('movingLabel');
            $('#movingLabelpitanje').addClass('pitanje');
        })
})
    
   


