import React from "react";

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
  const buttonData = [1, 2, 3, 4, 5];
  return totalPages > 1 ? (
    <div className="pagination ">
      {/* Previous Button */}
      <button
        disabled={pageNumber <= 0}
        type="button"
        className="prev"
        onClick={() => setPageNumber && setPageNumber(pageNumber - 1)}
        hidden={pageNumber <= 0}
      >
        Prev
      </button>
      {/* Buttons */}
      {buttonData.map((button, index) => {
        return (
          <button
            disabled={pageNumber >= totalPages - 1}
            type="button"
            className={button === 1 ? "activeBtn" : "pageBtn"}
            onClick={() => setPageNumber && setPageNumber(pageNumber)}
            key={index}
          >
            {pageNumber + button}
          </button>
        );
      })}
      <button
        disabled={pageNumber >= totalPages - 1}
        type="button"
        className="next"
        onClick={() =>
          setPageNumber && setPageNumber && setPageNumber(pageNumber + 1)
        }
        hidden={pageNumber >= totalPages - 1}
      >
        Next
      </button>
    </div>
  ) : (
    ""
  );
};

export default Pagination;

//   <button
//     disabled={pageNumber >= totalPages - 1}
//     type="button"
//     className="activeBtn"
//     onClick={() => setPageNumber && setPageNumber(pageNumber)}
//   >
//     {pageNumber + 1}
//   </button>
//   {/* Button 2 */}
//   <button
//     disabled={pageNumber >= totalPages - 1}
//     type="button"
//     className="pageBtn"
//     onClick={() => setPageNumber && setPageNumber(pageNumber + 1)}
//     hidden={pageNumber + 1 >= totalPages - 1}
//   >
//     {pageNumber + 2}
//   </button>{" "}
//   {/* Button  3 */}
//   <button
//     disabled={pageNumber >= totalPages - 1}
//     type="button"
//     className="pageBtn"
//     onClick={() => setPageNumber && setPageNumber(pageNumber + 2)}
//     hidden={pageNumber + 2 >= totalPages - 1}
//   >
//     {pageNumber + 3}
//   </button>{" "}
//   {/* Button 4 */}
//   <button
//     disabled={pageNumber >= totalPages - 1}
//     type="button"
//     className="pageBtn"
//     onClick={() => setPageNumber && setPageNumber(pageNumber + 3)}
//     hidden={pageNumber + 3 >= totalPages - 1}
//   >
//     {pageNumber + 4}
//   </button>{" "}
//   {/* Button 5 */}
//   <button
//     disabled={pageNumber >= totalPages - 1}
//     type="button"
//     className="pageBtn"
//     onClick={() => setPageNumber && setPageNumber(pageNumber + 4)}
//     hidden={pageNumber + 4 >= totalPages - 1}
//   >
//     {pageNumber + 5}
//   </button>{" "}
