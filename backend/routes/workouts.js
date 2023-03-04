const express = require('express')
const router = express.Router()
const workoutContoller = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

// middleware
router.use(requireAuth)

// GET all workouts
router.get('/', workoutContoller.allWorkouts)

// GET a single workout
router.get('/:id',workoutContoller.singleWorkout )

// POST a new workout
router.post('/', workoutContoller.createWorkout)

// DELETE a workout
router.delete('/:id', workoutContoller.deleteWorkout )

// UPDATE a workout
router.patch('/:id',workoutContoller.updateWorkout )

module.exports = router