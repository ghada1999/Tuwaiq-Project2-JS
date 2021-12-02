const express = require("express");
const { users } = require("../db");
//  getUser

const getAllUser = (req, res) => {
  res.send(users);
};
const getUser = (req, res) => {
  
  const {nationalId , password } = req.body;

  const foundUser = users.find((elem) => {
   
    return elem.nationalId == nationalId && elem.password == password;
  });


  
  if (foundUser) res.send(foundUser);
  else
    res
      .status(404)
      .send(
        "We couldn’t find an account matching the email and password you entered. Please check and try again."
      );
};


function getPersonInfo(req, res) {
  //  console.log('Inside Person Info Again')
  //
const id = req.params.id; // '1'
  // console.log(req.body);
  const result = users.find(({ id }) => id === parseInt(req.body.id));
  // console.log(result);
  if (result)
  res.send(result);
  else
    res.status(404).send("We couldn’t find an account matching the email and password you entered. Please check and try again.");
}
module.exports = { getAllUser, getUser, getPersonInfo };