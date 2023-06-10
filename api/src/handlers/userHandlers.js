const { createUserDB, getUserById, getUserByName, getAllUsers } = require("../controllers/usersControllers")

// query -->>  ?name=name
const getUsersHandler = async(req, res) => {
    const { name } = req.query
    try {
        if(name){
            const userByName = await getUserByName(name)
            res.status(200).json(userByName)
        } else {
            const response = await getAllUsers()
            res.status(200).json(response)
        }
       
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// /:id -->> params
const getDetailHandler = async (req, res) => {
    const {id} = req.params
    const source = isNaN(id) ? "ddb" : "api"
    if(id )
    try {
        const response = await getUserById(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// body -->> info
const createUserHandler = async (req, res) => {
    const { name, email, phone } = req.body

    try {
        const response = await createUserDB(name, email, phone) // aca llamamos al controller
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getUsersHandler, getDetailHandler, createUserHandler }