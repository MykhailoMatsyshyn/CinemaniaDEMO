import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../API";

import MovieList from "../../components/MovieList/MovieList";

export default function MoviesList() {
  //   const [isError, setError] = useState(false);
  //   const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // setLoading(true);
        const data = await getTrendingMovies();
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
      <h1>Trending today</h1>
      {/* {isLoading && <Loader />} */}
      {/* {isError && <ErrorMessage />} */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
