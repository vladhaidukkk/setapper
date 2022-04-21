const { Router } = require('express');
const { createComment, deleteCommentById, getPageComments } = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const commentsMiddleware = require('../middlewares/comments.middleware');

const commentsRouter = Router({ mergeParams: true });

commentsRouter.route('/').get(commentsMiddleware, getPageComments).post(authMiddleware, createComment);
commentsRouter.delete('/:commentId', authMiddleware, deleteCommentById);

module.exports = commentsRouter;
