const env = process.env;

const mailTransporter = {
    service: 'gmail',
    auth: {
      user: env.EMAIL_NAME,
      pass: env.EMAIL_PASSWORD,
    }
  };

  module.exports = mailTransporter;