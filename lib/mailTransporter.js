const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const mailAccountUser = 'sktanwar.2020@gmail.com';
const mailAccountPass = '8290447404sk';

const trans = nodemailer.createTransport(smtpTransport({
    // service: mailService,
    service: 'GMAIL',
    tls: { rejectUnauthorized: false },
    auth: {
      user: mailAccountUser,
      pass: mailAccountPass,
    }
}));

module.exports = {trans};