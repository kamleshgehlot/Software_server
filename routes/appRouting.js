const express = require('express')
const AppController = require('../controllers/AppController.js');

const Routing = express.Router();

Routing.route("/sendMail").post(AppController.sendMail);

module.exports = Routing;