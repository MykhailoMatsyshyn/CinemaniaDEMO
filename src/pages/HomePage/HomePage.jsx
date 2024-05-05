import TrandingMoviesList from "../../components/TrandingMoviesList/TrandingMoviesList";
import UpcomingMoviesList from "../../components/UpcomingMoviesList/UpcomingMoviesList";

export default function HomePage() {
  return (
    <div>
      <TrandingMoviesList />
      <hr />
      ...
      <hr />
      <UpcomingMoviesList />
      {/* trending */} {/* films */} {/* upcoming */}
    </div>
  );
}
