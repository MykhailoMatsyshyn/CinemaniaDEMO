import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../API";

import MovieList from "../MovieList/MovieList";

export default function MoviesList() {
  //   const [isError, setError] = useState(false);
  //   const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // setLoading(true);
        const data = await getUpcomingMovies();
        console.log(data);
        setMovies(data.results);
      } catch (error) {
        // setError(true);
      } finally {
        // setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Upcoming</h1>
      {/* {isLoading && <Loader />} */}
      {/* {isError && <ErrorMessage />} */}
      {movies.length > 0 && <MovieList movies={movies} info="upcoming" />}
    </div>
  );
}
