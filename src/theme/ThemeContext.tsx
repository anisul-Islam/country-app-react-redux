import React, { createContext, useState, useEffect } from 'react'

export const themeContext = createContext()

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

function getLocalStorage(key) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : ''
  } catch (e) {
    console.log(e)
  }
}

const ThemeContext: React.FC = (props) => {
  const [theme, setTheme] = useState(() => getLocalStorage('theme'))

  useEffect(() => {
    setLocalStorage('theme', theme)
  }, [theme])

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeContext
