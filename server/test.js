const expressR = require('express');
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const router = expressR.Router();

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

module.exports = router;