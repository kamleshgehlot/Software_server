const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

// const mailUser = 'sktanwar.2020@gmail.com';
// const mailPassword = '8290447404sk';
// const mailService = 'GMAIL';


const mailUser = 'hr@connectivitysoftwaresolutions.com';
const mailPassword = 'N8k&qAXFj';
const mailService = 'connectivitysoftwaresolutions.com';

const trans = nodemailer.createTransport(smtpTransport({
    service: mailService,
    tls: { rejectUnauthorized: false },
    auth: {
      user: mailUser,
      pass: mailPassword,
    }
}));

module.exports = {trans};