const User = require('../models/user.model');

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    res.send(user);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {};

const updateUserById = async (req, res) => {};

module.exports = {
  getUserById,
  createUser,
  updateUserById,
};
