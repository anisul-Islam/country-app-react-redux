import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import Cart from './pages/Cart'
import Home from './pages/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
)

export default Routes
