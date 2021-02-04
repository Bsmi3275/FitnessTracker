const router = require("express").Router();
const fitnessRep = require("../models/fitness.js");

router.get("/api/fitness", (req,res) => {
    fitnessRep.find({})
    .sort({ name: -1 })
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.post("/api/fitness", (req,res) => {
    fitnessRep.find({})
    .sort({ name: -1 })
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.put("/api/fitness/:id", (req, res) => {
    console.log(req.body);
    fitnessRep.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true }).then((fitness) => {
        console.log(fitness);
        res.json(fitness);
    });
});

router.get("/api/fitness/", (req, res) => {
    fitnessRep.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } } ])
    .sort({ name: -1 })
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/api/fitnes/range", (req, res) => {
    fitnessRep.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } } ])
    .limit(7)
    .sort({ name: -1 })
    .then((dbExercise) => {
        res.json(dbExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get("/api/stats", (req, res) => {});

module.exports = router
