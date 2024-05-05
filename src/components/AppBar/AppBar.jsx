import Navigation from "../Navigation/Navigation";
// import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { NavLink } from "react-router-dom";
import logo from "../../images/cinemania_logo.svg";

// import { useSelector } from "react-redux";
// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from "../../redux/auth/selectors";

// import css from "./AppBar.module.css";

export default function AppBar() {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div>
      <NavLink to="/">
        <img src={logo} alt="Cinemania logo" />
        <span> Cinemania</span>
        {/* <img src={logo} alt="Logo" /> */}
      </NavLink>
      <Navigation />
      <AuthNav />
      <hr />
      {/* {!isRefreshing && <div> {isLoggedIn ? <UserMenu /> : <AuthNav />}</div>} */}
    </div>
  );
}
