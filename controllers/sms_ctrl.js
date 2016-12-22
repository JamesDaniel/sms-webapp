/**
 * @author James Daniel
 */
var twilio = require('../twilio');
exports.sendSMS = function (req, res) {
    console.log('GET /sms');
    var message = req.query.msg;
    twilio(message);
    return res.json({});
};