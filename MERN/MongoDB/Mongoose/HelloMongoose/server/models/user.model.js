// Import mongoose
const mongoose = require("mongoose");

// mongoose.Schema() object constructor takes an object as its parameter - each new document put into the collection will take same object format
const UserSchema = new mongoose.Schema({	
	name: String,
	age: Number
});

// mongoose.model() method takes blueprint object and creates db collection out of the model
// Here, we create a User variable to export and set to the returned value of the mongoose.model function
const User = mongoose.model("User", UserSchema);	

module.exports = User;