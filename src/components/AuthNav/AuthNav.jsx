// src/components/AuthNav.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./AuthNav.module.scss";
import clsx from "clsx";
import { logoutUser } from "../../redux/auth/authActions";
import MyModal from "../MyModal/MyModal";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { fetchUserMovies } from "../../redux/movies/moviesActions";

const makeLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

export default function AuthNav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [logPopupVisible, setLogPopupVisible] = React.useState(false);
  const [regPopupVisible, setRegPopupVisible] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            uid: user.uid,
            email: user.email,
          },
        });
        // Завантаження даних користувача
        dispatch(fetchUserMovies());
      } else {
        dispatch({ type: "LOGOUT_SUCCESS" });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.auth}>
      {user ? (
        <button className={css.auth__button} onClick={handleLogout}>
          Вийти
        </button>
      ) : (
        <>
          <div className={css.auth__item}>
            <button
              className={makeLinkClass}
              onClick={() => setLogPopupVisible(true)}
            >
              Увійти
            </button>
            <MyModal visible={logPopupVisible} setVisible={setLogPopupVisible}>
              <LoginForm
                setVisibleReg={setRegPopupVisible}
                setVisibleLog={setLogPopupVisible}
              />
            </MyModal>
          </div>
          <div className={css.auth__item}>
            <button
              className={makeLinkClass}
              onClick={() => setRegPopupVisible(true)}
            >
              Зареєструватися
            </button>
            <MyModal
              visible={regPopupVisible}
              setVisible={setRegPopupVisible}
              width="670px"
            >
              <RegistrationForm
                setVisibleReg={setRegPopupVisible}
                setVisibleLog={setLogPopupVisible}
              />
            </MyModal>
          </div>
        </>
      )}
    </div>
  );
}
