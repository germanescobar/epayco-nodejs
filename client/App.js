import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import EpaycoResponse from './EpaycoResponse'
import './styles/styles.scss'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/epayco/response" component={EpaycoResponse} />
        <Route render={props => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  )
}
