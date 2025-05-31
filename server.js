// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bbgcustomersuccess@gmail.com',
    pass: 'Bcs#2025@'
  }
});

app.post('/send-emails', async (req, res) => {
  const { emails } = req.body;

  for (const email of emails) {
    await transporter.sendMail({
      from: '"Bulk Mailer" <bbgcustomersuccess@gmail.com>',
      to: email,
      subject: "Hello from Bulk Mailer",
      text: "This is a test email sent in bulk."
    });
  }

  res.json({ message: 'Emails sent successfully!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
