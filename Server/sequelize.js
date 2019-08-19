const Sequelize = require('sequelize')
const ProjectModel = require('./models/project')

const sequelize = new Sequelize('portfolio', 'tan', 'newPass123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Project = ProjectModel(sequelize, Sequelize)


module.exports = {
    Project,
}