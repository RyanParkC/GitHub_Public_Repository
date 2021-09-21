const express = require('express'); // Linking Express
const app = express();
const cors = require('cors') // Linking Cors for cross-origin requests
require('./server/config/mongoose.config'); // Linking config
require('./server/routes/person.routes')(app); // Linking routes
app.use(cors()) 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
// When we visit localhost:8000/api (in routes), we will receive a JSON response '{message: "Hello World"' (in controller)
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})