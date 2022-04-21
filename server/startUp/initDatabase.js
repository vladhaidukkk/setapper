const Preset = require('../models/preset.model');
const Comment = require('../models/comment.model');
const mockWebpackPresets = require('../mock/mockWebpackPresets.json');
const mockGulpPresets = require('../mock/mockGulpPresets.json');
const mockEslintPresets = require('../mock/mockEslintPresets.json');
const mockPrettierPresets = require('../mock/mockPrettierPresets.json');
const mockStylelintPresets = require('../mock/mockStylelintPresets.json');
const mockRollupPresets = require('../mock/mockRollupPresets.json');
const mockPresets = [
  ...mockWebpackPresets,
  ...mockGulpPresets,
  ...mockEslintPresets,
  ...mockPrettierPresets,
  ...mockStylelintPresets,
  ...mockRollupPresets,
];

const initEntity = async (Model, data) => {
  const newData = data.map((item) => {
    return new Model(item);
  });

  for (const newItem of newData) {
    const oldItem = await Preset.findOne({ localId: newItem.localId });

    if (oldItem) {
      const comments = await Comment.find({ presetId: oldItem._id });
      for (const comment of comments) {
        comment.presetId = newItem._id;
        await comment.save();
      }
    }
  }

  await Model.collection.drop();
  return Promise.all(
    newData.map(async (newItem) => {
      try {
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
};

const initDatabase = async () => {
  const presets = await Preset.find();

  if (presets.length !== mockPresets.length) {
    await initEntity(Preset, mockPresets);
  }
};

module.exports = initDatabase;
