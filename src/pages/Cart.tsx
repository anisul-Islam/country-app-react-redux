import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { themeContext } from '../theme/ThemeContext'
//custom components
import FetchStoreData from '../components/FetchStoreData'
import CartItems from '../components/Cart/CartItems/CartItems'

const messageStyle = {
  color: 'red',
  fontSize: '2rem',
}

export default function Cart() {
  const [theme, setTheme] = useContext(themeContext)
  let history = useHistory()
  const dataInCart = FetchStoreData()

  let themeStyle = {
    backgroundColor: theme && theme.backgroundColor,
    color: theme && theme.textColor,
    border: 'none',
    borderRadius: '0.6rem',
    fontSize: '1.4rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  }

  const dataInCartElements =
    dataInCart.length === 0 ? (
      <h2 style={messageStyle}>You have not selected any country</h2>
    ) : (
      <CartItems cartItems={dataInCart} />
    )
  return (
    <div>
      <button style={themeStyle} onClick={() => history.push('/')}>
        <span role="img" aria-label="left arrow">
          {' '}
          ⬅️{' '}
        </span>
        Back
      </button>
      {dataInCartElements}
    </div>
  )
}
