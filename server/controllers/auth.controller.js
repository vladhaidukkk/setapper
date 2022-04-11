const User = require('../models/user.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.service');

const signUp = [
  check('email', 'Email is not correct').normalizeEmail().isEmail(),
  check('username', 'Username is required').exists(),
  check('password', 'Password must have from 8 to 20 characters').isLength({ min: 8, max: 20 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          error: {
            message: errors.array()[0].msg,
            code: 400,
          },
        });
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_EXISTS',
            code: 400,
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        avatarLink:
          'https://firebasestorage.googleapis.com/v0/b/setapper-96945.appspot.com/o/avatar-default-1.png?alt=media&token=ea09d78d-b422-4c69-899f-8a44db990064',
        ...req.body,
        password: hashedPassword,
      });

      const tokens = tokenService.generate(newUser._id);
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(201).send({
        ...tokens,
        userId: newUser._id,
      });
    } catch (error) {
      res.status(500).send({
        error: {
          message: error.message,
          code: 500,
        },
      });
    }
  },
];

const signInWithPassword = [
  check('email', 'Email is not correct').normalizeEmail().isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          error: {
            message: errors.array()[0].msg,
            code: 400,
          },
        });
      }

      const { email, password } = req.body;

      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_NOT_FOUND',
            code: 400,
          },
        });
      }

      const isPasswordsEqual = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordsEqual) {
        return res.status(400).json({
          error: {
            message: 'INVALID_PASSWORD',
            code: 400,
          },
        });
      }

      const tokens = tokenService.generate(existingUser._id);
      await tokenService.save(existingUser._id, tokens.refreshToken);

      res.status(200).send({
        ...tokens,
        userId: existingUser._id,
      });
    } catch (error) {
      res.status(500).send({
        error: {
          message: error.message,
          code: 500,
        },
      });
    }
  },
];

const token = [
  check('refresh_token', 'refresh_token is required').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          error: {
            message: errors.array()[0].msg,
            code: 400,
          },
        });
      }

      const { refresh_token: refreshToken } = req.body;

      const data = tokenService.verifyRefreshToken(refreshToken);
      const dbToken = await tokenService.find(refreshToken);

      if (!data || !dbToken || data?.userId !== dbToken?.userId.toString()) {
        return res.status(401).send({
          error: {
            message: 'UNAUTHORIZED',
            code: 401,
          },
        });
      }

      const tokens = tokenService.generate(data.userId);
      await tokenService.save(data.userId, tokens.refreshToken);

      res.status(200).send({
        ...tokens,
        userId: data.userId,
      });
    } catch (error) {
      res.status(500).send({
        error: {
          message: error.message,
          code: 500,
        },
      });
    }
  },
];

module.exports = {
  signUp,
  signInWithPassword,
  token,
};
