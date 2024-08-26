import React, { useState, useEffect } from "react";

function CalculateDiscount() {
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const calculateDiscountedPrice = () => {
    if (price && discountPercentage) {
      const calculatedPrice =
        parseFloat(price) -
        parseFloat(price) * (parseFloat(discountPercentage) / 100);
      setDiscountedPrice(calculatedPrice.toFixed(2));
    }
  };

  useEffect(() => {
    calculateDiscountedPrice();
  }, [price, discountPercentage]);

  return (
    <div className="flex justify-center mt-2 p-6">
      <div className="shadow-lg rounded-lg p-8 mt-0 max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Discount Calculator
        </h1>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <br />
        <input
          type="number"
          value={discountPercentage}
          onChange={(e) => setDiscountPercentage(e.target.value)}
          placeholder="Enter Discount Percentage"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <button
          onClick={calculateDiscountedPrice}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Calculate Discounted Price
        </button>
        {discountedPrice && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <p className="font-medium">
              Total Price after {discountPercentage}% Discount:
            </p>
            <p className="text-lg font-bold">Rs. {discountedPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculateDiscount;
