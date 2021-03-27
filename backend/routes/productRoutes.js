import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// @description Fetch all products
// @route GET to /api/products
// @access Public route
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @description Fetch single product
// @route GET to /api/product/:id
// @access Public route
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404) //if wrong router id is passed
      throw new Error('Product not found') //500 by default
    }
  })
)

export default router
