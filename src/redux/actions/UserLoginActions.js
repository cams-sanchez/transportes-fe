
const UserLoginActions = {
  setUserInfo: (loggedUserInfo) => {
    return {
      type:'SetUserInfo',
      payload: loggedUserInfo,
    }
  },
  getUserInfo: () => {
    return {
      type:'GetUserInfo'
    }
  },
};

export default UserLoginActions;

