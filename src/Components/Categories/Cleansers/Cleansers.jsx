import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import CleanserAndMosturizingLotion from "./Images/CleanserAndMosturizingLotion.jpeg";
function Cleansers() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Cleansers
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={CleanserAndMosturizingLotion}
          text="Hydrating Cleanser And Moisturizing Lotion, Pack Of 2"
          price="999/-"
          reducedPrice="499/-"
          shortDetail=":Material: Cream
Texture: High Pigmented
Moisturizing Lotion Is A Lightweight, Oil-Free Moisturizer With Three Essential Ceramides That Lock In The Skin's Moisture
Hydrating Cleanser With Hyaluronic Acid For Normal To Dry Skin"
          rating="5.0"
        />
        {/* <ProductCard
            img={vitaminCnightCream}
            text="Vitamin C Night Cream, 50 Grams"
            price="2999/-"
            reducedPrice="1499/-"
            shortDetail=":Material: Cream
Texture: Smooth
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Color: Orange
Product Feature: Whitening And Brightening"
          /> */}
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
      </div>
    </>
  );
}

export default Cleansers;
