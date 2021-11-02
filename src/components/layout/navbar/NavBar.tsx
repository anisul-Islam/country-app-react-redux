import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import Drawer from '@material-ui/core/Drawer'
import { useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx'

import ButtonList from '../../ButtonList'
import FetchStoreData from '../../FetchStoreData'
import useStyles from './style'
import { themeContext } from '../../../theme/ThemeContext'

export default function NavBar(props: any) {
  const [theme, setTheme] = useContext(themeContext)
  const classes = useStyles()
  const products = FetchStoreData()
  const [open, setOpen] = React.useState(false)
  const themes = useTheme()

  let themeStyle = {
    backgroundColor: theme && theme.backgroundColor,
    color: theme && theme.textColor,
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  function handleOnChange(event: any) {
    props.onSearchValue(event.target.value)
  }

  const cartIconButtonElement = (
    <>
      <div className={classes.grow} />
      <IconButton
        aria-label={`show ${products.length} new notifications`}
        color="inherit"
      >
        <Badge badgeContent={products.length} color="error">
          <ShoppingCartIcon
            onClick={(event) => (window.location.href = '/cart')}
          />
        </Badge>
      </IconButton>
    </>
  )

  const drawerElement = (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {themes.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <ButtonList />
    </Drawer>
  )

  const searchElement = (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleOnChange}
      />
    </div>
  )

  const drawerIcon = (
    <IconButton
      edge="start"
      onClick={handleDrawerOpen}
      color="inherit"
      aria-label="open drawer"
      className={clsx(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon />
    </IconButton>
  )

  const toolbarTitle = (
    <Typography className={classes.title} variant="h5" noWrap>
      Country App
    </Typography>
  )

  return (
    <div className={classes.grow}>
      <AppBar
        style={themeStyle}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {drawerIcon}
          {toolbarTitle}
          {searchElement}
          {cartIconButtonElement}
        </Toolbar>
      </AppBar>
      {drawerElement}
    </div>
  )
}
