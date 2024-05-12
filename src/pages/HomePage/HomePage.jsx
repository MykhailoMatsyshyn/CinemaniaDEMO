// import Catalog from "../../components/Catalog/Catalog";
import MoviesCatalog from "../../components/MoviesCatalog/MoviesCatalog";
// import Pagination from "../../components/Pagination/Pagination";
import TrandingMoviesList from "../../components/TrandingMoviesList/TrandingMoviesList";
import UpcomingMoviesList from "../../components/UpcomingMoviesList/UpcomingMoviesList";

export default function HomePage() {
  return (
    <div>
      <TrandingMoviesList />
      <hr />
      <MoviesCatalog/>
      <hr />
      <UpcomingMoviesList />
    </div>
  );
}
