const expressR = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = expressR.Router();

// //Load Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
// Load User model
const citiesDb = require('../models/statsModel/dbModel');
// const key = require('../../config');

//Handling router requests
// @route          GET api/cities//
// @description    Tests cities route
// @access         Public
router.get('/', (req, res) =>{
	mongoose
	.connect("mongodb://localhost:27017/travel_site", {useNewUrlParser: true})
	//if it connected
	
	.then((db) => {
		console.log('MongoDB connected', db);
		const cities = mongoose.model('cities', new Schema({
			name: {
			  type: String,
			  required: true
			},
			celsius: {
			  type: String,
			  required: true
			},
			weather: {
			  type: String,
			  required: true
			}
		}));	
		const collections = mongoose.listCollections().toArray(function(err, collInfos) {
			// collInfos is an array of collection info objects that look like:
			console.log("collections1: ",collInfos);
		});
		console.log("collections2: ",collections);
		return cities.findAll({})
		//get the results
		.then(cities => {
			console.log("cities from router: ",cities);
			return res.json(cities)
		})
		//if there isn't any posts
		.catch(err => res.status(404).json({ nopostsFound: 'no posts found' }));
	})
	//if it's not been connected
  	.catch(err => console.log(err));
	
});
	// res.json({
	// 	msg: 'Cities works',
	// })}
//);

// @route          POST api/cities/register
// @description    Register cities
// @access         Public
// router.post('/register', (req, res) => {
	
// 	//looking for a record that has the email that the user is trying to register with
// 	citiesDb.findOne({ name: "haifa" }).then(city => {
// 		//there is a user with that email
// 		if (city) {
// 			console.log('Email allready exists');
// 			return res.status(400);
// 		} //if there isn't then we need to create a user
// 		else {
// 			//req.body.-will come from the form
// 			const newUser = new User({
// 				name: req.body.name,
// 				email: req.body.email,
// 				avatar: req.body.avatar,
// 				password: req.body.password,
// 				role: req.body.role,
// 			});
// 			//hash the password
// 			bcrypt.genSalt(10, (err, salt) => {
// 				bcrypt.hash(newUser.password, salt, (err, hash) => {
// 					if (err) {
// 						throw err;
// 					}
// 					//save the hash password
// 					newUser.password = hash;
// 					newUser
// 						.save()
// 						.then(user => res.json(user))
// 						.catch(err => console.log(err));
// 				});
// 			});
// 		}
// 	});
// });








module.exports = router;
//module.exports-making the object avilable outside of the file
