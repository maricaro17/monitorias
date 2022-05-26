import { Types } from "../type";

const startLoading = () => {
  return (dispatch) => {
    dispatch({ type: Types.uiStartLoading });
  };
};

const finishLoading = () => {
  return (dispatch) => {
    dispatch({ type: Types.uiFinishLoading });
  };
};

const showModalMonitorRegister = () => {
  return (dispatch) => {
    dispatch({ type: Types.showModalMonitorRegister, payload: true });
  };
};
const hideModalMonitorRegister = () => {
  return (dispatch) => {
    dispatch({ type: Types.hideModalMonitorRegister, payload: false });
  };
};
const showModalMonitoriasRegister = () => {
  return (dispatch) => {
    dispatch({ type: Types.showModalMonitoriasRegister, payload: true });
  };
};
const hideModalMonitoriasRegister = () => {
  return (dispatch) => {
    dispatch({ type: Types.hideModalMonitoriasRegister, payload: false });
  };
};
export {
  startLoading,
  finishLoading,
  showModalMonitorRegister,
  showModalMonitoriasRegister,
  hideModalMonitorRegister,
  hideModalMonitoriasRegister,
};
