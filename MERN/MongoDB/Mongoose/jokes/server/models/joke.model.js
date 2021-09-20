const mongoose = require("mongoose")

// 1. Define the Schema with Validations
const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "setup is required"],
            minlength: [10, "setup must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            required: [true, "punchline is required"],
            minlength: [3, "punchline must be at least 3 characters long"]
        }
    }, 
    {timestamps:true}
);

// 2. Registering the Schema
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke; // Exports to Controller