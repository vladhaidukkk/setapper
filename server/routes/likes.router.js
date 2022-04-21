const { Router } = require('express');
const { createLike, deleteLikeById, getUserLikes } = require('../controllers/likes.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const likesRouter = Router({ mergeParams: true });

likesRouter.route('/').get(authMiddleware, getUserLikes).post(authMiddleware, createLike);
likesRouter.delete('/:likeId', authMiddleware, deleteLikeById);

module.exports = likesRouter;
