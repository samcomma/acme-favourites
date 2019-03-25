const conn = require('./conn')

const Favourite = conn.define('favourite', {
  rank: conn.Sequelize.INTEGER,
  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  }
})

module.exports = Favourite