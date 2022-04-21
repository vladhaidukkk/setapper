const authMiddleware = require('./auth.middleware');

const commentsMiddleware = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const { orderBy } = req.query;

    if (orderBy === 'presetId') {
      next();
    } else if (orderBy === 'setupId') {
      authMiddleware(req, res, next);
    } else {
      res.status(400).send({
        error: {
          message: 'INVALID_QUERY_PARAMS',
          code: 400,
        },
      });
    }
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

module.exports = commentsMiddleware;
