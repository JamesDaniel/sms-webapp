/* 

I built this login form to block the front end of most of my freelance wordpress projects during the development stage. 

This is just the HTML / CSS of it but it uses wordpress's login system. 

Nice and Simple

*/
$(document).ready(function () {
    $('#sendSMS').click(function () {
        var url = document.URL + "sms?msg=" + $('#sms-text').val() + '&pass=' + $('#sms-pass').val();
        $.ajax({
            method: "GET",
            url: url,
            success: function () {
                swal('Message sent');
            },
            error: function () {
                swal('Failed to send message');
            }
        });
    });
});
