const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    avatarLink: { type: String }, // todo: maybe have default here
    country: { type: String },
    bio: { type: String },
    birthDate: { type: Date },
    githubLink: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', schema);
