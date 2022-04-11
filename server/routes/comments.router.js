const { Router } = require('express');
const {} = require('../controllers/comments.controller');

const commentsRouter = Router({ mergeParams: true });

module.exports = commentsRouter;
