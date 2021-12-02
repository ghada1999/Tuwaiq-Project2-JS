const express =require("express")
const userRouter= express.Router();
const{getUser,getAllUser,getPersonInfo}=require('../controllers/user');
const { users } = require("../db");
userRouter.get('/',getAllUser);
userRouter.post('/login',getUser);


userRouter.post('/', getPersonInfo);
// 

module.exports={userRouter};
  