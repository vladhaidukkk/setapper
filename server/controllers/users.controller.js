const User = require('../models/user.model');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_USER',
          code: 403,
        },
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        error: {
          message: 'USER_NOT_FOUND',
          code: 404,
        },
      });
    }

    res.send(user);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_USER',
          code: 403,
        },
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        error: {
          message: 'USER_NOT_FOUND',
          code: 404,
        },
      });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.send(updatedUser);
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
  getUserById,
  updateUserById,
  getUsers,
};
