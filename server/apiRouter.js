const apiRouter = require('express').Router();

const photos = require('../db/controller.js');

apiRouter.get('/rooms/:roomId', photos.get);
apiRouter.post('/rooms/:roomId', photos.post);
apiRouter.put('/rooms/:roomId', photos.put);
apiRouter.patch('/rooms/:roomId', photos.patch);
apiRouter.delete('/rooms/:roomId', photos.delete);

module.exports = apiRouter;
