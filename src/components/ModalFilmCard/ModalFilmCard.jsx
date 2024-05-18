import css from "./ModalFilmCard.module.css";
import { genres } from "../../constants/genres";

export default function ModalFilmCard({ movie }) {
  return (
    <div className={css.modalCard}>
      <div className={css.modalCardImgThumb}>
        <img
          className={css.modalCardImage}
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.original_title}
          width={300}
        />
      </div>

      <div className={css.modalCardData}>
        <h2 className={css.modalCardDataHeading}>{movie.original_title}</h2>

        <ul className={css.modalCardList}>
          <li className={css.modalCardListItem}>
            <p className={css.modalCardListVotes}>Vote / Votes</p>
            <p className={css.modalCardListValue}>
              <b>
                <span className={css.modalCardListRate}>
                  {movie.vote_average}
                </span>{" "}
                / {movie.vote_count}
              </b>
            </p>
          </li>
          <li className={css.modalCardListItem}>
            <p className={css.modalCardListPopularity}>Popularity</p>
            <p className={css.modalCardListValue}>
              <b>{movie.popularity}</b>
            </p>
          </li>
          <li className={css.modalCardListItem}>
            <p className={css.modalCardListTitle}>Original Title</p>
            <p className={css.modalCardListValue}>
              <b>{movie.original_title}</b>
            </p>
          </li>
          <li className={css.modalCardListItem}>
            <p className={css.modalCardListGenre}>Genre</p>
            <p className={css.modalCardListValue}>
              <b>{movie.genre_ids.map((id) => genres[id]).join(", ")}</b>
            </p>
          </li>
        </ul>

        <h3 className={css.modalCardDescriptionHeading}>About</h3>
        <p className={css.modalCardDescription}>{movie.overview}</p>
      </div>
    </div>
  );
}
