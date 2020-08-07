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
    Exercise.findByIdAndUpdate(req.params.id, {$push: { workouts: req.body} }. {new: true})
    .then( (workout) => {
        console.log("Workout = " + workout);
        res.send(workout);
    })
});

// POST /api/workouts
app.post('/api/workouts', (req, res) => {
    Exercise.create(req.body)
    .then( (workout) => {
    console.log("Workout = " + workout);
    res.send(workout);
    })
})

// GET /api/workouts/range
app.get('api/workouts/range', (req, res) => {
    Exercise.find({})
})
module.exports = app;