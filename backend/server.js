const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

const {dashRouter} = require("./routers/routes/dashRouter")

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use('/dashboard',dashRouter )









const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
