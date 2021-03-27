import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUsers = await User.insertMany(users) // all the users is added to createdUsers
    const adminUser = createdUsers[0]._id //1st user is the admin in user.js data
    const sampleProducts = products.map(product =>{
        return{...product,user:adminUser}
    })// "user:adminUser" is added to every object in products.js file
    await Product.insertMany(sampleProducts) // data from ./data/products is added to mongodb

    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (error) {
      console.log(`${error}`.red.inverse)
      process.exit(1)

  }
}


const destroyData = async () => {
    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
  
      console.log('Data Destroyed'.red.inverse)
      process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
        
    }
  }

  if(process.argv[2] === '-d'){
      destroyData()
  }else{
      importData()
  }

// if '-d' flag is added with command(terminal) then the above will take place
//process.argv is to access terminal command data