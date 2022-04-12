const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    commentId: { type: Schema.Types.ObjectId, ref: 'Comment', required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Like', schema);
