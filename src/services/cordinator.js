import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
const coleccion = "cordinador";

export const isCordinator = (id) => {
  return getDoc(doc(db, coleccion, id)).then((cordinator) => {
    const data = cordinator.data().find((item) => item.cordinadorId === id);
    return data.cordinadorId ? true : false;
  });
};
