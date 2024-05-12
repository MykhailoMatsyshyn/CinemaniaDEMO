import { useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../../components/MovieList/MovieList";
import EmptyList from "../../components/EmptyList/EmptyList";

export default function MyLibraryPage() {
  const activeTab = useSelector((state) => state.library.activeTab);
  const [movies, setMovies] = useState([]);

  return (
    <div>
      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
         <EmptyList/>
      )}
      
      {activeTab === "WATCHED" ? (
        <div>List of Watched Movies</div>
      ) : (
        <div>List of Movies in Queue</div>
      )}
    </div>
  );
}
