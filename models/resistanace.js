const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
  
  },
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the exercise"
  },
  duration: {
    type: Number,
    required: "How long did you exercise?"
  },
  weight: {
    type: Number,
    required: "How long heavy was the weight?"
  },
  reps: {
    type: Number,
    required: "How many reps did you do?"
  },
  sets: {
    type: Number,
    required: "How many sets did you do?"
  },
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
