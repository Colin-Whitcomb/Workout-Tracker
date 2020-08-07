const app = require("express").Router();
const Exercise = require("../models/exercise");

app.get("/api/workouts", (req, res) => {
    Exercise.find({})
    .then( (workout) => {
        console.log("Workout = " + workout);
        res.send(workout)
    })
})

app.put('/api/workout/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, )
})

module.exports = app;