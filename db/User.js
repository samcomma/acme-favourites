const conn = require('./conn')

const User = conn.define('user', {
  name: {
    type: conn.Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  id: {
    type: conn.Sequelize.UUID,
    defaultValue: conn.Sequelize.UUIDV4,
    primaryKey: true
  }
})

module.exports = User