// Link Controller object(s) + methods (modules) here

// Link controller object here
const PersonController = require('../controllers/person.controller');
// Link controller (methods) module.exports function
module.exports = function(app){
    // accessing URL '/api' calls (GETS) function PersonController.index 
    app.get('/api', PersonController.index);
    // send a POST request to 'api/people' to create a new Person object
    app.post('/api/people', PersonController.createPerson);
}