import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stars from "../Stars/Stars.jsx";
import parse from "html-react-parser";
import allProducts from "../../../allProducts";

const ProductDetails = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = allProducts.find(
      (item) => item.text.replace(/\s+/g, "-").toLowerCase() === productName
    );
    setProduct(foundProduct);
    window.scrollTo(0, 0);
  }, [productName, allProducts]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const { img, text, price, reducedPrice, shortDetail, rating, productCode } =
    product;

  const handleBuyNow = () => {
    const message = `I'm interested in buying the following product:\n
Product: ${text}\nPrice: Rs.${reducedPrice}

Please provide more details.`;

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
          <div className="browser-css md:w-1/2 lg:w-3/4 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">{text}</h2>
              <div className="mt-2 text-gray-700 browser-css">
                {parse(shortDetail)}
              </div>
              <p className="text-xl md:text-3xl font-bold text-slate-900">
                Rs.{reducedPrice}{" "}
                <span className="line-through text-sm font-normal">
                  Rs.{price}
                </span>
              </p>
              <div className="mt-4">
                <Stars stars={rating} />
              </div>
              <p className="my-4 text-sm text-red-600">
                Disclaimer: Before using a new cosmetic product, conduct a test
                on a small area of your skin. If you have a specific allergy or
                sensitivity, check the ingredients to avoid a reaction. Always
                read the warning labels and directions on the package for using
                any cosmetic products.
              </p>
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
    </>
  );
};

export default ProductDetails;
