import React from "react";
import Stars from "./Stars";

function ProductCard({
  img,
  text,
  price,
  reducedPrice,
  shortDetail,
  onSale = false,
}) {
  return (
    <article className="relative p-4 border rounded-lg shadow-md flex flex-col h-full">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img
          className="hover:scale-110 h-full w-full object-cover transition-all duration-300"
          src={img}
          alt={text}
        />
      </div>
      {onSale && (
        <div className="absolute top-2 left-2 rounded-full bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase">
          Sale 50%
        </div>
      )}
      <div className="mt-1 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-md font-semibold text-gray-900">{text}</h3>
          {shortDetail && (
            <p className="text-sm text-gray-400">{shortDetail}</p>
          )}
          <div className="mt-2 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {reducedPrice}
              </span>
              <span className="ml-2 text-sm text-slate-900 line-through">
                {price}
              </span>
            </p>
            <Stars />
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="w-full rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-500">
            View Details
          </button>
          <button className="w-full rounded-lg border-2 border-transparent bg-pink-400 px-4 py-2 font-medium text-white">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
