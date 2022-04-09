const { Router } = require('express');

const userRouter = Router({ mergeParams: true });

userRouter.get('/', (req, res) => {
  res.send({
    message: 'yes',
  });
});

module.exports = userRouter;
