/**
 * @author James Daniel
 */
var twilio = require('twilio');
var sID = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var userNum = process.env.USER_PHONE;
var twilioNum = process.env.TWILIO_PHONE;
module.exports = function(message) {
    var client = new twilio.RestClient(sID, authToken);

    client.messages.create({
        body: message,
        to: userNum,
        from: twilioNum
    }, function (err, message) {
        if (err) {
            console.error(err.message);
        }
    });
}