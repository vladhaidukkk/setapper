const User = require('../models/user.model');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const tokenService = require('../services/token.service');

const signUp = [
  check('email', 'Email is not correct').normalizeEmail().isEmail(),
  check('password', 'Password must have from 8 to 20 characters').isLength({ min: 8, max: 20 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          error: {
            message: errors.array()[0].msg,
          },
        });
      }

      const { email, password, username } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send({
          error: {
            message: 'EMAIL_EXISTS',
          },
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({
        email,
        password: hashedPassword,
        username,
        avatarLink:
          'https://firebasestorage.googleapis.com/v0/b/setapper-96945.appspot.com/o/avatar-default-1.png?alt=media&token=ea09d78d-b422-4c69-899f-8a44db990064',
      });

      const tokens = tokenService.generateTokens(newUser._id);
      res.status(201).send({
        userId: newUser._id,
        ...tokens,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  },
];

const signInWithPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const token = async (req, res) => {
  try {
    const { refresh_token } = req.body;
  } catch (error) {
    res.status(500).send({
      //todo: think about sending errors
      message: error.message,
    });
  }
};

module.exports = {
  signUp,
  signInWithPassword,
  token,
};
