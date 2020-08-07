const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  workouts: [{
    type: {
      type: String,
      trim: true,
      // required: "Enter exercise type"
    },
    name: {
      type: String,
      trim: true,
      // required: "Enter exercise name"
    },
    duration: {
      type: Number,
      // required: "Enter exercise duration"

    },
    weight: {
      type: Number,

    },
    reps: {
      type: Number,

    },
    sets: {
      type: Number,

    },
    distance: {
      type: Number,

    },
  }],
  day: {
    type: Date,
    default: Date.now,
  },
}, {
  toJSON: {
    virtuals: true,
  }
});

exerciseSchema.virtual("totalDuration").get(function () {
  return this.workouts.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;