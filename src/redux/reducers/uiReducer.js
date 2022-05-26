import { Types } from "../type";

const initialState = {
  loading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case Types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

const modalReducer = (state = false, action) => {
  switch (action.type) {
    case Types.showModalMonitorRegister:
      return action.payload;
    case Types.hideModalMonitorRegister:
      return action.payload;
    case Types.showModalMonitoriasRegister:
      return action.payload;
    case Types.hideModalMonitoriasRegister:
      return action.payload;
    default:
      return state;
  }
};
export { uiReducer, modalReducer };
