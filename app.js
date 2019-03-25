const express = require('express')
const app = express()
const path = require('path')

module.exports = app

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, 'dist', 'main.js')))

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')))

