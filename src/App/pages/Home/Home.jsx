/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import "./index.style.css";
import { Pagination, Loader } from "../../components";

function Home(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const { getCountries } = props;
    getCountries({ page: currentPage });
  }, [currentPage]);

  const { data, loading } = props;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data && data.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="row_home">
      <h2>Post Details </h2>
      <ol>
        {currentPosts &&
          currentPosts.map((item, index) => (
            <div key={index}>
              <li className="">
                <a>{item.title}</a>
              </li>
              <p>{item.body}</p>
            </div>
          ))}
      </ol>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data && data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Home;
