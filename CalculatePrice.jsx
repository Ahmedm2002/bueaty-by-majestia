import React, { useState, useEffect } from "react";

function CalculatePrice() {
  const [price, setPrice] = useState("");
  const [profitPercentage, setProfitPercentage] = useState(20);
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotalPrice = () => {
    if (price && profitPercentage) {
      const calculatedPrice =
        parseFloat(price) +
        parseFloat(price) * (parseFloat(profitPercentage) / 100);
      setTotalPrice(calculatedPrice.toFixed(2));
    }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [price, profitPercentage]);

  return (
    <div className="flex justify-center mt-2 p-6">
      <div className="shadow-lg rounded-lg p-8 mt-0 max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-100 mb-4">
          Price Calculator
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
          value={profitPercentage}
          onChange={(e) => setProfitPercentage(e.target.value)}
          placeholder="Enter Profit Percentage"
          className="border border-gray-300 p-2 rounded mb-4"
        />
        <button
          onClick={calculateTotalPrice}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Calculate Total Price
        </button>
        {totalPrice && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <p className="font-medium">
              Total Price with {profitPercentage}% Profit:
            </p>
            <p className="text-lg font-bold">Rs. {totalPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatePrice;
