import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import Message from '../components/Message'
// import {Link} from 'react-router-dom'
// import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { addToCart} from '../actions/cartActions'

const CartScreen = ({match, location,history}) => {
    const productId = match.params.id

    //will get the data after query string
    // ?qty=1
    // [qty,1]
    // therefore qty = 1
    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch() //to call action

    const cart = useSelector(state =>state.cart) // to assign cart of state to cart variable
    const {cartItems} = cart
    console.log(cartItems)

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])


    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
