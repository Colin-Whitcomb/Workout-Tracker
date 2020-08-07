const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
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
  distance: {
    type: Number,
    required: "How far did you go?"
  },

});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
