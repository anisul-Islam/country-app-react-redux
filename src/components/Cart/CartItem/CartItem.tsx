import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import { removeCountry } from '../../../redux/actions'
import styles from './CartItem.module.css'
import { themeContext } from '../../../theme/ThemeContext'

const CartItem = (props) => {
  const [theme, setTheme] = useContext(themeContext)
  const dispatch = useDispatch()
  const { cartItem } = props

  const themeStyle = {
    backgroundColor: theme && theme.backgroundColor,
    color: theme && theme.textColor,
  }

  const cartItemElement = (
    <div className={styles['cart-item']}>
      <img src={cartItem.flag} alt="flag" className={styles['cart-img']} />
      <p>{cartItem.name}</p>
      <button
        style={themeStyle}
        onClick={() => dispatch(removeCountry(cartItem))}
      >
        Remove
      </button>
    </div>
  )

  return <>{cartItemElement}</>
}

export default CartItem
