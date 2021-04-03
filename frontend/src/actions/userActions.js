import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from '../constants/userConstants'
import axios from 'axios'

// login action 
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
// config because data is sent in headers 
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
    })
    // assign data to localStorage , which includes token
    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
  }
}

// logout action 
export const logout = ()=>(dispatch)=>{
  localStorage.removeItem('userInfo')
  dispatch({type: USER_LOGOUT})
}

// register action 
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })
// config because data is sent in headers 
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name,email, password },
      config
    )

    // register dispatch 
    dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })

    // login dispatch after registration, here payload will have token
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
  })
    // assign data to localStorage , which includes token
    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
  }
}