import React from 'react'

import styles from './CartItems.module.css'
import CartItem from '../CartItem/CartItem'

const CartItems = (props) => {
  const cartElements = props.cartItems.map((item) => (
    <CartItem cartItem={item} />
  ))
  return (
    <div className={styles.container}>
      <div className={styles['cart']}>{cartElements}</div>
    </div>
  )
}

export default CartItems
