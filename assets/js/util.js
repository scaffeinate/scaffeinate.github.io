$(document).ready(function(){

  Parse.initialize("8wZ35cV3Yl6ppfcNDzDDyVFCPxP00JT6npenQ14z", "PRMy5Vzq3F0M8PURVoanaFH6YtOsykgdvull1Q2T");

  $("#contact-form").submit(function(e){
    e.preventDefault();
    var data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    }

    Parse.Cloud.run("sendMail", data, {
      success: function(object) {
        console.log("Sent");
      },
      error: function(object, error) {
        console.log("Error" + error);
      }
    });
  });

  new WOW().init();

  var owl = $("#showcase-owl");
  owl.owlCarousel({
    items : 3
  });
});
