const Mailer = require('../models/Mailer.js');


const sendMail = async function (req, res, next) {
    let params = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        message: req.body.message,
    }
    try {
        const mailer = new Mailer(params);
        const result = await mailer.sendMail();
        if(result !== undefined){
            res.send({sent : true});
        }else{
            res.send({sent : false});
        }
    } catch (err) {
        next(err);
    }
}


module.exports = {    
  
    sendMail : sendMail,
    
};