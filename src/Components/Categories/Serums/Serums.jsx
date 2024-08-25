import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import RiceSkinBueatyEssence from "./Images/RiceSkinBueatyEssence.jpeg";
function Serums() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={RiceSkinBueatyEssence}
          text="Rice Skin Bueaty Essence"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Material: Cream
Product Type: Rice Cream, Rice Lotion And Rice Serum Deal
Product Details: Nourish Your Skin, Moisture Replenish for Body, Soothing And Cooling, Hydration"
        />
      </div>
    </>
  );
}

export default Serums;
