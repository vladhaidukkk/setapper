const { Router } = require('express');
const { getPresets } = require('../controllers/presets.controller');

const presetsRouter = Router({ mergeParams: true });

presetsRouter.get('/', getPresets);

module.exports = presetsRouter;
