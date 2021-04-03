import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from "react-router-dom" // to access history, its new method

import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' //to access redux state
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions' //login method of actions takes 2 argument

const RegisterScreen = ({ location,history }) => {
  // component level state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  //   accessing userRegister state
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  //   redirect for new customer Link
  // 'location.search' will contain URL query string, of users current screen
  const redirect = location.search ? location.search.split('=')[1] : '/'

//   redirect after login 
// let history = useHistory();

    useEffect(() =>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])


    // form submit handler 
  const submitHandler = (e) => {
    e.preventDefault() // so page will not refresh on form submit

    // check password with confirm password 
    if(password !== confirmPassword){
        setMessage('Password do not watch,')
    }else {

        dispatch(register(name,email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {/* if loading is true the <Loader> component will be displayed  */}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
      {/* name input  */}
      <Form.Group controlId='email'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>

        {/* email input */}
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        {/* password input */}
        <Form.Group controlId='password'>
          <Form.Label>Password </Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>

 {/* confirm password  */}
 <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password </Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          {/* redirect after registration  */}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            {' '}
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen

