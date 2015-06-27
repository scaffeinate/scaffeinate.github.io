$(document).ready(function(){

  new WOW().init();

  $("#phone").popover();

  var owl = $("#showcase-owl");

  owl.owlCarousel({
    items : 3
  });

  $(".next").click(function(){
    owl.trigger('owl.next');
  });

  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });
});
