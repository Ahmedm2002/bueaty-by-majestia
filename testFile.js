// import {
//   HyderatingBL250ML,
//   soapexFeetCream,
//   XQMFaceBodyScrub,
//   CharismaHandAndFeet,
//   WhiteningSpraySunProtector,
// } from "./src/Components/Categories/BodyLotions/Images/bodyLotions";

// import {
//   XQMFaceBodyScrubDesc,
//   HyderatingBL250MLDesc,
//   soapexFeetCreamDesc,
//   CharismaHandAndFeetDesc,
//   WhiteningSpraySunProtectorDesc,
// } from "./src/Components/Categories/BodyLotions/bodyLotionsDesc";


let bodyLotionsArr = [
  {
    // img: XQMFaceBodyScrub,
    text: "XQM Pure Active Plant Energy 30 Second Dispel Horniness Cucumber & Green Tea Natural Essence 100gram",
    price: "899/-",
    reducedPrice: "699/-",
    productCode: "MZ66600064GNCS",
    // shortDetail: XQMFaceBodyScrubDesc,
  },
  {
    // img: HyderatingBL250ML,
    text: "Hydrating Body Lotion, 250 Ml",
    price: "699/-",
    reducedPrice: "599/-",
    productCode: "MZ69120180AIBSFD",
    // shortDetail: HyderatingBL250MLDesc,
  },
  {
    // img: soapexFeetCream,
    text: "Soapex foot cream",
    price: "799/-",
    reducedPrice: "449/-",
    productCode: "MZ19920069RAAS",
    // shortDetail: soapexFeetCreamDesc,
  },
  {
    // img: CharismaHandAndFeet,
    text: "Hands and Feet Whitening Scrub with free Sunblock",
    price: "799/-",
    reducedPrice: "599/-",
    productCode: "MZ23800112SKTS",
    // shortDetail: CharismaHandAndFeetDesc,
    rating: "5.0",
  },
  {
    // img: WhiteningSpraySunProtector,
    text: "SunScreen & Skin Whitening Spray",
    price: "999/-",
    reducedPrice: "699/-",
    productCode: "MZ67200225ALIBF",
    // shortDetail: WhiteningSpraySunProtectorDesc,
    rating: "5.0",
  },
];

bodyLotionsArr = bodyLotionsArr.map((product) => ({
  ...product,
  category : "bodyLotions"
}))

// export { bodyLotionsArr }

const filteredProds = bodyLotionsArr.filter((product) => product.text.toLowerCase().includes("cream".toLowerCase()));

console.log(filteredProds);


//  pack of bc = 1 , sb = 1, fw = 0, fk = 3, gl = 0, nsc = 1, cln = 0 , pwd = 1, BL = 0 , srm = 0 , fm = 0 , tn = 0

// 1 + 1 + 3 + 1 + 1  = 7