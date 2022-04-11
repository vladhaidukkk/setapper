const jwt = require('jsonwebtoken');
const config = require('config');

const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, config.get('accessTokenKey'), {
    expiresIn: '1h',
  });
  const refreshToken = jwt.sign({ userId }, config.get('refreshTokenKey'));
  const expiresIn = Date.now() + 3600;

  return {
    accessToken,
    refreshToken,
    expiresIn,
  };
};

const tokenService = {
  generateTokens,
};

module.exports = tokenService;
