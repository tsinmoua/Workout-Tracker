const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // day: {
    //     type: Date
    // },

    day: Date,

    // exercises: {
    //     type: Array

    exercises: Array

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
