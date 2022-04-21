const Access = require('../models/access.model');
const User = require('../models/user.model');
const Setup = require('../models/setup.model');
const { check, validationResult } = require('express-validator');

const createAccess = [
  check('email', 'Email is not correct').normalizeEmail().isEmail(),
  check('setupId', 'Setup ID is required').exists(),
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

      const { email, setupId } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({
          error: {
            message: 'USER_NOT_FOUND',
            code: 404,
          },
        });
      }

      if (user._id.toString() === req.userId) {
        return res.status(403).send({
          error: {
            message: 'FORBIDDEN_ACCESS_CREATION',
            code: 403,
          },
        });
      }

      const setup = await Setup.findById(setupId);
      if (!setup) {
        return res.status(404).send({
          error: {
            message: 'SETUP_NOT_FOUND',
            code: 404,
          },
        });
      }

      const existingAccess = await Access.findOne({ ...req.body, userId: user._id, ownerId: req.userId });
      if (existingAccess) {
        return res.status(400).send({
          error: {
            message: 'ACCESS_EXISTS',
            code: 400,
          },
        });
      }

      const newAccess = await Access.create({ ...req.body, userId: user._id, ownerId: req.userId, isAccepted: false });
      res.status(201).send(newAccess);
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

const getUserAccesses = async (req, res) => {
  try {
    const accesses = await Access.find({ $or: [{ ownerId: req.userId }, { userId: req.userId }] });
    res.send(accesses);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const updateAccessById = [
  check('isAccepted', 'isAccepted property is required').exists(),
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

      const { accessId } = req.params;

      const access = await Access.findById(accessId);
      if (!access) {
        return res.status(404).send({
          error: {
            message: 'ACCESS_NOT_FOUND',
            code: 404,
          },
        });
      }

      if (access.userId.toString() !== req.userId && access.ownerId.toString() !== req.userId) {
        return res.status(403).send({
          error: {
            message: 'FORBIDDEN_ACCESS',
            code: 403,
          },
        });
      }

      const updatedAccess = await Access.findByIdAndUpdate(
        accessId,
        { isAccepted: req.body.isAccepted },
        { new: true }
      );
      res.send(updatedAccess);
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

const deleteAccessById = async (req, res) => {
  try {
    const { accessId } = req.params;

    const access = await Access.findById(accessId);
    if (!access) {
      return res.status(404).send({
        error: {
          message: 'ACCESS_NOT_FOUND',
          code: 404,
        },
      });
    }

    if (access.userId.toString() !== req.userId && access.ownerId.toString() !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_ACCESS',
          code: 403,
        },
      });
    }

    await access.remove();
    res.status(204).send(null);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

module.exports = {
  createAccess,
  updateAccessById,
  deleteAccessById,
  getUserAccesses,
};
