
$("#subscribe_submit").click(function(){
    if($('#Email-2').val()){
        $.ajax({
            type: "POST",
            url: window.location.protocol+'//'+window.location.host+'/backend/submit.php',
            cache: false,
            data: {'email': $('#Email-2').val()},
            success: function (response){
                console.log('Success')
                $('.w-form-done').show()
                $('.w-form-fail').hide()
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('Failed')
                $('.w-form-done').hide()
                $('.w-form-fail').show()
            }
        });
    }
});