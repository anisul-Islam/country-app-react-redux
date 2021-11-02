import React from 'react'

import Routes from './Routes'
import ThemeContext from './theme/ThemeContext'

export default function App() {
  return (
    <ThemeContext>
      <Routes />
    </ThemeContext>
  )
}
