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

        db.Workout.insertMany(
            {
                day: req.body.date,
                exercises: [
                    req.body
                ]
            }, (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne(
            {
                _id: mongoose.Types.ObjectId(req.params.id)
            },
            {
                $set: {
                    day: req.body.day,
                    exercises: [
                        req.body
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