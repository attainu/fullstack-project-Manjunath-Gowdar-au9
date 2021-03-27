import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js' //mongoose

import productRoutes from './routes/productRoutes.js' //external routes


dotenv.config()

connectDB() //mongoose

const app = express()

app.get('/', (req, res) => {
  res.send('api is running..')
})

app.use('/api/products', productRoutes)

// to handle error from 'error_middleware.js' file
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${5000}`.yellow.bold
  )
)

// stack over flow proxy error 
process.on('uncaughtException', function (err) {
  console.log(err);
}); 
