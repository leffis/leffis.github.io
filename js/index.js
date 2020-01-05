(function() {
    //$('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidEmail = $('#username').val() === 'Linna'; // User validate
        var ValidPassword = $('#password').val() === '55'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = '../mainpage.html'; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});