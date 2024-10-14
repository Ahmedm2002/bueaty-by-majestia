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


const CleansersArr = [
  {
    img: CleanserAndMosturizingLotion,
    text: "Hydrating Cleanser And Moisturizing Lotion, Pack Of 2",
    price: "2999/-",
    reducedPrice: "2699/-",
    shortDetail: CleanserAndMosturizingLotionDesc,
    productCode: "MZ23800117SKTS",
    rating: "5.0",
  },
  {
    img: GoatMilkSaeedGhani,
    text: "Goat Milk Face Cleanser for a Smoother and Radiant Skin",
    price: "1199/-",
    reducedPrice: "959/-",
    productCode: "MZ23800000007SKTS",
    shortDetail: GoatMilkSaeedGhaniDesc,
  },
  {
    img: VeetPeelOffNoseStrip,
    text: "Peel-Off Nose Strips",
    price: "1099/-",
    reducedPrice: "839/-",
    productCode: "MZ83100018NANTR",
    shortDetail: VeetPeelOffNoseStripDesc,
  },
  // The commented product can be added back when needed
  // {
  //   img: exfoliatingNCPck2,
  //   text: "Exfoliating Gel And Night Cream, Pack Of 2",
  //   price: "999/-",
  //   reducedPrice: "499/-",
  //   shortDetail: "Material: Gel, Cream. Texture: High Pigmented. Plant Extraction Can Effectively Replenish Skin Moisture And Make Skin Tender And Smooth",
  //   rating: "5.0"
  // }
];

export { CleansersArr }