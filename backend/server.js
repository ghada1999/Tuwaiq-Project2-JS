const express = require('express');
const cors = require('cors');
const fileHandler = require('fs');
const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.get('/users', (req,res)=>{

})

//app post
app.post('/name', (req,res) => {
	console.log(req.body);
    fileHandler.writeFile('');
	if (err) throw err;
	res.send({"Message": "File is cannot find"})
})






const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
