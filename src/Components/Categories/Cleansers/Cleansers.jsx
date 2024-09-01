import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

import {
  CleanserAndMosturizingLotion,
  GoatMilkSaeedGhani,
  VeetPeelOffNoseStrip,
} from "./Images/cleansersImgs";

import {
  CleanserAndMosturizingLotionDesc,
  GoatMilkSaeedGhaniDesc,
  VeetPeelOffNoseStripDesc,
} from "./CleansersDesc";

function Cleansers() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Cleansers
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={CleanserAndMosturizingLotion}
          text="Hydrating Cleanser And Moisturizing Lotion, Pack Of 2"
          price="2999/-"
          reducedPrice="2699/-"
          shortDetail={CleanserAndMosturizingLotionDesc}
          productCode="MZ23800117SKTS"
          rating="5.0"
        />
        <ProductCard
          img={GoatMilkSaeedGhani}
          text="Goat Milk Face Cleanser for a Smoother and Radiant Skin"
          price="1199/-"
          reducedPrice="959/-"
          productCode="MZ23800000007SKTS"
          shortDetail={GoatMilkSaeedGhaniDesc}
        />
        <ProductCard
          img={VeetPeelOffNoseStrip}
          text="Peel-Off Nose Strips"
          price="1099/-"
          reducedPrice="839/-"
          productCode="MZ83100018NANTR"
          shortDetail={VeetPeelOffNoseStripDesc}
        />
        {/* <ProductCard
            img={exfoliatingNCPck2}
            text="Exfoliating Gel And Night Cream, Pack Of 2"
            price="999/-"
            reducedPrice="499/-"
            shortDetail="Material: Gel, Cream
              Texture: High Pigmented
              Plant Extraction Can Effectively Replenish Skin Moisture And Make Skin Tender And Smooth"
            rating="5.0"
          /> */}
      </div>
    </>
  );
}

export default Cleansers;
