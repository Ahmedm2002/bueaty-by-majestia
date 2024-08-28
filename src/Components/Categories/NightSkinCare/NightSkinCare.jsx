import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import nightCream from "./Images/nightCream.jpeg";
import exfoliatingNCPck2 from "./Images/exfoliatingNCPck2.jpeg";
import vitaminCnightCream from "./Images/vitaminCnightCream.jpeg";
import retinolSaeedGhaniAntiAging from "./Images/retinolSaeedGhaniAntiAging.jpeg";

function NightSkinCare() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={retinolSaeedGhaniAntiAging}
          text="Anti Aging Retinol Night Cream"
          price="1599/-"
          reducedPrice="1259/-"
          productCode="MZ23800000006SKTS"
          shortDetail="Material: Cream
          Niacinamide (Vitamin B3)
Weight: 40g
Package Includes: 1 x Night Cream"
          rating="5.0"
        />

        <ProductCard
          img={vitaminCnightCream}
          text="Vitamin C Night Cream, 50 Grams"
          price="1299/-"
          reducedPrice="1099/-"
          productCode="MZ117420031FZCS"
          shortDetail="Material: Cream
Texture: Smooth
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Color: Orange
Product Feature: Whitening And Brightening"
        />

        <ProductCard
          img={nightCream}
          text="Whitening And Aging Night Cream"
          price="699/-"
          reducedPrice="459/-"
          productCode="MZ23800144SKTS"
          shortDetail="Material: Cream
Whitening And Brightening
Extreme Strong Whitening And Aging Night Cream
Formulated To Heal And Rejuvenate The Skin Overnight
Targets Dark Spots, Fine Lines, And Uneven Skin Tone"
        />
        <ProductCard
          img={exfoliatingNCPck2}
          text="Exfoliating Gel And Night Cream, Pack Of 2"
          price="1699/-"
          reducedPrice="1399/-"
          productCode="MZ23800118SKTS"
          shortDetail="Material: Gel, Cream
Texture: High Pigmented
Plant Extraction Can Effectively Replenish Skin Moisture And Make Skin Tender And Smooth"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default NightSkinCare;
