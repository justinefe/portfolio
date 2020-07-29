/* eslint-disable no-console */
require('dotenv').config();

const sgMail = require('@sendgrid/mail');

const sendMail = async ({
  name, email, message, res,
}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'inspiron.amos@gmail.com',
    from: email,
    subject: 'New Mail from hire my service',
    text: message,
  };
  // console.log
  await sgMail.send(msg, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).send({
        message: 'Message not Sent. something went wrong',
        error: err.message,
      });
    }
    console.log(result);
    return res.status(200).send({
      message: `Message sent successfully. Thank you ${name} for reaching out.`,
      result: result.message,
    });
  });
};

const isValid = (name, value) => {
  const required = {
    fullName: /^[a-zA-Z '.-]{3,30}$/,
    email: /^\w+@[\w]{2,20}.[a-z]{2,10}$/i,
    message: /\w+/,
  };
  if (value && required[name].test(value)) return true;
  return false;
};

const validateRequest = (req, res, next) => {
  const { fullName, email, message } = req.body;
  // console.log(req.body);
  // console.log(process.env.SENDGRID_API_KEY);
  // if (!isValid('fullName', fullName) || !isValid('email', email) || !isValid('message', message)) {
  //   return res.status(400).send({
  //     message: 'Invalid information',
  //   });
  // }
  req.body = {
    ...req.body, fullName: fullName.trim(), email: email.trim(), message: message.trim(),
  };
  // console.log('i am here');
  return next();
};

const mailer = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    await sendMail({
      name: fullName,
      message,
      email,
      res,
    });
  } catch (error) {
    res.status(500).send({
      message: 'Message not sent. Something went wrong',
    });
  }
};

module.exports = { mailer, validateRequest };
