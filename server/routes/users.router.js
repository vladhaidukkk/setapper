const { Router } = require('express');
const { getUserById, updateUserById } = require('../controllers/users.controller');

const usersRouter = Router({ mergeParams: true });

usersRouter.get('/');
usersRouter.route('/:id').get(getUserById).patch(updateUserById);

module.exports = usersRouter;
