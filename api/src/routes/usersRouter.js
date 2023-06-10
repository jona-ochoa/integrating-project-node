const { Router } = require('express');
const { getUsersHandler, getDetailHandler, createUserHandler } = require('../handlers/userHandlers');

const usersRouter = Router();
// diferencias entre handler y controllers
// El handler se encarga de recibir el request
// unificar datos
// devolver la respuesta
// invoca al controller ---->>> EL HANDLER NUNCA INTERACTUA CON FUENTES EXTERNAS DE iNFO
// (EL CONTROLLERS ES OTRA FUNCION)



usersRouter.get('/', getUsersHandler)

usersRouter.get('/:id', getDetailHandler)

usersRouter.post('/', createUserHandler)

module.exports = usersRouter
