const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    message: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    setupId: { type: Schema.Types.ObjectId, ref: 'Setup' },
    presetId: { type: Schema.Types.ObjectId, ref: 'Preset' },
    likesAmount: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Comment', schema);
