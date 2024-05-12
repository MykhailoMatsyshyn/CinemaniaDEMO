import css from "./LibrarySwitcher.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../redux/library/slice";

export default function LibrarySwitcher() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.library.activeTab);

  return (
    <ul className={css.switch}>
      <li>
        <button
          type="button"
          className={css.switch__button}
          onClick={() => dispatch(setActiveTab("WATCHED"))}
        >
          WATCHED
        </button>
      </li>
      <li>
        <button
          type="button"
          className={css.switch__button}
          onClick={() => dispatch(setActiveTab("QUEUE"))}
        >
          QUEUE
        </button>
      </li>
    </ul>
  );
}
