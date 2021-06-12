export const api = {};

export const getApiUrl = (path: string) =>
  [process.env.REACT_APP_API_URL, path].join('/');
