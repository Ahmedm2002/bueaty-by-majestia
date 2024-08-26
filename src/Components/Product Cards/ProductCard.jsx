import React from "react";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars";

function truncateText(text) {
  const limit = 60;
  if (text.length > 50) {
    return text.substr(0, limit) + "...";
  }
  return text;
}

function ProductCard({
  img,
  text,
  price,
  reducedPrice,
  shortDetail,
  onSale = false,
  rating = "4.0",
}) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/productDetails", {
      state: { img, text, price, reducedPrice, shortDetail, rating },
    });
  };

  const handleBuyNow = () => {
    const message = `I'm interested in buying the following product:\n\nProduct: ${text}\nPrice: Rs.${reducedPrice}\nOriginal Price: Rs.${price}\n\nPlease provide more details.`;
    const whatsappUrl = `https://wa.me/923400545395?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5">
      <article className="relative md:p-4 p-2 border rounded-lg shadow-md flex flex-col h-full">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            className="hover:scale-110 cursor-pointer h-full w-full object-cover transition-all duration-300"
            src={img}
            alt={text}
            onClick={handleDetailsClick}
          />
        </div>
        {onSale && (
          <div className="absolute top-2 left-2 rounded-full bg-red-600 text-white px-2 py-1 text-xs font-bold uppercase">
            Sale 50%
          </div>
        )}
        <div className="mt-1 flex flex-col justify-between flex-grow">
          <div>
            <h3
              className="text-md font-semibold text-gray-900 cursor-pointer"
              onClick={handleDetailsClick}
            >
              {text}
            </h3>
            {shortDetail && (
              <p className="text-sm text-gray-700">
                {truncateText(shortDetail)}
              </p>
            )}
            <div className="mt-2 flex items-center justify-between">
              <p>
                <span className="text-xl md:text-3xl font-bold text-slate-900">
                  Rs.{reducedPrice}
                </span>
                <span className="ml-2 text-sm text-slate-900 line-through">
                  {price}
                </span>
              </p>
            </div>

            <div className="md:inline block">
              <Stars stars={rating} />
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              className="w-full rounded-lg border-2 p-1 bg-white md:px-4 md:py-2 text-gray-500"
              onClick={handleDetailsClick}
            >
              Details
            </button>

            <button
              className="w-full rounded-lg bg-pink-600 md:px-4 md:py-2 text-white"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductCard;
