import {NavLink} from "react-router-dom";
import css from "./Navigation.module.scss";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeLinkClass = ({isActive}) => {
    return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
    //   const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav className={css.nav}>
            <div className={css.nav__item}>
                <NavLink className={makeLinkClass} to="/">
                    <div className={css.nav__button}>Home</div>
                </NavLink>
            </div>
            <div className={css.nav__item}>
                <NavLink className={makeLinkClass} to="/library">
                    <div className={css.nav__button}>My Library</div>
                </NavLink>
            </div>
            {/* {isLoggedIn && (
        <NavLink className={makeLinkClass} to="/contacts">
          My Library
        </NavLink>
      )} */}
        </nav>
    );
}
