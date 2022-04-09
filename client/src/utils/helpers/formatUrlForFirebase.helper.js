const formatUrlForFirebaseHelper = (url) => {
  const noSlashUrl = url[url.length - 1] === '/' ? url.slice(0, -1) : url;
  return `${noSlashUrl}.json`;
};

export default formatUrlForFirebaseHelper;
