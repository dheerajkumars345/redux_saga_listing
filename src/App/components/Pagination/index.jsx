/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./index.style.css";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="center">
      <div className="pagination">
        {pageNumbers.map((number) => (
          <a
            className={currentPage === number ? "active" : ""}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  );
};
