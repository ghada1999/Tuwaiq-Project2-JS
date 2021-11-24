const express = require('express');
const cors = require('cors');
//const fileHandler = require('fs');
const app = express();

//routers
const {userRouter} = require("./routers/routes/userRouter")

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use('/user',userRouter);

//app post
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
