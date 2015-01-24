function scrollDiv(element) {
  $("html, body").delay(100).animate({ scrollTop: $(element).offset().top }, 900);
};

$(document).ready(function(){
  $(".scroll-link").click(function(e){
    e.preventDefault();
    scrollDiv($(this).attr("href"));
  });

  $(window).on('scroll', function(){
    var topofDiv = $("#skills").offset().top;
    var height = $("#skills").outerHeight();
    if($(window).scrollTop() > (topofDiv - height)){
      $('.progress .progress-bar').progressbar();
    }
  });

});
