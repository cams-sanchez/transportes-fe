
let createApiUrl = (endPoint) => {
  return process.env.REACT_APP_API_URL + process.env.REACT_APP_API_PORT + endPoint;
};

module.exports = {
  loginUser: () => {
    return createApiUrl('/users/authenticate');
  },
};
