// Connects to (imports) Model
const Joke = require("../models/joke.model")

// Listed in Routes file

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))                               // SUCCESS
        .catch(err => res.json({ message: "Something went wrong", error: err }));   // NOT SUCCESS
};

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((jokes) => res.json({ jokes: jokes }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
// READ BY ID
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
};

// UPDATE -- PUT, PATCH
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
};

// Other
module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then((randomJ) => res.json({randomJoke: randomJ}))
        .catch(e => res.json({message:"Something went wrong", error: e}))
};