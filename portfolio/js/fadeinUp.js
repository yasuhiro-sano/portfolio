$(function(){
  $('.fadeinup').css("opacity","0");
  $('.fadeinup').css("transform","translateY(100px)");
  $(window).scroll(function (){
   $(".fadeinup").each(function(){
   var imgPos = $(this).offset().top;
   var scroll = $(window).scrollTop();
   var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight/4){
      $(this).css("opacity","1" );
      $(this).css("transform","translateY(0)");
     } else {
       $(this).css("opacity","0" );
       $(this).css("transform","translateY(100px)");
      }
    });
   });
 });


 $(function(){
   $('.fadeinup_last').css("opacity","0");
   $('.fadeinup_last').css("transform","translateY(50px)");
   $(window).scroll(function (){
    $(".fadeinup_last").each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
     if (scroll > imgPos - windowHeight + windowHeight/5){
       $(this).css("opacity","1" );
       $(this).css("transform","translateY(0)");
      } else {
        $(this).css("opacity","0" );
        $(this).css("transform","translateY(50px)");
       }
     });
    });
  });


  $(function(){
      $(window).load(function(){
          $('.works_box  li').each(function(i){
              $(this).delay(i * 800).css({visibility:'visible',opacity:'0'}).animate({opacity:'1'},1000);
          });
      });
  });
