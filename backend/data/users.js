import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('321321', 10),
    isAdmin: true,
  },
  {
    name: 'Manju',
    email: 'manju@example.com',
    password: bcrypt.hashSync('321321', 10),
  },
  {
    name: 'megha',
    email: 'megha@example.com',
    password: bcrypt.hashSync('321321', 10),
  },
]

export default users