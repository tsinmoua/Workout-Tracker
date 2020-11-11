const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: Date,

    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]

});

// WorkoutSchema.methods.deleteMany = function (dataWantRemoved) {
//     this.remove(dataWantRemoved, (error, response) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(response);
//         };
//     });
// };

// Workout.methods.insertMany = function (dataWantInserted) {
//     this.remove(dataWantInserted, (error, response) => {
//         if (error) {
//             res.send(error);
//         } else {
//             res.send(response);
//         };
//     });
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
