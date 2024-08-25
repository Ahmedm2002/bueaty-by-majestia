import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import spf60SunScreen from "./Images/spf60SunScreen.jpeg";
import uvSunblock from "./Images/uvSunblock.jpeg";
import sunblock120gUV from "./Images/sunblock120gUV.jpeg";
function Sunblock() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Sunblock
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={spf60SunScreen}
          text="SPF 60 Sun Screen, 120 Ml"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Product Feature: UV Protectant, Protects From Sunburn
sun screen with spf-60 & vitamin E highly effective and immediate UVA/UVV protection against sun burn "
        />
        <ProductCard
          img={uvSunblock}
          text=" UV Protectant Sunblock- SPF-60"
          price="450/-"
          reducedPrice="199/-"
          shortDetail="Material: Cream
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Color: White
SPF-60
Product Feature: UV Protectant"
        />
        <ProductCard
          img={sunblock120gUV}
          text="UV Protectant Sunblock, 120 G"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Cream
Product Feature: UV Protectant
Package Includes: 1 x Sunblock
Weight: 120 Gram"
          rating="5.0"
        />
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

export default Sunblock;
