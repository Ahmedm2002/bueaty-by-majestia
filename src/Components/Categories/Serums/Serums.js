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

let serumsArr = [
  {
    img: TeaTreeOilSerum,
    text: "Aiken 100% Pure Tea Tree Oil (10ml)",
    price: "749/-",
    reducedPrice: "549/-",
    productCode: null,
    shortDetail: TeaTreeOilSerumDesc,
  },
  {
    img: TeaTreeSerum,
    text: "Face Serum - Tea Tree (30ml)",
    price: "1299/-",
    reducedPrice: "959/-",
    productCode: "MZ35500111GLABM",
    shortDetail: TeaTreeSerumDesc,
  },
  {
    img: RiceSkinBueatyEssence,
    text: "Rice Skin Bueaty Essence",
    price: "1599/-",  
    reducedPrice: "1449/-",
    productCode: "MZ18700837RFAAC",
    shortDetail: RiceSkinBueatyEssenceDesc,
  },
  {
    img: teaTreeEssentialOil,
    text: "Tea Tree Oil - Moisturizing Anti-Acne Shrinking Pores Brighten Skin Tone Face Care",
    price: "499/-",
    reducedPrice: "349/-",
    productCode: "MZ88300009UNQWD",
    shortDetail: teaTreeEssentialOilDesc,
  },
  {
    img: NiacinamideSkinpeeling,
    text: "The Ordinary AHA 30% BHA 2% Peeling Solution 30 ML",
    price: "1099/-",
    reducedPrice: "999/-",
    productCode: "MZ69120013AIBSFD",
    shortDetail: NiacinamideSkinpeelingDesc,
  },
  {
    img: pixiSerum,
    text: "Pixi Botanical Collagen & Retinol Serum - 30 ML",
    price: "1299/-",
    reducedPrice: "899/-",
    productCode: "1949615",
    shortDetail: pixiSerumDesc,
  },
];

serumsArr = serumsArr.map((product) => ({
  ...product, 
  category : "serums"
}))

export { serumsArr }