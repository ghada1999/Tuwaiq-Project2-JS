const express =require("express")
const dashRouter= express.Router();

const { getPersonInformation } = require('../controllers/dashboard');



dashRouter.post('/' ,getPersonInformation);






module.exports={dashRouter};