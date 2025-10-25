// -------   Mail Send ajax
$(document).ready(function() {
    var form = $('#myForm'); // contact form
    var submit = $('.submit-btn'); // submit button
    var alert = $('.alert-msg'); // alert div for show alert message

    // form submit event
    form.on('submit', function(e) {
        e.preventDefault(); // prevent default form submit

        $.ajax({
            url: 'mail.php', // form action url
            type: 'POST', // form submit method get/post
            dataType: 'text', // request type html/json/xml
            data: form.serialize(), // serialize form data
            beforeSend: function() {
                alert.fadeOut();
                submit.html('Sending....'); // change submit button text
            },
            success: function(response) {
                if(response.includes('successfully')) {
                    alert.html(response).fadeIn().css('color', 'green');
                    form.trigger('reset'); // reset form
                } else {
                    alert.html(response).fadeIn().css('color', 'red');
                }
                submit.html('Send Message'); // reset submit button text
            },
            error: function(e) {
                console.log(e);
                alert.html('An error occurred. Please try again later.').fadeIn().css('color', 'red');
                submit.html('Send Message');
            }
        });
    });
});