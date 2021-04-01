import jwt from 'jsonwebtoken'
 
const generateToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
    // id is the payload for jwt, process.nve.JWT_SECRET  is secret key for jwt which is stored in .env file, 30d means token will expire in 30 days
}

export default generateToken