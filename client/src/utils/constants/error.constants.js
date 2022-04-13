const errorConstants = {
  types: {
    AUTH: 'authError',
    ACCOUNT: 'accountError',
    SETUPS: 'setupsError',
    PRESETS: 'presetsError',
    ACCESSES: 'accessesError',
    LIKES: 'likesError',
    COMMENTS: 'commentsError',
  },
  messages: {
    EMAIL_NOT_FOUND: 'Email was not found',
    EMAIL_EXISTS: 'Account with this email already exists',
    INVALID_PASSWORD: 'Password is not correct',
  },
};

export default errorConstants;
