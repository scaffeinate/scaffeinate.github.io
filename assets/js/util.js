$(document).ready(function(){

  Parse.initialize("8wZ35cV3Yl6ppfcNDzDDyVFCPxP00JT6npenQ14z", "PRMy5Vzq3F0M8PURVoanaFH6YtOsykgdvull1Q2T");

  $('#send-message').on('click', function () {
    $(this).button('loading');
  })

  var validator = $('#contact-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    highlight: function (element) {
      $(element).closest('.form-group').removeClass('success').addClass('error');
      $('#send-message').button('reset');
    },
    success: function (element) {
      element.text('OK!').addClass('valid').closest('.form-group').removeClass('error').addClass('success');
    },
    submitHandler: function(form) {
      var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        message: $("#message").val()
      }

      Parse.Cloud.run("sendMail", data, {
        success: function(object) {
          form.reset();
          $('#send-message').button('reset');
          $("#success-msg").fadeIn();
          setTimeout(function(){
            $('#success-msg').fadeOut();
          }, 2000);

          console.log("Sent");
        },
        error: function(object, error) {
          console.log("Error" + error);
        }
      });
    }
  });

  new WOW().init();

  var owl = $("#showcase-owl");
  owl.owlCarousel({
    items : 3
  });
});
