const { Router } = require('express');
const { getUserById, createUser, updateUserById } = require('../controllers/users.controller');

const userRouter = Router({ mergeParams: true });

userRouter.route('/:id').get(getUserById).patch(updateUserById);
userRouter.post('/', createUser);

module.exports = userRouter;
