const app = require('./app')
const db = require('./db')

db.syncAndSeed()

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Now listening to port: ${port}`))


