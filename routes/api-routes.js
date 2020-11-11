const db = require("../models");
const mongoose = require("mongoose");


module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);

        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(mongoose.Types.ObjectId(req.params.id));
        console.log(req.body);

        db.Workout.updateOne(
            { _id: mongoose.Types.ObjectId(req.params.id) },
            { $push: { exercises: [req.body] } },
            // { new: true },
            (error, data) => {
                if (error) res.send(error);
                else res.send(data);
            }
        );
    });

    app.get("/api/workouts/range", function (req, res) {
        console.log(mongoose.Types.ObjectId(req.params.id));
        
        db.Workout.find({ _id: mongoose.Types.ObjectId(req.body.id) })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });


}