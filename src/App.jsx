import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
function App() {

  return (
    <Router>

      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  )
}

export default App
