const env = process.env;

console.log(env.EMAIL_NAME);

const mailTransporter = {
    service: 'gmail',
    auth: {
      user: env.EMAIL_NAME,
      pass: env.EMAIL_PASSWORD,
    }
  };

  console.log(mailTransporter.auth.user);
  console.log(mailTransporter.auth.pass);

  module.exports = mailTransporter;