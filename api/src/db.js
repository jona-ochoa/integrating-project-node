const { Sequelize } = require('sequelize')

const UserModel = require('./models/UserModels')
const PostModel = require('./models/PostModels')

require('dotenv').config()
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false}    
)

UserModel(sequelize)
PostModel(sequelize)

const { User, Post } = sequelize.models
User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    ...sequelize.models,
    conn: sequelize
}
