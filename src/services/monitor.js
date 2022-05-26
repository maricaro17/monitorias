import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
const create = async (data) => {
  try {
    await setDoc(doc(collection(db, "monitor")), data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const findAll = async (dispatch, types) => {
  const monitores = await getDocs(collection(db, "monitor"));
  console.log(monitores)
  const list = [];
  monitores.forEach((doc) => {
    list.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  
  dispatch({
    type: types.monitores,
    payload: list,
  });
};

const remove = async (id) => {
    try {
      deleteDoc(doc(db, "monitor", id));
      return true;
    } catch (error) {
      return false;
    }
  };
const monitor = { create, findAll, remove };
export default monitor;
