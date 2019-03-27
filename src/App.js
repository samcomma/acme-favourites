import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Nav from './Nav'
import Users from './Users'
import Things from './Things'
import UserCreate from './UserCreate'


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

  onSave = (user)=> {
    return axios.post('/api/users', user)
      .then(()=> this.loadData())
  }

  render() {
    const { users, things, favourites } = this.state
    const { onSave } = this
    const counts = {
      '/users': users.length,
      '/things': things.length
    }

    return (
      <Router>
        <div>
          <h1>Acme Favourites</h1>
          <Route render={({ location, history })=> <Nav location={ location } history={ history } counts={ counts }/>} />
          <Route exact path='/users' render={()=> <Users users={ users } things={ things } favourites={ favourites } />}/>
          <Route exact path='/things' render={()=> <Things users={ users } things={ things } favourites={ favourites } />}/>
          <Route exact path='/users/create' render={({ history })=> <UserCreate history={ history } onSave={ onSave } />}/>
        </div>
      </Router>
    )
  }
}