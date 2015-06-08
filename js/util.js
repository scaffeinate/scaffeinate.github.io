function scrollDiv(element) {
  $("html, body").delay(100).animate({ scrollTop: $(element).offset().top - 100 }, 500);
};

$(document).ready(function(){

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
