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
    EMAIL_NOT_FOUND: { text: 'Email was not found', variant: 'error' },
    EMAIL_EXISTS: { text: 'Account with this email already exists', variant: 'error' },
    INVALID_PASSWORD: 'Password is not correct',
    USER_NOT_FOUND: 'User was not found',
    FORBIDDEN_ACCESS_CREATION: 'You are owner of this setup',
  },
};

export default errorConstants;
