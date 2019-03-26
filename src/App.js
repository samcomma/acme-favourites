import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Users from './Users'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      things: [],
      favourites: []
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = ()=> {
    Promise.all([
      axios.get('/api/users')
        .then(res => res.data),
      axios.get('/api/things')
        .then(res => res.data),
      axios.get('/api/favourites')
        .then(res => res.data)
    ])
    .then(([users, things, favourites])=> {
      this.setState({ users, things, favourites })
    })
  }

  render() {
    const { users, things, favourites } = this.state

    return (
      <Router>
        <div>
          <h1>Acme Favourites</h1>
          <Route exact path='/users' render={()=> <Users users={ users } things={ things } favourites={ favourites } />}/>
        </div>
      </Router>
    )
  }
}