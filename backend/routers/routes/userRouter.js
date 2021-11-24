const express =require("express")
const userRouter= express.Router();

const{getUser,getAllUser,addNewUser}=require('../controllers/user')
const{user}=require("../db")

userRouter.get('/user' ,getAllUser);

userRouter.post('/' ,getUser);

userRouter.post('/user' ,addNewUser);

module.exports={userRouter};
 
 