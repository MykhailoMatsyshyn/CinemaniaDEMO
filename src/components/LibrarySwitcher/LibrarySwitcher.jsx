import css from "./LibrarySwitcher.module.css";

export default function LibrarySwitcher() {
  return (
    <ul className="header__list-button">
      <li className="header__item-button">
        <button type="button" className="button button--current btn--watched">
          <span className="button-text">WATCHED</span>
        </button>
      </li>
      <li className="header__item-button">
        <button type="button" className="button btn--queue">
          <span className="button-text">QUEUE</span>
        </button>
      </li>
    </ul>
  );
}
