// email.js
import nodemailer from 'nodemailer';

const sendEmail = async (to) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: 'username@gmail.com',
      pass: 'password',
    },
  });

  const mailOptions = {
    from: '"Your Name" <yourname@gmail.com>',
    to
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
};

export default sendEmail;
