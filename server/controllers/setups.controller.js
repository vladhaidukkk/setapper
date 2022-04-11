const Setup = require('../models/setup.model');

const getUserSetups = async (req, res) => {
  try {
    const { orderBy, equalTo } = req.query;
    const setups = await Setup.find({ [orderBy]: equalTo });

    res.send(setups);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const createSetup = async (req, res) => {
  try {
    const newSetup = await Setup.create({ ...req.body, ownerId: req.userId });
    res.status(201).send(newSetup);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const deleteSetup = async (req, res) => {
  try {
    const { setupId } = req.params;

    const setup = await Setup.findById(setupId);
    if (!setup) {
      return res.status(404).send({
        error: {
          message: 'SETUP_NOT_FOUND',
          code: 404,
        },
      });
    }

    if (setup.ownerId.toString() !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_SETUP',
          code: 403,
        },
      });
    }

    await setup.remove();
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

const updateSetup = async (req, res) => {
  try {
    const { setupId } = req.params;

    const setup = await Setup.findById(setupId);
    if (!setup) {
      return res.status(404).send({
        error: {
          message: 'SETUP_NOT_FOUND',
          code: 404,
        },
      });
    }

    if (setup.ownerId.toString() !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_SETUP',
          code: 403,
        },
      });
    }

    const updatedSetup = await Setup.findByIdAndUpdate(setupId, req.body, { new: true });
    res.send(updatedSetup);
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
  getUserSetups,
  createSetup,
  deleteSetup,
  updateSetup,
};
