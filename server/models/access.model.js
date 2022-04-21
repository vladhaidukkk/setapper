const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    setupId: { type: Schema.Types.ObjectId, ref: 'Setup', required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isAccepted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Access', schema);
