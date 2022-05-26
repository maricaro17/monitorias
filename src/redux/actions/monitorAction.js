import Swal from "sweetalert2";
import monitor from "../../services/monitor";
import { Types } from "../type";
import { finishLoading, hideModalMonitorRegister, startLoading } from "./uiAction";

const getMonitores = () => {
    return (dispatch)=>{
        return monitor.findAll(dispatch, Types)
    }
};
const createMonitor = (data) => {
  return (dispatch) => {
    const isMonitor = monitor.create(data);
    if (isMonitor) {
      dispatch(startLoading());
      Swal.fire({
        position: "center",
        text: "Carga Exitosa",
        icon: "success",
        title: data.name,
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(hideModalMonitorRegister())
      dispatch(finishLoading());
      dispatch(getMonitores());
      
    }
  };
};

const deleteMonitor = (data) => {
    return (dispatch) => {
      const monitorDeleted = monitor.remove(data.id);
      if (monitorDeleted) {
        dispatch(startLoading());
        Swal.fire({
          position: "center",
          text: `${data.name} ha sido eliminada`,
          icon: "success",
          title: "Eliminado exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(finishLoading());
        dispatch(
          getMonitores()
        );
        
      }
    };
  };
export {createMonitor, getMonitores, deleteMonitor}