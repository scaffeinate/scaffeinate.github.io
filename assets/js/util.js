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

  var owl = $("#projects-owl");

  owl.owlCarousel({
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

  $(".next").click(function(){
    owl.trigger('owl.next');
  });

  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
});
