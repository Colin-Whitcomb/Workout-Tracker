const router = require("express").Router();
const Exercise = require("../models/exercise.js");

// GET /api/workouts
router.get("/api/workouts", (req, res) => {
    Exercise.find({})
    .then( (workout) => {
        console.log("Workout = " + workout);
        res.send(workout)
    })
});

// PUT /api/workouts
router.put('/api/workout/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, {$push: { workouts: req.body} }, {new: true})
    .then( (workout) => {
        console.log("Workout = " + workout);
        res.send(workout);
    })
});

// POST /api/workouts
router.post('/api/workouts', (req, res) => {
    Exercise.create(req.body)
    .then( (workout) => {
    console.log("Workout = " + workout);
    res.send(workout);
    })
})

// GET /api/workouts/range
router.get('api/workouts/range', (req, res) => {
    Exercise.find({}).limit(7)
    .then( (workout) => {
    console.log("Workout = " + workout);
    res.send(workout);
    })
})

module.exports = router;