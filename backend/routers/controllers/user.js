const {user} = require('../db')


const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req, res) => {

    console.log("hello")
    const {email, password} = req.body;
    console.log("email sent:",email)
    const foundUser = user.find( (elem) => {
        console.log("email in database:", elem.email)
        return (elem.email == email && elem.password == password)} );
    if(foundUser)
      res.send(foundUser);
    else
      res.status(404).send("Not found");
  };
//

const addNewUser = (req,res)=>{
    const addedUser = {
        Username: req.body.Username,
        password: req.body.password,
       
    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem. email = req.body.email;
            elem.password = req.body.password;
           
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser} 