/**
 * @author James Daniel
 */
module.exports = function (app) {
    var smsCtrl = require('./controllers/sms_ctrl');
    app.get('/sms', smsCtrl.sendSMS);
}