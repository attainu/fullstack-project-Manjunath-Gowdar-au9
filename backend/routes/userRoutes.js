import express from 'express'
const router = express.Router()

// import bodyParser from 'body-parser'

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser) // will be attached to 'api/user' in server.js file.
// router.post means client is posting '/login' in backend, so authUser is called

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
// router.route is used because to use get, put request
// 'protect' will implement protected route to /profile

router.route('/').post(registerUser)
//this route is for registration
export default router
