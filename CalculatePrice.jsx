import React, { useState, useEffect } from "react";

function CalculatePrice() {
  const [price, setPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState(null);

  const calculateTotalPrice = () => {
    const profitPercentage = 0.2;
    const calculatedPrice =
      parseFloat(price) + parseFloat(price) * profitPercentage;
    setTotalPrice(calculatedPrice.toFixed(2));
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [price]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Price Calculator
        </h1>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter product price"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button
          onClick={calculateTotalPrice}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Calculate Total Price
        </button>
        {totalPrice && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <p className="font-medium">Total Price with 20% Profit:</p>
            <p className="text-lg font-bold">Rs.{totalPrice}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatePrice;
