const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

const msg = {
  to: 'recipient@example.com',
  from: 'your_verified_sender@example.com',
  subject: 'Hello from SendGrid',
  text: 'This is a test email sent through SendGrid API',
  html: '<strong>This is a test email sent through SendGrid API</strong>',
};

sgMail.send(msg)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
