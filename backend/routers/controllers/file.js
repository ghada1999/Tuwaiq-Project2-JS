const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());
// const fs = require("fs");
const persons = [
  {
    id: 1,
    firstName: "Ibrahim",
    lastName: "ALZugli",
    age: 24,
    city: "Najran",
  },

  {
    id: 2,
    firstName: "Mohammed",
    lastName: "ALQamdi",
    age: 20,
    city: "Jeddah",
  },

  {
    id: 3,
    firstName: "Assad",
    lastName: "Mehm0od",
    age: 40,
    city: "Bakestan",
  },

  {
    id: 4,
    firstName: "Fawzi",
    lastName: "Fawzi",
    age: 24,
    city: "Jorden",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/persons", (req, res) => {
  res.send(persons);
});

// app.get('/persons/:id',(req,res)=>{
//      const person=persons.find(elem=> elem.id ===parseInt(req.params.id))
//        if (!person)  return res.status(404).send('Persone with the given ID not found')
//          res.send(person)
// });

/////////////////////////////////////////////////////////
app.get("/getPeopleUnderAge/:age", (req, res) => {
  const personAge = persons.map(
    (elem) => elem.age === parseInt(req.params.age)
  );
  res.send(personAge);
});

app.delete("/persons", (req, res) => {
  const person = persons.find((elem) => elem.id === parseInt(req.query.id));

  if (!person) return res.send("This user not found !!!");
  const index = persons.indexOf(person);
  persons.splice(index, 1);
  res.send(persons);
});

app.post("/persons/:id", (req, res) => {
  const person = persons.find((elem) => elem.id === parseInt(req.params.id));
  if (!person) {
    const newPerson = {
      id: req.params.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      city: req.body.city,
      country: req.body.country,
    };

    persons.push(newPerson);
    res.status(201);
    res.send(persons);
  } else {
    res.status(404).end();
  }
});

// app.post('/persons',(req,res)=>{
//     const {error}=validatePerson(req.body);

//     if(error) return res.status(400).send(error.details[0].message);

//     const person={
//         id:persons.length +1,
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//         age:req.body.age,
//         city:req.body.city
//     }
//     persons.push(person);
//     res.send(person)
// })

// app.put('/persons/:id',(req,res)=>{
//     const person=persons.find(elem=> elem.id ===parseInt(req.params.id))
//     if (!person) return res.status(404).send('Persone with the given ID not found')
//     //   res.send(person)

//       const {error}=validatePerson(req.body);

//     if(error) return res.status(400).send(error.details[0].message);

//     person.firstName=req.body.name
//     person.lastName=req.body.lastName
//     person.age=req.body.age
//     person.city=req.body.city
//     res.send(person)
// })
// function validatePerson(person){
//     const schema={
//         firstName:Joi.string().min(10).required(),
//         lastName:Joi.string().min(10).required(),
//         age:Joi.number().required(),
//         city:Joi.string().min(10).required(),
//     };
//      return Joi.validate(person,schema);
// }

// app.delete('/persons/:id',(req,res)=>{
//     const person=persons.find(elem=> elem.id ===parseInt(req.params.id))
//     if (!person) res.status(404).send('Persone with the given ID not found')
//       const index =persons.indexOf(person);
//       persons.splice(index,1)

//       res.send(person);
// })

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listining on port ${port}...`));
