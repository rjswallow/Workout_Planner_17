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
  
  router.put("/api/transaction/bulk", ({ body }, res) => {
    Transaction.insertMany(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  





module.exports = router