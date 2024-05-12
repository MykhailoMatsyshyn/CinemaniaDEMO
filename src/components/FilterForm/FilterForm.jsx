import css from "./FilterForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  changeGenre,
  changeYear,
  changeSorting,
} from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function FilterForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchMovie.value.trim();
    if (!query) return;
    // onSubmit(query);
    console.log(query);
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    const genre = e.target.elements.genreForm.value;
    const year = e.target.elements.yearForm.value;
    const sort = e.target.elements.sortForm.value;

    // if (genre === "start" && year === "start" && sort === "start") return; // ??

    const formData = {
      genre: genre !== "start" ? genre : undefined,
      year: year !== "start" ? year : undefined,
      sort: sort !== "start" ? sort : undefined,
    };

    if (formData.query || formData.genre || formData.year || formData.sort) {
      // onSubmit(formData);
    }
    // onSubmit(query);
    console.log(formData);
  };
  /************************************************ */
  const dispatch = useDispatch();
  const { value } = useSelector(selectNameFilter);

  const handleChange = (e) => {
    console.log("=========== handleChange ===========");
    console.log(e.target.value.trim());
    // console.log(e.target.elements.searchMovie.value);
    dispatch(changeFilter(e.target.value.trim()));
    console.log("=============================");
  };

  const handleGenreChange = (e) => {
    console.log("=========== handleGenreChange ===========");
    console.log(e.target.value);

    dispatch(changeGenre(e.target.value));
    console.log("=============================");
  };

  const handleYearChange = (e) => {
    console.log("=========== handleYearChange ===========");
    console.log(e.target.value);

    dispatch(changeYear(e.target.value));
    console.log("=============================");
  };

  const handleSortingChange = (e) => {
    console.log("=========== handleSortingChange ===========");
    console.log(e.target.value);

    dispatch(changeSorting(e.target.value));
    console.log("=============================");
  };

  /************************************************ */

  return (
    <div className={css.formContainer}>
      {/* <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="searchQuery" autoFocus={true} required />
        <button type="submit">Search</button>
      </form> */}

      <form
        onSubmit={handleSubmit}
        className="header__search-form"
        id="search-form"
      >
        <input
          className="header__input"
          type="text"
          name="searchMovie"
          //   autocomplete="off"
          placeholder="Movie search"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="header__search-button">
          <svg className="header__search-icon" width="12" height="12">
            <use href="./images/sprite/symbol-defs.svg#icon-search"></use>
          </svg>
          <span className="visually-hidden">search</span>
        </button>
      </form>

      <form
        onSubmit={handleSubmitFilter}
        className="filter_form"
        id="filter-form"
      >
        <select
          onChange={handleGenreChange}
          className="filter_form__select"
          name="genreForm"
          id="genreForm"
        >
          <option value="start">Genre</option>
          <option value="28">Action</option>
          <option value="12">Adventure</option>
          <option value="16">Animation</option>
          <option value="35">Comedy</option>
          <option value="80">Crime</option>
          <option value="99">Documentary</option>
          <option value="18">Drama</option>
          <option value="10751">Family</option>
          <option value="14">Fantasy</option>
          <option value="36">History</option>
          <option value="27">Horror</option>
          <option value="10402">Music</option>
          <option value="9648">Mystery</option>
          <option value="10749">Romance</option>
          <option value="878">Science Fiction</option>
          <option value="10770">TV Movie</option>
          <option value="53">Thriller</option>
          <option value="10752">War</option>
          <option value="37">Western</option>
        </select>

        <select
          onChange={handleYearChange}
          className="filter_form__select"
          name="yearForm"
          id="yearForm"
        >
          <option value="start">Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
        </select>

        <select
          onChange={handleSortingChange}
          className="filter_form__select"
          name="sortForm"
          id="sortForm"
        >
          <option value="start">Sorting</option>
          <option value="popularity.desc">Popularity (decreasing)</option>
          <option value="popularity.asc">Popularity (increasing)</option>
          <option value="primary_release_date.desc">
            Release date (decreasing)
          </option>
          <option value="primary_release_date.asc">
            Release date (ascending)
          </option>
          <option value="original_title.asc">Name (A-Z)</option>
          <option value="original_title.desc">Name (Z-A)</option>
        </select>
        <button className="btnResetFilter" id="btnResetFilter" type="submit">
          Reset
        </button>
        {/* <button id="toggle-theme-btn">
          <span className="text_theme-btn">CHANGE THEME</span>
          <svg width="28px" height="28px">
            <use
              className="moon"
              id="toggle-theme-image"
              href="./images/icons.svg#moon"
            ></use>
            <use
              className="sun"
              id="toggle-theme-image"
              href="./images/icons.svg#sun"
            ></use>
          </svg>
          <span className="visually-hidden">theme</span>
        </button> */}
      </form>
    </div>
  );
}
