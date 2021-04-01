import express from 'express'
const router = express.Router()


// import bodyParser from 'body-parser'


import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser) // will be attached to 'api/user' in server.js file.
// router.post means client is posting '/login' in backend, so authUser is called

router.route('/profile').get(protect, getUserProfile)
// router.route is used because to use get, put request
// 'protect' will implement protected route to /profile 

export default router
