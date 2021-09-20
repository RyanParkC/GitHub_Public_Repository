// Connects to Routes and Mongoose Config

// 1. Import Express and create an instance of Express server
const { urlencoded } = require("express");
const express = require('express');
const app = express();
const port = 8000

// 1.5 Connect Mongoose to MongoDB
require("./server/config/mongoose.config");

//2. Configuration for your Express server
app.use(express.json(), express.urlencoded({extended: true}));

// 3. Define your routes for your Express server (from joke.routes.js)
const JokeRoutes = require("./server/routes/joke.routes")
JokeRoutes(app)

// 4. Run your Express server
app.listen(port, () => console.log(`Server Running: ${port}`));