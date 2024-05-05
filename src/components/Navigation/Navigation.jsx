import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={makeLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={makeLinkClass} to="/library">
        My Library
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink className={makeLinkClass} to="/contacts">
          My Library
        </NavLink>
      )} */}
    </nav>
  );
}
