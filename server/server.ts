const express = require('express');
//allows to create our models and schemas easily and add layer of methods
const mongoose = require('mongoose');
//to get from the body data
const bodyParser = require('body-parser');
//import the routs
const citiesRouter = require('./routes/statsRouter.ts');

//Set up and create express app
const app = express();

//DB Config
const db = require('./db/config.ts').url;

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
//in a json way to get the data
app.use(bodyParser.json());

//Connect to MongoDB
mongoose
	.connect(db)
	//if it connected
	.then(() => {
		console.log('MongoDB connected');
	})
	//if it's not been connected
  .catch(err => console.log(err));

//Use Routes - Initilaze routes
app.use('/api/cities', citiesRouter); //////////////////////////////////////////////////////////////////////////

//Listen for requests from port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));


