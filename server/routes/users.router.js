const { Router } = require('express');
const { getUserById, updateUserById, getUsers } = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const usersRouter = Router({ mergeParams: true });

usersRouter.get('/', authMiddleware, getUsers);
usersRouter.route('/:userId').get(authMiddleware, getUserById).patch(authMiddleware, updateUserById);

module.exports = usersRouter;
