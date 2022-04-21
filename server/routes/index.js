const { Router } = require('express');
const authRouter = require('./auth.router');
const usersRouter = require('./users.router');
const setupsRouter = require('./setups.router');
const presetsRouter = require('./presets.router');
const accessesRouter = require('./accesses.router');
const commentsRouter = require('./comments.router');
const likesRouter = require('./likes.router');

const rootRouter = Router({ mergeParams: true });

rootRouter.use('/v1/auth', authRouter);
rootRouter.use('/v1/users', usersRouter);
rootRouter.use('/v1/setups', setupsRouter);
rootRouter.use('/v1/presets', presetsRouter);
rootRouter.use('/v1/accesses', accessesRouter);
rootRouter.use('/v1/comments', commentsRouter);
rootRouter.use('/v1/likes', likesRouter);

module.exports = rootRouter;
