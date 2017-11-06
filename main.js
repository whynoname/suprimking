$(window).scroll(function(){
 if($(document).scrollTop() > 20){
   $('.addshrink').addClass('shrink');
   $('.blueadd').addClass('blue');
 }else{
   $('.addshrink').removeClass('shrink');
   $('.blueadd').removeClass('blue');
 }
});
//=================================== DATEPICKER ===============
$(function(){
  $('#datepicker').datepicker({
    autoclose: true,
    todayHighlight :true,
    format:"dd/mm/yyyy",
    startDate: '05/11/2017',
  }).datepicker('update',new Date());
});
//=================================== SCROLLSPY ================
$(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 2000);
  }

});
});
