
$("#subscribe_submit").click(function(){
    if($('#Email-2').val() && String($('#Email-2').val())
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
        $.ajax({
            type: "POST",
            url: window.location.protocol+'//'+window.location.host+'/backend/submit.php',
            cache: false,
            data: {'email': $('#Email-2').val()},
            success: function (response){
                console.log('Success')
                $('.submit-success').show()
                $('.submit-error').hide()
                $('#email-form').hide()
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('Failed')
                $('.submit-success').hide()
                $('.submit-error').show()
                $('#email-form').show()
            }
        });
    }
});