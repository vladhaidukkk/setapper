const { Router } = require('express');
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const setupsRouter = require('./setups.router');
const presetsRouter = require('./presets.router');

const rootRouter = Router({ mergeParams: true });

rootRouter.use('/v1/auth', authRouter);
rootRouter.use('/v1/users', usersRouter);
rootRouter.use('/v1/setups', setupsRouter);
rootRouter.use('/v1/presets', presetsRouter);

module.exports = rootRouter;
