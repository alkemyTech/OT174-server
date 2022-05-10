const sgMail = require('@sendgrid/mail');
const { development } = require('../config/config');
const { loadHTML } = require('../config/emailTemplate');
const sendMail = (to, subject, text, title, contactInfo, imgURL) => {

    sgMail.setApiKey(development.sendgrid_api_key);

    const msg = {
        to,
        from: development.sendgrid_email,
        subject,
        html: loadHTML(title, text, contactInfo, imgURL)
    }

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent succesfully');
        })
        .catch((err) => {
            console.error(err);
        })

}

module.exports = {
    sendMail
}