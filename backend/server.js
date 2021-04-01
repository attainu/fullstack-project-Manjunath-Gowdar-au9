import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js' //mongoose



import productRoutes from './routes/productRoutes.js' //external routes
import userRoutes from './routes/userRoutes.js' //external routes


dotenv.config()

connectDB() //mongoose

const app = express()

// this middleware will alow to accept json data in req.body on controllers file
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is running..')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

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

