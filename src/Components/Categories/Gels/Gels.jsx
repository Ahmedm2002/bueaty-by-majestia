import React from "react";
import AloeveraGel from "./Images/aloeveraGel.jpeg";
import ProductCard from "../../Featured Products/ProductCard";
import ExfoliatorGel from "./Images/ExfoliatorGel.jpeg";
import RiceAndPeachGel from "./Images/RiceAndPeachGel.jpeg";
import ExfoliatingGel from "./Images/ExfoliatingGel.jpeg";
function Gels() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Gels
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={AloeveraGel}
          text="Aloe Vera Gel Leaf Tube - 120ml"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Soothing Hydration
Instant Cooling Relief
Deeply Moisturizing
Natural Aloe Vera Extract
Non-Greasy Formula
Refreshes And Revitalizes"
        />
        <ProductCard
          img={ExfoliatorGel}
          text="Exfoliator Face & Body Scrubbing Gel"
          price="450/-"
          reducedPrice="199/-"
          shortDetail="Material: Gel
Product Feature: Exfoliator, Dead Skin Remover"
        />
        <ProductCard
          img={RiceAndPeachGel}
          text="Rice And Peach Exfoliating Gel - Pack Of 2"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Gel
Texture: Smooth
Color: White
Product Feature: Exfoliator, Whitening And Brightening"
          rating="5.0"
        />
        <ProductCard
          img={ExfoliatingGel}
          text="Exfoliating Gel"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Gel
Texture: Smooth
Color: Green
Product Feature: Exfoliator, Whitening And Brightening, Acne Scar Removal"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default Gels;
