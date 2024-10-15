import React from "react";

function SearchResultCard({ img, text, category }) {
  return (
    <>
      <div>
        <div>
          <img src={img} alt="text" />
          <p>{text}</p>
          <p>{category}</p>
        </div>
      </div>
    </>
  );
}

export default SearchResultCard;
