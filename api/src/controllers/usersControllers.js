const axios = require('axios')
const { User, Post } = require('../db')
const infoCleaner = require('../utils')

const createUserDB = async (name, email, phone) => {
    return await User.create({name, email, phone})
}

const getUserById = async (id, source) => {
    const user = source === 'api' 
        ? (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
        : await User.findByPk(id, {
            include: {
                model: Post,
                attributes: ["title", "body"]
            }
        })
    return user;
}

const getUserByName = async(name) => {
    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data // traemos desde la api
    const usersApi = infoCleaner(infoApi);

    const filteredUser = usersApi.filter((user) => user.name === name)

    const userDB = await User.findAll({
        where: {name: name}
    })

    return [...filteredUser, ...userDB]
}

const getAllUsers = async() => {
    const usersDB = await User.findAll() // traemos todos desde la db
    const infoApi = (await axios.get('https://jsonplaceholder.typicode.com/users')).data // traemos desde la api
    const usersApi = infoCleaner(infoApi)
    return [...usersDB, ...usersApi]
}

module.exports = { createUserDB, getUserById, getUserByName, getAllUsers }