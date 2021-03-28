import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { addToCart, removeFromCart} from '../actions/cartActions'

const CartScreen = ({match, location,history}) => {
    const productId = match.params.id

    //will get the data after query string
    // ?qty=1
    // [qty,1]
    // therefore qty = 1
    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch() //to call action

    const cart = useSelector(state =>state.cart) // to assign cart of state to cart variable
    // console.log('hello')
    // console.log(cart)
    // console.log(cartItems)
    const {cartItems} = cart
    
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])


    const removeFromCartHandler =(id) =>{
        // console.log('remove')
        dispatch(removeFromCart(id))
    }


    const checkoutHandler = ()=>{
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length ===0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> :(
                    <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                    
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>{item.name}</Col>
                                <Col md={2}>
                                <Form.Control
                          as='select'
                          value={item.qty}
                          onChange={(e) => dispatch(addToCart(item.product,Number(e.target.value)))}>
                          {/* in below if countInStock is 5 then array with 5 element will be created, example - [0,1,2,3,4] */}
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </Col>
                            </Row>
                            
                        </ListGroup.Item>
                    ))}
                     </ListGroup>
                )}
            </Col>
            <Col md={4}>
               <Card>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <h2>Subtotal ({cartItems.reduce((acc, item) => acc+item.qty, 0)}) item</h2>
                           &#8377;{cartItems.reduce((acc,item) => acc+item.qty * item.price,0).toFixed(2)} {/* default value of acc is first element in array, if not defined */}
                           {/* toFixed is for to get only 2 decimal numbers */}
                       </ListGroup.Item>
                       <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length ===0} onClick={checkoutHandler}>Proceed to Checkout</Button>
                       </ListGroup.Item>
                   </ListGroup>
               </Card>             
            </Col>
            
        </Row>
    )
}

export default CartScreen
