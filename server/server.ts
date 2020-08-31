const express = require('express');
//allows to create our models and schemas easily and add layer of methods
//const mongoose = require('mongoose');
//to get from the body data
const bodyParser = require('body-parser');
//import the routs
const cities = require('./routes/statsRouter.ts');
//console.log("cities from server.ts: ", cities);

//Set up and create express app
const app = express();

//DB Config
const db = require('./db/config.ts').url;

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
//in a json way to get the data
app.use(bodyParser.json());

//Connect to MongoDB
// mongoose
// 	.connect(db)
// 	//if it connected
// 	.then(() => {
// 		console.log('MongoDB connected');
// 	})
// 	//if it's not been connected
//   .catch(err => console.log(err));
  
//Use Routes - Initilaze routes
app.use('/api/cities', cities); //////////////////////////////////////////////////////////////////////////

app.use((req, res, next) =>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
	if('OPTIONS'== req.method){
		res.sendStatus(200);
	}else{
		console.log(`${req.ip} ${req.method} ${req.url}`);
		next();
	}	
});

app.get("/", (req, res) => {
	res.send([ {
		"name": "Haifa", 
		"celsius": "26", 
		"weather": "bolt" 	
	},
	{
		"name": "Tel Aviv", 
		"celsius": "28", 
		"weather": "bolt" 	
	},
	]);
   });

// app.get('/api/cities', cities, (req, res) => {
// 	res.send();
// });
//Listen for requests from port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));

