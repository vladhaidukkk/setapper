const jwt = require('jsonwebtoken');
const Token = require('../models/token.model');

const generate = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: '1h',
  });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_KEY);

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
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
  } catch (error) {
    return null;
  }
};

const verifyAccessToken = (accessToken) => {
  try {
    return jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
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
