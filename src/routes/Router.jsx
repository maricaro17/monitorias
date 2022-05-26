import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import PrincipalMenu from "../components/PrincipalMenu";
import { auth } from "../config/firebaseConfig";
import Login from "../pages/Login";
import Monitores from "../pages/Monitores";
import Monitorias from "../pages/Monitorias";
import { login } from "../redux/actions/authAction";
import { PrivateRouter } from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(login(user));
        }
      })
    }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRouter>
                <PrincipalMenu />
              </PrivateRouter>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/monitores"
            element={
              <PrivateRouter>
                <Monitores />
              </PrivateRouter>
            }
          />
          <Route
            path="/monitorias"
            element={
              <PrivateRouter>
                <Monitorias />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
