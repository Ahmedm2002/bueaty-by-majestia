import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import OliveBlackMask from "./Images/OliveBlackMask.jpeg";
import PeelOffMask from "./Images/PeelOffMask.jpeg";
function FaceMasks() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Masks
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={OliveBlackMask}
          text="Dead Skin Remover Peel-Off Face Mask"
          price="599/-"
          reducedPrice="399/-"
          productCode="MZ19920102RAAS"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Black
Product Feature: Dead Skin Remover, Hydrating, Peel-off"
        />

        <ProductCard
          img={PeelOffMask}
          text="Rejuvenating Peel-Off Face Mask"
          price="499/-"
          reducedPrice="359/-"
          productCode="MZ19920101RAAS"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Golden
Product Feature: Rejuvenating, Absorbent, Peel-off, Nourishing"
        />
      </div>
    </>
  );
}

export default FaceMasks;
