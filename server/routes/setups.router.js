const { Router } = require('express');
const { createSetup, deleteSetup, getUserSetups, updateSetup } = require('../controllers/setups.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const setupsRouter = Router({ mergeParams: true });

setupsRouter.route('/').get(authMiddleware, getUserSetups).post(authMiddleware, createSetup);
setupsRouter.route('/:setupId').delete(authMiddleware, deleteSetup).patch(authMiddleware, updateSetup);

module.exports = setupsRouter;
