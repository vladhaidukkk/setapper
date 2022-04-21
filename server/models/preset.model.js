const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    localId: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    version: { type: String, required: true },
    tool: { type: String, required: true },
    options: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Preset', schema);
