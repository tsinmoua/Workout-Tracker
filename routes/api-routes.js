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

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.update(
            {
                _id: mongoose.ObjectId(req.params.id)
            },
            {
                $set: {
                    day: req.body.day,
                    exercises: [
                        {
                            type: req.body.type,
                            name: req.body.name,
                            duration: req.body.duration,
                            weight: req.body.weight,
                            reps: req.body.reps,
                            sets: req.body.sets,
                            distance: req.body.distance,
                        }
                    ]
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            }
        );
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);

        db.Workout.insertMany(req.body, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

}