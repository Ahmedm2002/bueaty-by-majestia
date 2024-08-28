import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import CleanserAndMosturizingLotion from "./Images/CleanserAndMosturizingLotion.jpeg";
import GoatMilkSaeedGhani from "./Images/GoatMilkSaeedGhani.jpeg";
import VeetPeelOffNoseStrip from "./Images/VeetPeelOffNoseStrip.jpeg";
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
          price="2999/-"
          reducedPrice="2699/-"
          shortDetail="Material: Cream
Texture: High Pigmented
Moisturizing Lotion Is A Lightweight, Oil-Free Moisturizer With Three Essential Ceramides That Lock In The Skin's Moisture
Hydrating Cleanser With Hyaluronic Acid For Normal To Dry Skin"
          productCode="MZ23800117SKTS"
          rating="5.0"
        />
        <ProductCard
          img={GoatMilkSaeedGhani}
          text="Goat Milk Face Cleanser for a Smoother and Radiant Skin"
          price="1199/-"
          reducedPrice="959/-"
          productCode="MZ23800000007SKTS"
          shortDetail="Material: Cream
Weight: 180Grams
Package Includes: 1 x Whitening Cream
"
        />
        <ProductCard
          img={VeetPeelOffNoseStrip}
          text="Peel-Off Nose Strips"
          price="1099/-"
          reducedPrice="839/-"
          productCode="MZ83100018NANTR"
          shortDetail="Nose Strips
Product Details:Material: Strips
Product Type: Peel Off Nose Strips
Product Details: Deep Cleansing, Suck Out Black Heads, Erase Dark Spots
Package Includes: 1 x Peel Off Nose Strips
6 Nose Strips In Each Pack"
        />
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
