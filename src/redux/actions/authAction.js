import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { auth, facebook, google } from "../../config/firebaseConfig";
import { isCordinator } from "../../services/cordinator";
import { Types } from "../type";

const login = (user) => {
  return {
    type: Types.login,
    payload: {
      id: user.uid,
      name: user.displayName,
      isAuthenticated: true,
      isCordinator: user.isCordinator
    },
  };
};

const logout = () => {
  return (dispatch) => {
    signOut(auth).then(() => {
      dispatch({
        type: Types.logout,
        payload: {
          isAuthenticated: false,
        },
      });
    });
  };
};

const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google).then((result) => {
      const user = result.user;
      isCordinator(user.uid).then((result)=>user.isCordinator = result);
      dispatch(login(user));
    });
  };
};

const loginFacebook = () => {
  return (dispatch) => {
    signInWithPopup(auth, facebook).then((result) => {
      const user = result.user;
      dispatch(login(user));
    });
  };
};
const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        dispatch(login(user));
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          text: `${err.message}`,
          icon: "error",
          title: "Error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
};
export { loginEmailPassword, loginFacebook, loginGoogle, logout, login };
