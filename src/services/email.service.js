const nodemailer = require('nodemailer');
const emailConfig = require('../config/email.config');

const mailTransporter = nodemailer.createTransport(emailConfig);

function sendMail(reciever, subject, content) {
    const mailOptions = {
        from: 'dfodan29@gmail.com',
        to: reciever,
        subject: subject,
        text: content,
      };

    mailTransporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = {
    sendMail
};