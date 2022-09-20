
const express = require('express');
const route = express.Router();
const complaintsController = require('../controllers/complaintscontroller');

route.post('/addcomplain',complaintsController.addComplain);
route.get('/getcomplainbyenrollment/:enrollment',complaintsController.getComplainByEnrollment);
route.get('/getcomplains',complaintsController.getComplains);
module.exports = route;