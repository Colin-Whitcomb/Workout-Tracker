const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  workouts: [{
      type: {
        type: String,
        trim: true,

      },
      name: {
        type: String,
        trim: true,

      },
      duration: {
        type: Number,

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
    }
  ],
  day: {
    type: Date,
    default: Date.now,
  }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;