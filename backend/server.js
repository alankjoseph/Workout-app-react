const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
dotenv.config()

// express app
const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    })

// listen for requests
app.listen(process.env.PORT,  () => {
    console.log(`listening on port ${process.env.PORT}`)
})


