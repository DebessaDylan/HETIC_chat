
const { Router } = require('express');

const FrontRouterClass = require('./front/front.routes')
const ApiRouterClass = require('./api/api.routes')



const mainRouter = Router();
const frontRouter = new FrontRouterClass()
const apiRouter = new ApiRouterClass();
mainRouter.use('/api', apiRouter.init());
mainRouter.use('/', frontRouter.init());


module.exports = mainRouter;