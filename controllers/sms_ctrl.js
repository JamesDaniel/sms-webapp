/**
 * @author James Daniel
 */
var twilio = require('../twilio');
exports.sendSMS = function (req, res) {
    console.log('GET /sms');
    var message = req.query.msg;
    var pass = req.query.pass;
    if (pass != process.env.SMS_PASS) {
        res.status(400);
        return res.send('None shall pass');
    }
    console.log('password was right');
    twilio(message);
    return res.json({});
};
