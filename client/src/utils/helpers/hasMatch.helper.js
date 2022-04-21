const hasMatchHelper = (regex, obj, keys) => {
  const keysToMatch = keys || Object.keys(obj);
  return keysToMatch.some((key) => regex.test(obj[key].toString()));
};

export default hasMatchHelper;
