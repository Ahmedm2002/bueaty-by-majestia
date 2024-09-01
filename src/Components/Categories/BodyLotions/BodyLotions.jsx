import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import {
  HyderatingBL250ML,
  soapexFeetCream,
  XQMFaceBodyScrub,
  CharismaHandAndFeet,
  WhiteningSpraySunProtector,
} from "./Images/bodyLotions";

import {
  XQMFaceBodyScrubDesc,
  HyderatingBL250MLDesc,
  soapexFeetCreamDesc,
  CharismaHandAndFeetDesc,
} from "./bodyLotionsDesc";
function BodyLotions() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Body Lotions
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={XQMFaceBodyScrub}
          text="Face & Body Plant Energy Scrub"
          price="899/-"
          reducedPrice="659/-"
          productCode="MZ66600064GNCS"
          shortDetail={XQMFaceBodyScrubDesc}
        />

        <ProductCard
          img={HyderatingBL250ML}
          text="Hydrating Body Lotion, 250 Ml"
          price="699/-"
          reducedPrice="539/-"
          shortDetail={HyderatingBL250MLDesc}
          productCode="MZ69120180AIBSFD"
        />

        <ProductCard
          img={soapexFeetCream}
          text="Soapex Heel Cream"
          price="499/-"
          reducedPrice="389/-"
          productCode="MZ19920069RAAS"
          shortDetail={soapexFeetCreamDesc}
        />
        <ProductCard
          img={CharismaHandAndFeet}
          text="Dead Skin Remover Foot & Hand Scrub, Free Sunblock"
          price="799/-"
          reducedPrice="589/-"
          productCode={null}
          shortDetail={CharismaHandAndFeetDesc}
          rating="5.0"
        />
        <ProductCard
          img={WhiteningSpraySunProtector}
          text="Whitening Spray & Sun Protector"
          price="999/-"
          reducedPrice="719/-"
          productCode="MZ67200225ALIBF"
          shortDetail="UV Protectant Sunblock
            Product Details:Material: Cream
            Product Type: Whitening Spray
            Product Details: Helps Protect The Skin Against Sun Broad Spectrum Of Harmful UV Radiations, No White Sheen, For All Skin Types, Paraben Free
            Color: White
            Package Includes: 1 x Skin Spray
            Weight: 150 Ml"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default BodyLotions;
