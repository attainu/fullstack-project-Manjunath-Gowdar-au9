import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from "react-router-dom" // to access history, its new method

import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux' //to access redux state
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions' //login method of actions takes 2 argument

const LoginScreen = ({ location,history }) => {
  // component level state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  //   accessing userLogin state
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

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
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {/* if loading is true the <Loader> component will be displayed  */}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          {/* redirect after registration  */}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            {' '}
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen

// location prop is from react-router

// The router will provide you with a location object in a few places:
// Route component as this.props.location
// Route render as ({ location }) => ()
// Route children as ({ location }) => ()
// withRouter as this.props.location

// location contains the following

// {
//   key: 'ac3df4', // not with HashHistory!
//   pathname: '/somewhere',
//   search: '?some=search-string',
//   hash: '#howdy',
//   state: {
//     [userDefined]: true
//   }
// }
