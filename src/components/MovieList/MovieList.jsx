import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

/*======================================================================*/

export default function MovieList({ movies, info }) {
  const location = useLocation();

  // const defaultImg = "../../images/keep-calm-poster-not-found-1.png";

  console.log(movies);

  return (
    <ul className={css.list}>
      {movies.map(
        ({
          original_title,
          id,
          poster_path,
          release_date,
          genre_ids,
          vote_average,
        }) => (
          <li key={id} className={css.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.link}
            >
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200/${poster_path}`
                    : `https://i.ibb.co/GPMFHG6/keep-calm-poster-not-found-1.png`
                }
                alt={original_title}
                className={css.img}
                width={200}
                height={300}
              />
              {info !== "upcoming" && (
                <span className="poster-list__rate">
                  {vote_average.toFixed(1)}
                </span>
              )}
              <div className="poster-list__wrap">
                <h2>{original_title}</h2>
                <div className="poster-list__info"></div>
                {info === "upcoming" && <p>{release_date}</p>}
                {info === "catalog" && (
                  <p>
                    {genre_ids} | {release_date.substring(0, 4)}
                  </p>
                )}
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
