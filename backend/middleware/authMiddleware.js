// here token validation will be processed for protected route
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1] //['Bearer','tokenData'] tokenData will be selected
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      // -password used to not return password from user model  therefore '-'
      // req.user will have access to private/protected route, which contains user data  except password 
      next()  //next step is with userController file with getUserProfile method
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error('Not Authorized, token failed')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token found')
  }
})

export { protect }
