import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true, //created and updated at time
  }
)

// below method is to bcrypt password for authentication to be used in userController file
// matchPassword is user defined method 
// enteredPassword is password received from client 
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
  // this.password is password stored in database
}

const User = mongoose.model('User', userSchema)

export default User
