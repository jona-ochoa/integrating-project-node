const { Router } = require('express')
const { createPostHandler } = require('../handlers/postHandlers')

const postsRouter = Router()

postsRouter.post('/',  createPostHandler)


module.exports = postsRouter