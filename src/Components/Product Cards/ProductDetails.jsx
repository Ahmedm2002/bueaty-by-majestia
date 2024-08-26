// src/Pages/ProductDetails.js
import React from "react";
import { useLocation } from "react-router-dom";
import Stars from "../Stars";
import FeaturedProducts from "../Featured Products/AllProducts";

const ProductDetails = () => {
  const location = useLocation();
  const { img, text, price, reducedPrice, shortDetail, rating } =
    location.state;

  const handleBuyNow = () => {
    const message = `I'm interested in buying the following product:\n\nProduct: ${text}\nPrice: Rs.${reducedPrice}\nOriginal Price: Rs.${price}\n\nPlease provide more details.`;
    const whatsappUrl = `https://wa.me/923400545395?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="container mx-auto mt-2 md:mt-4">
        <div className="flex flex-col md:flex-row px-8">
          <div className="md:w-1/2 lg:w-1/4 md:h-full flex items-stretch">
            <img
              src={img}
              alt={text}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/4 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{text}</h2>
              <p className="mt-2 text-gray-700">{shortDetail}</p>
              <p className="mt-2 text-xl text-slate-900">
                Rs.{reducedPrice} <span className="line-through">{price}</span>
              </p>
              <div className="mt-4">
                <Stars stars={rating} />
              </div>
            </div>
            <div className="flex justify-between mt-4 md:mt-0">
              <button
                className="rounded-lg justify-center mx-auto bg-pink-600 px-4 py-2 text-white w-[80%]"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
};

export default ProductDetails;
