const express = require('express');
const cors = require('cors');

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.get('/users', (req,res)=>{
	
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
