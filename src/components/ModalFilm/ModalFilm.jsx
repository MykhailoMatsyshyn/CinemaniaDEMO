import ModalFilmCard from "../ModalFilmCard/ModalFilmCard";
import css from "./ModalFilm.module.scss";

export default function ModalFilm({
  movie,
  neighbors,
  onClose,
  onOpen,
  currentIndex,
  moviesLength,
}) {
  // Додаємо обробник кліків на оверлей, щоб закривати модальне вікно
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : moviesLength - 1;
    onOpen(neighbors.prevMovie, newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex < moviesLength - 1 ? currentIndex + 1 : 0;
    onOpen(neighbors.nextMovie, newIndex);
  };

  return (
    <section className={css.modalFilm} onClick={handleOverlayClick}>

      <h2 className="visually-hidden">Film info</h2>
      <div className={css.overlay}>

        <div className={css.modalCard} onClick={(e) => e.stopPropagation()}>

          <button type="button" className={css.modalCard__close} onClick={onClose}>
            ×
          </button>

          <ModalFilmCard movie={movie} />

          <div className={css.buttons}>
            <button type="button" className={css.buttons__watched}>
              <p className={css.buttons__text}>add to Watched</p>
            </button>
            <button type="button" className={css.buttons__queue}>
              <p className={css.buttons__text}>add to queue</p>
            </button>
          </div>

        </div>



        {neighbors.prevMovie && (
          <div className={css.modalCardPrev} onClick={handlePrevClick}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${neighbors.prevMovie.poster_path}`}
              alt={neighbors.prevMovie.original_title}
            />
          </div>
        )}

        {neighbors.nextMovie && (
          <div className={css.modalCardNext} onClick={handleNextClick}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${neighbors.nextMovie.poster_path}`}
              alt={neighbors.nextMovie.original_title}
            />
          </div>
        )}
      </div>
    </section>
  );
}
