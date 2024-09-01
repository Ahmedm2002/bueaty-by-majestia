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
  TeaTreeSerumDesc,
  RiceSkinBueatyEssenceDesc,
  teaTreeEssentialOilDesc,
} from "./serumsDescriptions";

function Serums() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Serums
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
          shortDetail={TeaTreeSerumDesc}
        />

        <ProductCard
          img={RiceSkinBueatyEssence}
          text="Rice Skin Bueaty Essence"
          price="1599/-"
          reducedPrice="1449/-"
          productCode="MZ18700837RFAAC"
          shortDetail={RiceSkinBueatyEssenceDesc}
        />

        <ProductCard
          img={teaTreeEssentialOil}
          text="Tea Tree Oil"
          price="349/-"
          reducedPrice="259/-"
          productCode="MZ88300009UNQWD"
          shortDetail={teaTreeEssentialOilDesc}
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
