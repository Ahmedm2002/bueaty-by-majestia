import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

import {
  RiceSkinBueatyEssence,
  pixiSerum,
  NiacinamideSkinpeeling,
  TeaTreeSerum,
  TeaTreeOilSerum,
  teaTreeEssentialOil,
} from "./Images/SerumsImgs";

import {
  pixiSerumDesc,
  TeaTreeOilSerumDesc,
  NiacinamideSkinpeelingDesc,
} from "./serumsDescriptions";

function Serums() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={TeaTreeOilSerum}
          text="Aiken Tea Tree Oil Serum"
          price="749/-"
          reducedPrice="539/-"
          productCode={null}
          shortDetail={TeaTreeOilSerumDesc}
        />

        <ProductCard
          img={TeaTreeSerum}
          text="Tea Tree Oil Serum"
          price="1299/-"
          reducedPrice="959/-"
          productCode={null}
          shortDetail="Tea Tree Oil Serum
            Product Details:Material: Liquid
            Product Type: Tea Tree Oil 
            Product Details: Specially Formulated To Target Acne Prone Skin, This Serum Helps Clear Blemishes, Control Oil, And Promote A Healthy, Balanced Complexion, Soothing And Calming, Regulates Oil Production, Clearer And Healthier Skin
            Color: Green
            Package Includes: 1 x Serum
            Weight: 30 Ml"
        />

        <ProductCard
          img={RiceSkinBueatyEssence}
          text="Rice Skin Bueaty Essence"
          price="1599/-"
          reducedPrice="1449/-"
          productCode="MZ18700837RFAAC"
          shortDetail="Material: Cream
            Product Type: Rice Cream, Rice Lotion And Rice Serum Deal
            Product Details: Nourish Your Skin, Moisture Replenish for Body, Soothing And Cooling, Hydration"
        />

        <ProductCard
          img={teaTreeEssentialOil}
          text="Tea Tree Oil"
          price="349/-"
          reducedPrice="259/-"
          productCode="MZ88300009UNQWD"
          shortDetail="Material: Oil
            Volume: 10 Ml
            Package Includes: 1 x Oil"
        />

        <ProductCard
          img={NiacinamideSkinpeeling}
          text="Niacinamide Skin peeling Serum"
          price="849/-"
          reducedPrice="719/-"
          productCode="MZ69120013AIBSFD"
          shortDetail={NiacinamideSkinpeelingDesc}
        />

        <ProductCard
          img={pixiSerum}
          text="RPixi Botanical Collagen & Retinol Serum"
          price="899/-"
          reducedPrice="649/-"
          productCode="1949615"
          shortDetail={pixiSerumDesc}
        />
      </div>
    </>
  );
}

export default Serums;
