import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import OliveBlackMask from "./Images/OliveBlackMask.jpeg";
import PeelOffMask from "./Images/PeelOffMask.jpeg";
import FacePowder from "./Images/FacePowder.jpeg";
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
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Black
Product Feature: Dead Skin Remover, Hydrating, Peel-off"
        />

        <ProductCard
          img={PeelOffMask}
          text="Rejuvenating Peel-Off Face Mask"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Golden
Product Feature: Rejuvenating, Absorbent, Peel-off, Nourishing"
        />

        <ProductCard
          img={FacePowder}
          text="Face Powder"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Material: Powder
Package Includes: 1 x Face Powder"
        />
      </div>
    </>
  );
}

export default FaceMasks;
