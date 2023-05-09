const router = require('express').Router()
const {createWorkout,getWorkouts,getWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')
// Get all workouts
router.get('/',getWorkouts)

// Get a workout
router.get('/:id',getWorkout)

// Create a workout
router.post('/',createWorkout)

// Update a workout
router.patch('/:id',updateWorkout)

// Delete a workout
router.delete('/:id',deleteWorkout)


module.exports = router;