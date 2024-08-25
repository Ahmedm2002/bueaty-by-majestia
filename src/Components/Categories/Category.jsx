import React from "react";

function Category({ img, name }) {
  return (
    <>
      <div className="p-2 text-center">
        <img
          src={img}
          alt="Sunglasses"
          className="mx-auto h-40 w-40 object-cover mb-4 rounded-full"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-0">
          {name}
        </h3>
      </div>
    </>
  );
}

export default Category;
