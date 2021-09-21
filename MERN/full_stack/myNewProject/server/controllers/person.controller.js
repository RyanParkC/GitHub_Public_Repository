// Linking Person model from model.js
const { Person } = require('../models/person.model');

// Methods (modules) ------------------------------------------------------------------------
// Upon receiving a call 'request' from routes.js, responds with display message "Hello World"
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// Method for creating a new Person object
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}