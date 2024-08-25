import React from "react";
import { useNavigate } from "react-router-dom";
function Category({ img, name, url }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-2 text-center">
        <img
          onClick={() => {
            navigate(`/${url}`);
          }}
          src={img}
          alt="Sunglasses"
          className="mx-auto h-40 w-40 object-cover mb-4 rounded-full hover:cursor-pointer"
        />

        <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-0">
          {name}
        </h3>
      </div>
    </>
  );
}

export default Category;
