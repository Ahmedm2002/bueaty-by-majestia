import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

import { DermaSkinToner } from "./Imgaes/TonersImgs";

import { DermaSkinTonerDesc } from "./TonersDesc";

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
          shortDetail={DermaSkinTonerDesc}
        />
      </div>
    </>
  );
}

export default Toners;
