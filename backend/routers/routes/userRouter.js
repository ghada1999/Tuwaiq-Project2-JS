const express =requerire("express")
const userRouter= express.Router();

const { default: App } = require('../../../frontend/src/App');
const{getUser,getAllUser,addNewUser}=require('../controllers/user')


userRouter.get('/user' ,getAllUser);

userRouter.get('/user/:id' ,getUser);
userRouter.post('/user' ,addNewUser);


module.exports={userRouter};
 
 