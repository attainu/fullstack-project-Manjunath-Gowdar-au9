import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @description Fetch all products
// @route GET to /api/products
// @access Public route
const getProducts = asyncHandler(async(req,res) =>{
    const products = await Product.find({})
    res.json(products)
})


// @description Fetch single product
// @route GET to /api/product/:id
// @access Public route
const getProductById = asyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404) //if wrong router id is passed
      throw new Error('Product not found') //500 by default
    }
})

export {
    getProducts,
    getProductById
}