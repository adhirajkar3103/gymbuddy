const Workout = require('../models/workoutModel')

// get all workouts
const getWorkouts = async (req,res)=>{
    try {
        const workouts = await Workout.find()
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
// get a workout
const getWorkout = async (req,res)=>{
    const {id} = req.params
    try {
        const workout = await Workout.find({_id:id})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
// create a workout
const createWorkout = async (req,res)=>{
    const {title,reps,load} = req.body;
    try {
        const workout = await Workout.create({title,reps,load});
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// update a workout
const updateWorkout = async (req,res)=>{
    const {title,reps,load} = req.body;
    const {id} = req.params;
    try {
        const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
        res.json('Updated')
    } catch (error) {
        res.status(400).json(error.message)
    }
}
// delete a workout
const deleteWorkout = async (req,res)=>{
    const {id} =req.params;
    try {
        const workout = await Workout.deleteOne({_id:id})
        res.json('Deleted')
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}