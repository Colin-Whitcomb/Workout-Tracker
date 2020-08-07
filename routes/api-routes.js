const app = require("express").Router();
const Exercise = require("../models/exercise");

// GET /api/workouts
app.get("/api/workouts", (req, res) => {
    Exercise.find({})
    .then( (workout) => {
        console.log("Workout = " + workout);
        res.send(workout)
    })
});

// PUT /api/workouts
app.put('/api/workout/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, )
});

// POST /api/workouts


// GET /api/workouts/range

module.exports = app;