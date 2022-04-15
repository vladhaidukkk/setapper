const Preset = require('../models/preset.model');
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
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        const newItem = new Model(item);
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
