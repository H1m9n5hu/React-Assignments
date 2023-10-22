import React, { useState } from 'react';

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for the items to display on the current page.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle next and previous page actions.
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Create an array of page numbers based on the number of pages.
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='app'>
      {currentItems.map((item, index) => (
        <div className='Card' key={index}><h2>{item}</h2></div>
      ))}

      <div>
        <button className='preBtn' onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            className='preBtn'
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          disabled={indexOfLastItem >= data.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
