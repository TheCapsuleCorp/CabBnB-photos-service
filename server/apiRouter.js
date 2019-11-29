const apiRouter = require('express').Router();

const photos = require('../db/controllers.js');

apiRouter.get('/rooms/:roomId/photos', photos.get);
apiRouter.post('/rooms/:roomId/photos', photos.post);
apiRouter.put('/rooms/:roomId/photos', photos.put);
apiRouter.patch('/rooms/:roomId/photos', photos.patch);
apiRouter.delete('/rooms/:roomId/photos', photos.delete);

module.exports = apiRouter;
