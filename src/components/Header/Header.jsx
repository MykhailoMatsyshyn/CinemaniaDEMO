import { useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import FilterForm from "../FilterForm/FilterForm";
import LibrarySwitcher from "../LibrarySwitcher/LibrarySwitcher";
import css from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className={css.header}>
      <AppBar />
      {location.pathname === "/" && <FilterForm />}
      {location.pathname === "/library" && <LibrarySwitcher />}
      <hr />
      {/* Фільтрація / пошук АБО переглянуті / черга*/}
    </header>
  );
}
