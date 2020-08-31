const expressR = require('express');

const router = expressR.Router();

// //Load Input Validation
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');
// Load User model
const CityModel = require('../models/statsModel/CityModel');
// const key = require('../../config');

//Handling router requests
// @route          GET api/users//
// @description    Tests users route
// @access         Public
router.get('/', async (req, res) => {
  const cities = await CityModel.find();
  res.json(cities);
});

router.post('/add', async (req, res) => {
    const cityData = req.body;

    try {
      const city = new CityModel(cityData);
      const valid = await city.validate();
      if (!valid) {
        res.status(400).json({error: "Error saving city"});
      }
      const saved = await city.save();
      console.log("City saved successfully:", saved);
      res.json(saved);
    } catch (e) {
      console.error("Error saving city", e);
      res.status(400).json({msg: "Error saving city", error: e});
    }
  }
);

// @route          POST api/users/register
// @description    Register user
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
