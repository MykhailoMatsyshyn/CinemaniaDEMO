import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MoviesList from "../MovieList/MovieList";
import {
  selectNameFilter,
  selectGenreFilter,
  selectYearFilter,
  selectSortingFilter,
} from "../../redux/filters/selectors";
import { getSearchForm } from "../../API";

const Catalog = () => {
  const [movies, setMovies] = useState([]);

  const query = useSelector(selectNameFilter);
  const genre = useSelector(selectGenreFilter);
  const year = useSelector(selectYearFilter);
  const sort = useSelector(selectSortingFilter);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // setLoading(true);
        console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");
        const page = "";
        // const query = "";
        // const genre = "";
        // const year = "";
        // const sort = "";
        const dataMovie = await getSearchForm(page, query, genre, year, sort);
        console.log(dataMovie);
        console.log("+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-");

        // console.log(data);
        setMovies(dataMovie.results);
      } catch (error) {
        // setError(true);
      } finally {
        // setLoading(false);
      }
    };

    fetchMovies();
  }, [query, genre, year, sort]);

  return (
    <div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}
      <MoviesList movies={movies} info={"catalog"} />
    </div>
  );
};

export default Catalog;

// // import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

// import { useSelector } from "react-redux";

// import { selectMovies } from "../../redux/movies";
// import { selectNameFilter } from "../../redux/filters";

// const getVisibleMovies = (movies, statusFilter) => {
//   return statusFilter.name == ""
//     ? movies
//     : movies.filter((movie) =>
//         movie.name.toLowerCase().includes(statusFilter.name.toLowerCase())
//       );
// };

// export default function Catalog() {
// const contacts = useSelector(selectContacts);

//   const visibleMovies = useSelector(selectFilteredMovies);
//   console.log("============== visibleMovies ==============");
//   console.log(visibleMovies);
//   console.log("============================");

//   return (
//     <div>
//       {visibleMovies.length ? (
//         <ul>
//           {visibleMovies.map((contact) => (
//             <li key={contact.id}>{/* <Contact contact={contact} /> */}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Not found...</p>
//       )}
//     </div>
//   );
// }

// // <section className="catalog section container">
//     //   {/* <h1 className="visually-hidden">Catalog</h1> */}
//     //   <ul className="poster-list">
//     //     <li className="poster-list__item">
//     //       {/* Content that goes inside each list item */}
//     //     </li>
//     //   </ul>
//     //   {/* <div className="to_main__div visually-hidden">
//     //     <img
//     //       className="image-error"
//     //       src="./images/404-error-page-examples-best.jpg"
//     //       alt="Oops... 404"
//     //       width="1280"
//     //     />
//     //     <span className="to_main__text">
//     //       Incorrect request. Page not found
//     //       <svg className="to_main__icon" width="24" height="24">
//     //         <use href="./images/sprite/symbol-defs.svg#icon-shocked"></use>
//     //       </svg>
//     //     </span>
//     //     <Link to="/" className="to_main__link">
//     //       To main page
//     //     </Link>{" "} */}
//     //   {/* Adjust the href to use Link component */}
//     //   {/* </div> */}
// // </section>

// export default function Catalog() {
//     return (
//     <div>
//       {visibleMovies.length ? (
//         <ul>
//           {visibleMovies.map((contact) => (
//             <li key={contact.id}>{/* <Contact contact={contact} /> */}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Not found...</p>
//       )}
//     </div>
//   );
// }
