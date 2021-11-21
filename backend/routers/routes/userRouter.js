const express =requerire("express")
const userRouter= express.Router();

const{getUser,getAllUser,addNewUser}=requier('../controllwers/user')


userRouter.get('/user' ,getAllUser);

userRouter.get('/user/:id' ,getUser);
userRouter.post('/user' ,addNewUser);

module.exports={userRouter};
 
 