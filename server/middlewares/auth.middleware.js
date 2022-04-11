const tokenService = require('../services/token.service');

const authMiddleware = async (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
      return res.status(401).send({
        error: {
          message: 'UNAUTHORIZED',
          code: 401,
        },
      });
    }

    const data = tokenService.verifyAccessToken(accessToken);
    if (!data) {
      return res.status(401).send({
        error: {
          message: 'UNAUTHORIZED',
          code: 401,
        },
      });
    }

    req.userId = data.userId;
    next();
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

module.exports = authMiddleware;
