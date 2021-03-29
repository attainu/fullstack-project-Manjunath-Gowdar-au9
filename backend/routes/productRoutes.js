import express from 'express'
const router = express.Router()

import {
  getProducts,
  getProductById,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router

// this is simple route File

// all the functionality will take place in controllers folder
