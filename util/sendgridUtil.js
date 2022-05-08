const sgMail = require('@sendgrid/mail');
const {development} = require('../config/config');

const sendMail = (to, subject, text, html) =>{

    sgMail.setApiKey(development.sendgrid_api_key);

    const msg = {
        to,
        from: development.sendgrid_email, 
        subject,
        text,
        html
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
