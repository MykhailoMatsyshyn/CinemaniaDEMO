// import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

export default function Catalog() {
  return (
    <section className="catalog section container">
      {/* <h1 className="visually-hidden">Catalog</h1> */}

      <ul className="poster-list">
        <li className="poster-list__item">
          {/* Content that goes inside each list item */}
        </li>
      </ul>

      {/* <div className="to_main__div visually-hidden">
        <img
          className="image-error"
          src="./images/404-error-page-examples-best.jpg"
          alt="Oops... 404"
          width="1280"
        />
        <span className="to_main__text">
          Incorrect request. Page not found
          <svg className="to_main__icon" width="24" height="24">
            <use href="./images/sprite/symbol-defs.svg#icon-shocked"></use>
          </svg>
        </span>
        <Link to="/" className="to_main__link">
          To main page
        </Link>{" "} */}
      {/* Adjust the href to use Link component */}
      {/* </div> */}
    </section>
  );
}
