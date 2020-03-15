
const initialState = {
  email: '',
  permissions: [],
  contacts: [],
  phoneGear: []
};

const UserLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SetUserInfo':
      console.log("Action Payload", action.payload);
      return {
        ...state,
        email: action.payload.email,
        permissions: action.payload.permissions,
        contacts: action.payload.contacts,
        phoneGear: action.payload.phoneGear
      };
    case 'GetUserInfo':
    default:
      return {
        ...state,
      };
  }
};

export default UserLoginReducer;
