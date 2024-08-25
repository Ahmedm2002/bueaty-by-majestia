import React from "react";

function Category({ img, name, text }) {
  return (
    <>
      <div className="bg-white border rounded-lg shadow-sm p-2 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-0">
          {name}
        </h3>
        <img
          src={img}
          alt="Sunglasses"
          className="mx-auto h-40 w-40 object-cover mb-4"
        />
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </>
  );
}

export default Category;
