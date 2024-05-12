import css from "./Pagination.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/filters/slice";
import {
  selectCurrentPage,
  selectTotalPage,
} from "../../redux/filters/selectors";

const Pagination = () => {
  const dispatch = useDispatch();
  const total_pages = useSelector(selectTotalPage);
  const current_page = useSelector(selectCurrentPage);

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

const paginationItems = () => {
  const pages = [];

  // Завжди показуємо першу сторінку
  pages.push(
    <li
      key={1}
      className={current_page === 1 ? css.PageActive : ""}
      onClick={() => goToPage(1)}
    >
      1
    </li>
  );

  // Визначення діапазонів для пагінації
  let startPage, endPage;
  if (current_page <= 3) {
    // Якщо поточна сторінка від 1 до 3
    startPage = 2;
    endPage = Math.min(5, total_pages - 1);
  } else if (current_page > 3 && current_page < total_pages - 2) {
    // Поточна сторінка десь посередині
    startPage = current_page - 2;
    endPage = current_page + 2;
    pages.push(
      <li key="dots1" className="dots">
        ...
      </li>
    );
  } else {
    // Поточна сторінка одна з останніх трьох
    startPage = total_pages - 4;
    endPage = total_pages - 1;
    pages.push(
      <li key="dots1" className="dots">
        ...
      </li>
    );
  }

  // Генерування сторінок між startPage і endPage
  for (let page = startPage; page <= endPage; page++) {
    pages.push(
      <li
        key={page}
        className={current_page === page ? css.PageActive : ""}
        onClick={() => goToPage(page)}
      >
        {page}
      </li>
    );
  }

  // Многоточчя перед останньою сторінкою, якщо потрібно
  if (endPage < total_pages - 1) {
    pages.push(
      <li key="dots2" className="dots">
        ...
      </li>
    );
  }

  // Завжди показуємо останню сторінку
  pages.push(
    <li
      key={total_pages}
      className={current_page === total_pages ? css.PageActive : ""}
      onClick={() => goToPage(total_pages)}
    >
      {total_pages}
    </li>
  );

  return pages;
};

  return (
    <div>
      {current_page > 1 && (
        <button
          className="page-btn prev"
          onClick={() => goToPage(current_page - 1)}
        >
          <img
            src="./images/arrow-left.svg"
            className="arrow prev"
            alt="arrow prev"
          />
        </button>
      )}
      <ul className="pagination-btns">{paginationItems()}</ul>
      {current_page < total_pages && (
        <button
          className="page-btn next"
          onClick={() => goToPage(current_page + 1)}
        >
          <img
            src="./images/arrow-right.svg"
            className="arrow next"
            alt="arrow next"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
