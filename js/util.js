function scrollDiv(element) {
  $("html, body").delay(250).animate({ scrollTop: $(element).offset().top }, 500, 'easeInCubic');
};

$(document).ready(function(){

  new WOW().init();

  $("a[href*=#]").click(function(e){
    e.preventDefault();
    scrollDiv($(this).attr("href"));
  });

  $("#phone").popover();

  /*$(window).on('scroll', function(){
    var topofDiv = $("#skills").offset().top;
    var height = $("#skills").outerHeight();
    if($(window).scrollTop() > (topofDiv - height)){
      $('.progress .progress-bar').progressbar();
    }
  });*/

});
