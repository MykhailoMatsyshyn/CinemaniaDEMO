import css from "./LibrarySwitcher.module.scss";

export default function LibrarySwitcher() {
    return (
        <div className={css.switch}>
            <button type="button" className={css.switch__button}>
                <span className={css.switch__button__text}>WATCHED</span>
            </button>

            <button type="button" className={css.switch__button}>
                <span className={css.switch__button__text}>QUEUE</span>
            </button>
        </div>
    );
}
