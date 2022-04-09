const { Scheme, model } = require('mongoose');

const scheme = new Scheme({
  email: { type: String, required: true, unique: true },
  passwoord: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = model('User', scheme);
