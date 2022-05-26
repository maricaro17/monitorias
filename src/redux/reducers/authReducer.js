import { Types } from "../type";

const authState = {
  isAuthenticated: false,
  isCordinator:false
};

const loginReducer = (state = authState, action) => {
  switch (action.type) {
    case Types.login:
      return action.payload;
    case Types.logout:
      return action.payload;
    default:
      return state;
  }
};

export { loginReducer };