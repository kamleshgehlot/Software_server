const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();


const {trans} = require("./mailTransporter.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

let env = 'local';

if (env === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'dist')));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
    app.use('/', express.static(path.join(__dirname,  'src')));
    app.use('/src', express.static(path.join(__dirname, 'src')));
}




app.post('/sendMail',(req,res, next) => {
    let params = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
    }

    let formInfo = `<div><p>Name:  ${params.name}</p><p>Phone: ${params.phone}</p><p>Email: ${params.email}</p><p>Message: ${params.message}</p></div>`;
    
    const mail = {
      from: 'hr@connectivitysoftwaresolutions.com',
      to: 'connectivitysoftwaresol@gmail.com',
      cc: 'ashutoshvyas78@outlook.com',
      subject: params.name + ' send you something..', 
      html: formInfo
    }

    trans.sendMail(mail, (err, info) => {
      if (err) { throw err; }
      
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.send(true);
    });
});



app.get('*', (req, res) => {
    if (env === 'prod') {
        const route = path.join(__dirname, 'dist', 'index.html');
        res.sendFile(route);
    } else {
        const route = path.join(__dirname, 'src', 'index.html');
        res.sendFile(route);
    }
});



let port ='';

if(env === 'local'){
    port = 5000;
}else if(env === 'prod'){
    port = 3017;
}


const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is running on port: ', port);    
});