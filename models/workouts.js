const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
   
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },

            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: "Enter an amount"
            },
            weight: {
                type: Number,
                
            },
            reps: {
                type: Number,
                
            },
            sets: {
                type: Number,
                
            },
            distance: {
                type: Number,
                
            }
        
    
        }
    ]
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;