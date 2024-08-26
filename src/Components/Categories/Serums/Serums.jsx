import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import RiceSkinBueatyEssence from "./Images/RiceSkinBueatyEssence.jpeg";
import pixiSerum from "./Images/pixiSerum.jpeg";
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
          price="1599/-"
          reducedPrice="1449/-"
          productCode="MZ18700837RFAAC"
          shortDetail="Material: Cream
Product Type: Rice Cream, Rice Lotion And Rice Serum Deal
Product Details: Nourish Your Skin, Moisture Replenish for Body, Soothing And Cooling, Hydration"
        />

        <ProductCard
          img={pixiSerum}
          text="RPixi Botanical Collagen & Retinol Serum"
          price="N/A"
          reducedPrice="N/A"
          productCode="1949615"
          shortDetail=" Repair damaged skin provide glow in skin help to remove pigmentation acne scars tighten your skin work as anti aging.
          Helps In: This concentrated, volumizing serum is formulated with Acacia Collagen, Retinol and vitamins to help restore skin’s elasticity."
        />
      </div>
    </>
  );
}

export default Serums;
