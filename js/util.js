function scroll(element) {
  $("html, body").animate({ scrollTop: $(element).offset().top }, 1000);
};

$(document).ready(function(){
  $(".scroll-link").click(function(e){
    e.preventDefault();
    scroll($(this).attr("href"));
  });
});