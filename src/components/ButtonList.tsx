import React, { useContext } from 'react'
import { List, Button } from '@material-ui/core'
import { themeContext } from '../theme/ThemeContext'
import {
  materialTheame,
  cherryBonBonTheame,
  seaWaveTheame,
} from '../theme/Theme'

const ButtonList = () => {
  const [theme, setTheme] = useContext(themeContext)

  return (
    <List>
      <Button onClick={() => setTheme(materialTheame)}>Sew Wave</Button>
      <Button onClick={() => setTheme(cherryBonBonTheame)}>Calm</Button>
      <Button onClick={() => setTheme(seaWaveTheame)}>Cherry</Button>
    </List>
  )
}

export default ButtonList
