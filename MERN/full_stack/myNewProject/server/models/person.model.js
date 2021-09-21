// Linking Mongoose
const mongoose = require('mongoose');
// Creating Person object Schema
const PersonSchema = new mongoose.Schema({
    // Model properties of Person object
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
// Export Person object with above model
module.exports.Person = mongoose.model('Person', PersonSchema);