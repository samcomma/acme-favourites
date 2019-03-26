const express = require('express')
const app = express()
const path = require('path')

const db = require('./db')
const { User, Thing, Favourite } = db.models

module.exports = app



app.use(express.json())

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')))

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')))



app.get('/api/users', (req, res, next)=> {
  User.findAll({
    order: [['name', 'ASC']]
  })
    .then(users => res.send(users))
    .catch(next)
})

app.get('/api/things', (req, res, next)=> {
  Thing.findAll({
    order: [['name', 'ASC']]
  })
    .then(things => res.send(things))
    .catch(next)
})

app.get('/api/favourites', (req, res, next)=> {
  Favourite.findAll({
    order: [['rank', 'ASC']]
  })
    .then(favourites => res.send(favourites))
    .catch(next)
})



app.post('/api/users', (req, res, next)=> {
  User.Create(req.body)
    .then(user => res.send(user))
    .catch(next)
})



app.use((error, req, res, next)=> {
  res.status(error.status || 500).send({ error })
})