var router = require("express").Router()
const Workouts = require("../models/workouts.js")


router.get("/api/workouts", (req, res) => {
    Workouts.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


router.post("/api/workouts", ({ body }, res) => {
    Workouts.create(body)
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.put("/api/workouts/:id" , (req, res) => {
      const workoutId = req.params.id;
    Workouts.findOneAndUpdate({_id: workoutId}, {$push:{exercises: req.body}})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  





module.exports = router