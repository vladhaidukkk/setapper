const { Router } = require('express');
const { createSetup, deleteSetupById, getUserSetups, updateSetupById } = require('../controllers/setups.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const setupsRouter = Router({ mergeParams: true });

setupsRouter.route('/').get(authMiddleware, getUserSetups).post(authMiddleware, createSetup);
setupsRouter.route('/:setupId').delete(authMiddleware, deleteSetupById).patch(authMiddleware, updateSetupById);

module.exports = setupsRouter;
