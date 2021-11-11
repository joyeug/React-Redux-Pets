import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Hero from './Hero'
import HeroDetail from './HeroDetail'
import Home from './Home'
import NotFound from './NotFound'
import Persons from './Persons'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <BrowserRouter>
      <View>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/home" />}
          />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/hero/:id">
            <HeroDetail />
          </Route>
          <Route path="/hero">
            <Hero />
          </Route>
          <Route path="/persons">
            <Persons />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </View>
    </BrowserRouter>
  )
}

export default RouterApp
