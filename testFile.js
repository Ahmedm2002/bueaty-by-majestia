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
  WhiteningSpraySunProtectorDesc,
} from "./bodyLotionsDesc";


const bodyLotionsArr = [
  {
    img: XQMFaceBodyScrub,
    text: "Face & Body Plant Energy Scrub",
    price: "899/-",
    reducedPrice: "659/-",
    productCode: "MZ66600064GNCS",
    shortDetail: XQMFaceBodyScrubDesc,
  },
  {
    img: HyderatingBL250ML,
    text: "Hydrating Body Lotion, 250 Ml",
    price: "699/-",
    reducedPrice: "539/-",
    productCode: "MZ69120180AIBSFD",
    shortDetail: HyderatingBL250MLDesc,
  },
  {
    img: soapexFeetCream,
    text: "Soapex Heel Cream",
    price: "499/-",
    reducedPrice: "389/-",
    productCode: "MZ19920069RAAS",
    shortDetail: soapexFeetCreamDesc,
  },
  {
    img: CharismaHandAndFeet,
    text: "Dead Skin Remover Foot & Hand Scrub, Free Sunblock",
    price: "799/-",
    reducedPrice: "589/-",
    productCode: null,
    shortDetail: CharismaHandAndFeetDesc,
    rating: "5.0",
  },
  {
    img: WhiteningSpraySunProtector,
    text: "Whitening Spray & Sun Protector",
    price: "999/-",
    reducedPrice: "719/-",
    productCode: "MZ67200225ALIBF",
    shortDetail: WhiteningSpraySunProtectorDesc,
    rating: "5.0",
  },
];

// bodyLotionsArr = bodyLotionsArr.map((product) => ({...product, category: "bodyLotions"}))

bodyLotionsArr = bodyLotionsArr.map((product) => ({
  ...product,
  category: "bodyLotions",
}));


export { bodyLotionsArr }