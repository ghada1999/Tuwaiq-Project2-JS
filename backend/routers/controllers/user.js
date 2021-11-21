//get user

const user =requier('/db')


const geAlltUser=(req,res)=>{
req.send(user)
}

const getUser=(req,res)=>{
const foundUser = user.filter((elm,i)=>{
return i==req.params.id 

})
if (foundUser.lentgh>0){
res.send(foundUser[0])
return  
}
res.status(404).send("user not found ")
}
const addNewUser=(req ,res)=>{
const addUser={
Username :req.body.Username,
password :req.body.password,

}
user.push(addedUser)

res.status(201).send(addedUser); 
}
module.exports={geAlltUser,getUser,addNewUser}
 
