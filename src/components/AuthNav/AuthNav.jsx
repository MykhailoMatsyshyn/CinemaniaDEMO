import {NavLink} from "react-router-dom";
import css from "./AuthNav.module.scss";
import clsx from "clsx";

const makeLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
    return (
        <div className={css.auth}>
            <div className={css.auth__item}>
                <NavLink className={makeLinkClass} to="/register">
                    <div className={css.auth__button}>
                        Register
                    </div>
                </NavLink>
            </div>
            <div className={css.auth__item}>
                <NavLink className={makeLinkClass} to="/login">
                    <div className={css.auth__button}>
                        Log In
                    </div>
                </NavLink>
            </div>
        </div>
    );
}
