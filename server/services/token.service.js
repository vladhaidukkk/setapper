const jwt = require('jsonwebtoken');
const config = require('config');
const Token = require('../models/token.model');

const generate = (userId) => {
  const accessToken = jwt.sign({ userId }, config.get('accessTokenKey'), {
    expiresIn: '1h',
  });
  const refreshToken = jwt.sign({ userId }, config.get('refreshTokenKey'));

  return {
    accessToken,
    refreshToken,
    expiresIn: 3600,
  };
};

const save = async (userId, refreshToken) => {
  const existingToken = await Token.findOne({ userId });

  if (existingToken) {
    existingToken.refreshToken = refreshToken;
    return existingToken.save();
  }

  return await Token.create({ userId, refreshToken });
};

const verifyRefreshToken = (refreshToken) => {
  try {
    return jwt.verify(refreshToken, config.get('refreshTokenKey'));
  } catch (error) {
    return null;
  }
};

const verifyAccessToken = (accessToken) => {
  try {
    return jwt.verify(accessToken, config.get('accessTokenKey'));
  } catch (error) {
    return null;
  }
};

const find = async (refreshToken) => {
  try {
    return await Token.findOne({ refreshToken });
  } catch (error) {
    return null;
  }
};

const tokenService = {
  generate,
  save,
  find,
  verifyAccessToken,
  verifyRefreshToken,
};

module.exports = tokenService;
