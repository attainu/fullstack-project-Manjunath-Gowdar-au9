import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js' //mongoose

import productRoutes from './routes/productRoutes.js' //external routes
import userRoutes from './routes/userRoutes.js' //external routes

dotenv.config()

connectDB() //mongoose

const app = express()

// this middleware will alow to accept json data in req.body on controllers file
app.use(express.json())

// '/api/route' is simple restful api syntax
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// development and production file choosing
// __dirname is current folder path
const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  // creating static folder for express
  app.use(express.static(path.join(__dirname, '/frontend/build'))) //path of frontend build folder is pointed

  // creating route for production for index.html file of build
  // select all route which is not '/api' and point it to index.html
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
  //production app can be accessed from localhost:5000 on server start
} else {
  app.get('/', (req, res) => {
    res.send('API is running..')
  })
}

// to handle error from 'error_middleware.js' file
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
