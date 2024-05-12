import css from "./LibrarySwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/library/slice";

export default function LibrarySwitcher() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.library.activeTab);

  return (
    <ul className="header__list-button">
      <li className="header__item-button">
        <button
          type="button"
          className={`button ${
            activeTab === "WATCHED" ? "button--current" : ""
          } btn--watched`}
          onClick={() => dispatch(setActiveTab("WATCHED"))}
        >
          WATCHED
        </button>
      </li>
      <li className="header__item-button">
        <button
          type="button"
          className={`button ${
            activeTab === "QUEUE" ? "button--current" : ""
          } btn--queue`}
          onClick={() => dispatch(setActiveTab("QUEUE"))}
        >
          QUEUE
        </button>
      </li>
    </ul>
  );
}
