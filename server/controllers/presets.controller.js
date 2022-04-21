const Preset = require('../models/preset.model');

const getPresets = async (req, res) => {
  try {
    const presets = await Preset.find();
    res.send(presets);
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
  getPresets,
};
