const Like = require('../models/like.model');
const Comment = require('../models/comment.model');
const Access = require('../models/access.model');
const { check, validationResult } = require('express-validator');
const Setup = require('../models/setup.model');

const getUserLikes = async (req, res) => {
  try {
    const likes = await Like.find({ ownerId: req.userId });
    res.send(likes);
  } catch (error) {
    res.status(500).send({
      error: {
        message: error.message,
        code: 500,
      },
    });
  }
};

const createLike = [
  check('commentId', 'Comment ID is required').exists(),
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

      const { commentId } = req.body;
      const comment = await Comment.findById(commentId);

      const existingLike = await Like.findOne({ commentId: commentId, ownerId: req.userId });
      if (existingLike) {
        return res.status(400).send({
          error: {
            message: 'LIKE_EXISTS',
            code: 400,
          },
        });
      }

      if (comment.setupId) {
        const setup = await Setup.findById(comment.setupId);
        const access = await Access.findOne({ setupId: comment.setupId, userId: req.userId, isAccepted: true });

        if (setup.ownerId.toString() !== req.userId && !access) {
          return res.status(403).send({
            error: {
              message: 'FORBIDDEN_LIKES',
              code: 403,
            },
          });
        }
      }

      comment.likesAmount += 1;
      await comment.save();

      const newLike = await Like.create({ ...req.body, ownerId: req.userId });
      res.status(201).send(newLike);
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

const deleteLikeById = async (req, res) => {
  try {
    const { likeId } = req.params;

    const like = await Like.findById(likeId);
    if (!like) {
      return res.status(404).send({
        error: {
          message: 'LIKE_NOT_FOUND',
          code: 404,
        },
      });
    }

    if (like.ownerId.toString() !== req.userId) {
      return res.status(403).send({
        error: {
          message: 'FORBIDDEN_LIKE',
          code: 403,
        },
      });
    }

    const comment = await Comment.findById(like.commentId);
    comment.likesAmount -= 1;
    await comment.save();

    await like.remove();
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

module.exports = { getUserLikes, createLike, deleteLikeById };
