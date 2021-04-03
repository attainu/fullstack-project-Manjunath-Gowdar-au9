import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @description Authenticate user & get token
// @route POST to /api/users/login
// @access Public route
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  // comparing DB email with received email
  // all the document data related to email in DB will be stored in user

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @description Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  // user._id is created with middleware, all the user data(from mondoBD) is stored in user 
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @description Register a new user
// @route       POST /api/users
// @access Public route
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })
  // comparing DB email with received email
  // all the document data related to email in DB will be stored in user

  if(userExists){
    res.status(400) // 400 is bad request
    throw new Error('user already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })

  if(user){
    //201 implies something was created
    //here user will be authenticated right after registration
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})
export { authUser, getUserProfile, registerUser }
