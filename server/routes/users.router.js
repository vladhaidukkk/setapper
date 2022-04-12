const { Router } = require('express');
const { getUserById, updateUserById } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const usersRouter = Router({ mergeParams: true });

usersRouter.route('/:userId').get(authMiddleware, getUserById).patch(authMiddleware, updateUserById);

module.exports = usersRouter;
