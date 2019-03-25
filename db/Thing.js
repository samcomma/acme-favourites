const conn = require('./conn')

const Thing = conn.define('thing', {
  name: conn.Sequelize.STRING,
  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  }
})

module.exports = Thing