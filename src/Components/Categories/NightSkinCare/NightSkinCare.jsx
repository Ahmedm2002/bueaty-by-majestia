import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import {
  nightCream,
  exfoliatingNCPck2,
  vitaminCnightCream,
  retinolSaeedGhaniAntiAging,
} from "./Images/NightSkinCareImgs";

import {
  retinolSaeedGhaniAntiAgingDesc,
  vitaminCnightCreamDesc,
  nightCreamDesc,
  exfoliatingNCPck2Desc,
} from "./NightSkinCareDesc";

function NightSkinCare() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt- lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={retinolSaeedGhaniAntiAging}
          text="Anti Aging Retinol Night Cream"
          price="1599/-"
          reducedPrice="1259/-"
          productCode="MZ23800000006SKTS"
          shortDetail={retinolSaeedGhaniAntiAgingDesc}
          rating="5.0"
        />

        <ProductCard
          img={vitaminCnightCream}
          text="Vitamin C Night Cream, 50 Grams"
          price="1299/-"
          reducedPrice="1099/-"
          productCode="MZ117420031FZCS"
          shortDetail={vitaminCnightCreamDesc}
        />

        <ProductCard
          img={nightCream}
          text="Whitening And Aging Night Cream"
          price="699/-"
          reducedPrice="459/-"
          productCode="MZ23800144SKTS"
          shortDetail={nightCreamDesc}
        />
        <ProductCard
          img={exfoliatingNCPck2}
          text="Exfoliating Gel And Night Cream, Pack Of 2"
          price="1699/-"
          reducedPrice="1399/-"
          productCode="MZ23800118SKTS"
          shortDetail={exfoliatingNCPck2Desc}
          rating="5.0"
        />
      </div>
    </>
  );
}

export default NightSkinCare;
