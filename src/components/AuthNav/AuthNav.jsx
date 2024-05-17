import css from "./AuthNav.module.scss";
import clsx from "clsx";
import LoginForm from "../authentication/login-form/LoginForm";
import RegistrationForm from "../authentication/registrartion-form/RegistrationForm";
import MyModal from "../my-modal/MyModal";
import { useState } from "react";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  const [regPopupVisible, setRegPopupVisible] = useState(false);
  const [logPopupVisible, setLogPopupVisible] = useState(false);
  const [forgotPasswordPopupVisible, setForgotPasswordPopupVisible] =
    useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className={css.auth}>
      <div className={css.auth__item}>
        {/* <NavLink className={makeLinkClass} to="/register">
            <div className={css.auth__button}>Register</div>
          </NavLink> */}
        <button
          className={makeLinkClass}
          onClick={() => setLogPopupVisible(true)}
        >
          Log In
        </button>
        <MyModal visible={logPopupVisible} setVisible={setLogPopupVisible}>
          <LoginForm
            setVisibleReg={setRegPopupVisible}
            setVisibleLog={setLogPopupVisible}
            setForgotPassword={setForgotPasswordPopupVisible}
          />
        </MyModal>
      </div>
      <div className={css.auth__item}>
        {/* <NavLink className={makeLinkClass} to="/login">
            <div className={css.auth__button}>Log In</div>
          </NavLink> */}
        <button
          className={makeLinkClass}
          onClick={() => setRegPopupVisible(true)}
        >
          Sign Up
        </button>
        <MyModal
          visible={regPopupVisible}
          setVisible={setRegPopupVisible}
          width="670px"
        >
          <RegistrationForm
            setVisibleReg={setRegPopupVisible}
            setVisibleLog={setLogPopupVisible}
            setForgotPassword={setForgotPasswordPopupVisible}
          />
        </MyModal>
      </div>
    </div>
  );
}
