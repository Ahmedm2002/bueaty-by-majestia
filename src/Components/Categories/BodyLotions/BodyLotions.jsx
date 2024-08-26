import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import HyderatingBL250ML from "./Images/HyderatingBL250ML.jpeg";
function BodyLotions() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={HyderatingBL250ML}
          text="Hydrating Body Lotion, 250 Ml"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Hydrating
Package Includes: 2 x Body Lotion
Volume: 250 Ml"
        />
        {/* <ProductCard
          img={nightCream}
          text="Whitening And Aging Night Cream"
          price="450/-"
          reducedPrice="199/-"
          shortDetail="Material: Cream
Whitening And Brightening
Extreme Strong Whitening And Aging Night Cream
Formulated To Heal And Rejuvenate The Skin Overnight
Targets Dark Spots, Fine Lines, And Uneven Skin Tone"
        /> */}
        {/* <ProductCard
          img={exfoliatingNCPck2}
          text="Exfoliating Gel And Night Cream, Pack Of 2"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Gel, Cream
Texture: High Pigmented
Plant Extraction Can Effectively Replenish Skin Moisture And Make Skin Tender And Smooth"
          rating="5.0"
        /> */}
        {/* <ProductCard
          img={cleanser}
          text="Foaming Facial Cleanser"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="A gentle enzyme and amino acid blend loosens makeup, oil and other impurities on the skin and in the pores"
          rating="5.0"
        /> */}
      </div>
    </>
  );
}

export default BodyLotions;
