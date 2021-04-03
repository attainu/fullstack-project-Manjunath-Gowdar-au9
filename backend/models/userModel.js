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


//before data is saved password is encrypted for userRegistration
userSchema.pre('save',async function (next) {
  if(!this.isModified('password')){
    next() //if password is not modified in profile update, then password will not be hashed
  }
  //hash is combination of password and key
  // salt is to hash password asynchronously, by using bcrypt method called genSalt, 10 is number of rounds
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

const User = mongoose.model('User', userSchema)

export default User
