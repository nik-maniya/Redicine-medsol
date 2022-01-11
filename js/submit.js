
$("#subscribe_submit").click(function(){
    if($('#Email-2').val()){
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