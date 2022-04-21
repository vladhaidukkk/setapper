const { Router } = require('express');
const { signUp, signInWithPassword, token } = require('../controllers/auth.controller');

const authRouter = Router({ mergeParams: true });

authRouter.post('/signUp', signUp);
authRouter.post('/signInWithPassword', signInWithPassword);
authRouter.post('/token', token);

module.exports = authRouter;
