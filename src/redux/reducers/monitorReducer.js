import { Types } from "../type";

const initialState = {
    id:"",
    name: "",
    lastname: "",
    semestre: 0,
    programAcademy: "",
    documentNumber: 0,
    email: "",
    phone: "",
  };

const monitorReducer = (state = [initialState], action) => {
    switch (action.type) {
      case Types.monitores:
        return action.payload;
      default:
        return state;
    }
  };
  
  export { monitorReducer };