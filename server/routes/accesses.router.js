const { Router } = require('express');
const {
  createAccess,
  updateAccessById,
  deleteAccessById,
  getUserAccesses,
} = require('../controllers/accesses.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const accessesRouter = Router({ mergeParams: true });

accessesRouter.route('/').post(authMiddleware, createAccess).get(authMiddleware, getUserAccesses);
accessesRouter.route('/:accessId').patch(authMiddleware, updateAccessById).delete(authMiddleware, deleteAccessById);

module.exports = accessesRouter;
