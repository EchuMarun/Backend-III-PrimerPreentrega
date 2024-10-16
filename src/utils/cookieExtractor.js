export const cookieExtractor = req => {
  return req?.cookie?.token || null;
};
