const nodemailer = require('nodemailer');
const connection = require("../lib/connection.js");
const {dbName} = require("../lib/connection.js");
const {trans} = require("../lib/mailTransporter.js");

const Mailer = function (params) {
  this.name = params.name;
  this.phone = params.phone;
  this.email = params.email;
  this.message = params.message;
};



 Mailer.prototype.sendMail = function () {
   const that = this;
    return new Promise(function (resolve, reject) {
      let formInfo = `<div><p>Name:  ${that.name}</p><p>Phone: ${that.phone}</p><p>Email: ${that.email}</p><p>Message: ${that.message}</p></div>`;
      const mail = {
        from: 'sktanwar.2020@gmail.com',   
        to: 'kamlesh.gehlott@gmail.com',
        cc: 'ashutoshvyas78@outlook.com',
        subject: 'Your Website: ' + that.name + ' send you something..',      
        html: formInfo
      }

      trans.sendMail(mail, (err, info) => {
        if (err) {
            reject(err);
            // return console.log(err);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        resolve(info);
      });
    });
  } 

module.exports = Mailer;