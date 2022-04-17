import React from 'react'
import { useSelector} from 'react-redux';
import CartItem from './CartItem';

import './Cart.scss';

function Cart() {
  
  const cartItems = useSelector(state => state.cart.cartItems);

  const totalCartPrice = cartItems.reduce((total , cartItem) => total += cartItem.price * cartItem.quantity , 0)


  return (
    <div className="cart-page">
      <div className="cart-header">
        <h5>Product</h5>
        <h5>Description</h5>
        <h5>Quantity</h5>
        <h5>Price</h5>
        <h5>Remove</h5>
      </div>
      
      { cartItems && cartItems.map( cartItem => {
        return <CartItem key={cartItem.id} cartItem={cartItem} /> })
      }
        <div className="cart-footer">
          
          <h3>Total: {totalCartPrice}$ </h3>
        </div>
      </div>
  )
}

export default Cart