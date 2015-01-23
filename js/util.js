function scroll(element) {
  $("html, body").delay(100).animate({ scrollTop: $(element).offset().top }, 900);
};

$(document).ready(function(){
  $(".scroll-link").click(function(e){
    e.preventDefault();
    scroll($(this).attr("href"));
  });
});