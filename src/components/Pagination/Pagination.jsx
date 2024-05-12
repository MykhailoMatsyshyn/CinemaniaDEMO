import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/actions";

function Pagination() {
  const { currentPage, totalPages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <section className="pagination-section">
      <button
        className="page-btn prev"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>
      <ul className="pagination-btns">
        {/* Тут можна додати динамічну пагінацію в залежності від загальної кількості сторінок */}
        <li
          className={currentPage === 1 ? "page active" : "page"}
          onClick={() => onPageChange(1)}
        >
          1
        </li>
        {currentPage > 1 && (
          <li onClick={() => onPageChange(currentPage)}>...</li>
        )}
        {currentPage}
        {currentPage < totalPages && (
          <li onClick={() => onPageChange(totalPages)}>...</li>
        )}
        <li
          className={currentPage === totalPages ? "page active" : "page"}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </li>
      </ul>
      <button
        className="page-btn next"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </section>
  );
}

export default Pagination;

// function Pagination({ currentPage, totalPages, onPageChange }) {
// //   const handlePrevious = () => {
// //     if (currentPage > 1) {
// //       onPageChange(currentPage - 1);
// //     }
// //   };

// //   const handleNext = () => {
// //     if (currentPage < totalPages) {
// //       onPageChange(currentPage + 1);
// //     }
// //   };

// //   const handlePageClick = (page) => {
// //     onPageChange(page);
// //   };

//     return (
//       <section className="pagination-section">
//         {/* <h2 className="visually-hidden">pagination</h2> */}
//         <button className="page-btn prev">
//           <img
//             src="./images/arrow-left.svg"
//             className="arrow prev"
//             alt="arrow prev"
//           />
//         </button>
//         <ul className="pagination-btns">
//           <li className="page is-hidden">1</li>
//           <li className="dots is-hidden">...</li>
//           <li className="page active">1</li>
//           <li className="page">2</li>
//           <li className="page">3</li>
//           <li className="page">4</li>
//           <li className="page">5</li>
//           <li className="dots">...</li>
//           <li className="page">20</li>
//         </ul>
//         <button className="page-btn next">
//           <img
//             src="./images/arrow-left.svg"
//             className="arrow next"
//             alt="arrow next"
//           />
//         </button>
//       </section>
//       // <section className="pagination-section">
//       //   <h2 className="visually-hidden">Pagination</h2>
//       //   <button className="page-btn prev" onClick={handlePrevious}>
//       //     <img
//       //       src="./images/arrow-left.svg"
//       //       className="arrow prev"
//       //       alt="Previous page"
//       //     />
//       //   </button>
//       //   <ul className="pagination-btns">
//       //     {currentPage > 1 && (
//       //       <li className="page" onClick={() => handlePageClick(1)}>
//       //         1
//       //       </li>
//       //     )}
//       //     {currentPage > 3 && <li className="dots">...</li>}
//       //     {Array.from({ length: 5 }, (_, i) => i + Math.max(currentPage - 2, 1))
//       //       .slice(0, currentPage + 2 > totalPages ? totalPages : undefined)
//       //       .map((pageNumber) => (
//       //         <li
//       //           key={pageNumber}
//       //           className={`page ${currentPage === pageNumber ? "active" : ""}`}
//       //           onClick={() => handlePageClick(pageNumber)}
//       //         >
//       //           {pageNumber}
//       //         </li>
//       //       ))}
//       //     {currentPage < totalPages - 2 && <li className="dots">...</li>}
//       //     {currentPage < totalPages && (
//       //       <li className="page" onClick={() => handlePageClick(totalPages)}>
//       //         {totalPages}
//       //       </li>
//       //     )}
//       //   </ul>
//       //   <button className="page-btn next" onClick={handleNext}>
//       //     <img
//       //       src="./images/arrow-right.svg"
//       //       className="arrow next"
//       //       alt="Next page"
//       //     />
//       //   </button>
//       // </section>
//     );
// }

// export default Pagination;
