import React from "react";
import AloeveraGel from "./Images/aloeveraGel.jpeg";
import ProductCard from "../../Product Cards/ProductCard";
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
          price="299/-"
          reducedPrice="239/-"
          productCode="MZ103420052FSBY"
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
          price="349/-"
          reducedPrice="299/-"
          productCode="MZ103420045FSBY"
          shortDetail="Material: Gel
Product Feature: Exfoliator, Dead Skin Remover"
        />
        <ProductCard
          img={RiceAndPeachGel}
          text="Rice And Peach Exfoliating Gel - Pack Of 2"
          price="1099/-"
          reducedPrice="959/-"
          productCode="MZ60320026MNSRPS"
          shortDetail="Material: Gel
Texture: Smooth
Color: White
Product Feature: Exfoliator, Whitening And Brightening"
          rating="5.0"
        />
        <ProductCard
          img={ExfoliatingGel}
          text="Exfoliating Gel"
          price="699/-"
          reducedPrice="549/-"
          productCode="MZ19920100RAAS"
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
