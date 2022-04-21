const Comment = require('../models/comment.model');
const Preset = require('../models/preset.model');
const Setup = require('../models/setup.model');
const Access = require('../models/access.model');
const { check, validationResult } = require('express-validator');

const getPageComments = async (req, res) => {
  try {
    const { orderBy, equalTo } = req.query;

    if (orderBy === 'presetId') {
      const comments = await Comment.find({ presetId: equalTo });
      res.send(comments);
    } else if (orderBy === 'setupId') {
      const setup = await Setup.findById(equalTo);
      if (!setup) {
        return res.status(400).send({
          error: {
            message: 'SETUP_NOT_FOUND',
            code: 400,
          },
        });
      }

      const access = await Access.findOne({ setupId: equalTo, userId: req.userId, isAccepted: true });
      if (setup.ownerId.toString() !== req.userId && !access) {
        return res.status(403).send({
          error: {
            message: 'FORBIDDEN_COMMENTS',
            code: 403,
          },
        });
      }

      const comments = await Comment.find({ setupId: equalTo });
      res.send(comments);
    }
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const createComment = [
  check('message', 'Message is required').exists(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({
          error: {
            message: errors.array()[0].msg,
            code: 400,
          },
        });
      }

      const { presetId, setupId } = req.body;
      if ((presetId && setupId) || (!presetId && !setupId)) {
        return res.status(400).send({
          error: {
            message: 'INVALID_DATA',
            code: 400,
          },
        });
      }

      if (presetId) {
        const preset = await Preset.findById(presetId);
        if (!preset) {
          return res.status(404).send({
            error: {
              message: 'PRESET_NOT_FOUND',
              code: 404,
            },
          });
        }
      }

      if (setupId) {
        const setup = await Setup.findById(setupId);
        const access = await Access.findOne({ setupId: setupId, userId: req.userId, isAccepted: true });

        if (setup.ownerId.toString() !== req.userId && !access) {
          return res.status(403).send({
            error: {
              message: 'FORBIDDEN_COMMENT',
              code: 403,
            },
          });
        }
      }

      const newComment = await Comment.create({ ...req.body, ownerId: req.userId, likesAmount: 0 });
      res.status(201).send(newComment);
    } catch (error) {
      res.status(500).send({
        error: {
          message: error.message,
          code: 500,
        },
      });
    }
  },
];

const deleteCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).send({
        error: {
          message: 'COMMENT_NOT_FOUND',
          code: 404,
        },
      });
    }

    if (comment.ownerId.toString() !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_COMMENT',
          code: 403,
        },
      });
    }

    await comment.remove();
    res.status(204).send(null);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

module.exports = { createComment, deleteCommentById, getPageComments };
