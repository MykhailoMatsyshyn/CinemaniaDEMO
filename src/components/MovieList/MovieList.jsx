import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.scss";
import { genres } from "../../constants/genres";

/*======================================================================*/

export default function MovieList({ movies, info }) {
  const location = useLocation();

  // Функція для отримання назв жанрів за їх номерами
  const getGenreNames = (genreIds) => {
    const genreNames = genreIds.map((id) => genres[id] || "Unknown");
    if (genreNames.length > 2) {
      return `${genreNames.slice(0, 2).join(", ")}...`;
    }
    return genreNames.join(", ");
  };
  // const defaultImg = "../../images/keep-calm-poster-not-found-1.png";

  console.log(movies);

  return (
    <div className={css.list}>
      {movies.map(
        ({
          original_title,
          id,
          poster_path,
          release_date,
          genre_ids,
          vote_average,
        }) => (
          <div key={id} className={css.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.link}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : `https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png`
                }
                alt={original_title}
                className={css.img}
                width={300}
                height={400}
              />
              {info !== "upcoming" && (
                <span className={css.rate}>{vote_average.toFixed(1)}</span>
              )}
              <div className={css.info}>
                <div className={css.info__title}>
                  {original_title.length > 29
                    ? `${original_title.substring(0, 25)}...`
                    : original_title}
                </div>
                <div className="poster-list__info"></div>
                {info === "upcoming" && <p>{release_date}</p>}
                {info === "catalog" && (
                  <div className={css.info__subtitle}>
                    {getGenreNames(genre_ids)} | {release_date.substring(0, 4)}
                  </div>
                )}
              </div>
            </Link>
          </div>
        )
      )}
    </div>
  );
}
