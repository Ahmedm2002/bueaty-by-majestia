import {
  spf60SunScreen,
  uvSunblock,
  sunblock120gUV,
  CeraVeSunblock,
  SunblockPackOf3,
  AntheliosUvmune,
  pondsUvProtect,
  NeutrogenaSunblock,
  JessicaSunblock,
  DisaarSunscreenLotion,
  OilFreeTintedSaeedGhani,
} from "./Images/SunblocksImgs";

import {
  OilFreeTintedSaeedGhaniDesc,
  DisaarSunscreenLotionDesc,
  spf60SunScreenDesc,
  NeutrogenaSunblockDesc,
  JessicaSunblockDesc,
  uvSunblockDesc,
  sunblock120gUVDesc,
  CeraVeSunblockDesc,
  SunblockPackOf3Desc,
  pondsUvProtectDesc,
} from "./sunblocksDesc";


let sunblocksArr = [
  {
    img: OilFreeTintedSaeedGhani,
    text: "Oil-Free Tinted Sunscreen With Niacinamide Serum",
    price: "1599/-",
    reducedPrice: "1149/-",
    productCode: "MZ23800000005SKTS",
    shortDetail: OilFreeTintedSaeedGhaniDesc,
    rating: "5.0",
  },
  {
    img: DisaarSunscreenLotion,
    text: "DISAAR Sunscreen Lotion Spf-50 Advance UV Protection",
    price: "899/-",
    reducedPrice: "599/-",
    productCode: "MZ655000000112CLSCL",
    shortDetail: DisaarSunscreenLotionDesc,
  },
  {
    img: NeutrogenaSunblock,
    text: "Neutrogena Ultra Sheer Dry Touch Sunblock SPF 50+",
    price: "1899/-",
    reducedPrice: "1499/-",
    productCode: "MZ67400046CYCH",
    shortDetail: NeutrogenaSunblockDesc,
  },
  {
    img: JessicaSunblock,
    text: "Jessica Sunblock Expert Solution Sunscreen",
    price: "699/-",
    reducedPrice: "499/-",
    productCode: "MZ100320003TEBYEL",
    shortDetail: JessicaSunblockDesc,
  },
  {
    img: spf60SunScreen,
    text: "BNB Vitamin E Sun Screen (Spf 60)",
    price: "999/-",
    reducedPrice: "799/-",
    productCode: "MZ118320032CCCS",
    shortDetail: spf60SunScreenDesc,
  },
  {
    img: uvSunblock,
    text: "UV Protectant Sunblock- SPF-60",
    price: "899/-",
    reducedPrice: "649/-",
    productCode: "MZ115720111ARTS",
    shortDetail: uvSunblockDesc,
  },
  {
    img: sunblock120gUV,
    text: "Whitening & Vanishing SPF60 Sunblock",
    price: "1499/-",
    reducedPrice: "1149/-",
    productCode: "MZ66600113GNCS",
    shortDetail: sunblock120gUVDesc,
    rating: "5.0",
  },
  {
    img: CeraVeSunblock,
    text: "CeraVe Hydrating Mineral Sunscreen SPF 50",
    price: "1599/-",
    reducedPrice: "1499/-",
    productCode: "MZ23800094SKTS",
    shortDetail: CeraVeSunblockDesc,
    rating: "5.0",
  },
  {
    img: SunblockPackOf3,
    text: "Sunblock - Pack Of 3",
    price: "999/-",
    reducedPrice: "799/-",
    productCode: "MZ69120124AIBSFD",
    shortDetail: SunblockPackOf3Desc,
    rating: "5.0",
  },
  {
    img: AntheliosUvmune,
    text: "La Roche-Posay Anthelios UVMUNE 400 Invisible Fluid SPF50+ Sunscreen",
    price: "1299/-",
    reducedPrice: "899/-",
    productCode: "MZ90920013MPFR",
    shortDetail: "Material: Cream\nPackage Includes: 1 x Sunscreen",
    rating: "5.0",
  },
  {
    img: pondsUvProtect,
    text: "Pond's UV Protectant Sunblock",
    price: "799/-",
    reducedPrice: "499/-",
    productCode: "MZ84900020NNTS",
    shortDetail: pondsUvProtectDesc,
    rating: "5.0",
  },
];

sunblocksArr = sunblocksArr.map((product) => ({
  ...product, 
  category : "sunblock"
}))


export { sunblocksArr }