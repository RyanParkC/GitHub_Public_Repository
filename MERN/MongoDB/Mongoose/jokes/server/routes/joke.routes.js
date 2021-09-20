// Connects to Controller
const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  // CREATE
  app.post("/api/jokes/new", JokeController.createJoke);
  // READ
  app.get("/api/jokes/", JokeController.findAllJokes);
  app.get("/api/jokes/:id", JokeController.findOneJoke);
  app.get("/api/jokes/random", JokeController.randomJoke)
  // UPDATE
  app.put("/api/jokes/update/:id", JokeController.updateJoke);
  // DELETE
  app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};