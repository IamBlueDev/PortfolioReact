const Sequelize = require('sequelize')
const ProjectModel = require('./models/project')

const sequelize = new Sequelize('portfolio', 'root', '', {
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
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
// const BlogTag = sequelize.define('blog_tag', {})
// const Blog = BlogModel(sequelize, Sequelize)
// const Tag = TagModel(sequelize, Sequelize)

// Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
// Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
// Blog.belongsTo(User);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
    Project,
}