import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

import { DermaSkinToner } from "./Imgaes/TonersImgs";

function Toners() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products Toners
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={DermaSkinToner}
          text="Honey And Lemon Brightening Skin Toner, 320 Ml"
          price="1299/-"
          reducedPrice="1019/-"
          productCode="MZ37000000002GWAYBYMT"
          shortDetail="Material: Liquid
            Brand: Derma Shine
            100% Cruelty Free
            100% Alcohol Free
            Opens Clogged Pores
            Gently Cleanse The Skin
            Removes Impurities And Makeup Residues From The Deepest Layer Of Skin
            Package Includes: 1 x Face Toner"
        />
      </div>
    </>
  );
}

export default Toners;
