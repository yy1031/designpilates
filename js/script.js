$(function(){
  new WOW().init();

  $(".header-nav-bars").click(function(){
     $(".header-logo").toggleClass("open");
     $(this).toggleClass("open");
     $(".header-btn").toggleClass("open");
     $(".header-nav-wrap").toggleClass("open");
  })
  
  $(".faq-item-plus").click(function(){
     $(this).parent().next(".faq-item-a").slideToggle();
     $(this).toggleClass("open");
  })
  
  $(window).scroll(function () {
    var main = $(".main").innerHeight();
     if($(window).scrollTop() > main) {
       $('.header-logo').addClass('scrolled');
       $('.header-btn').addClass('scrolled');
       $('.header-nav-bars').addClass('scrolled');
     } else {
       $('.header-logo').removeClass('scrolled');
       $('.header-btn').removeClass('scrolled');
       $('.header-nav-bars').removeClass('scrolled');
     }
   });

})
