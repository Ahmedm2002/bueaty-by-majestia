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
} from "./sunblocksDesc";


let sunblocksArr = [
  {
    img: OilFreeTintedSaeedGhani,
    text: "Oil Free Tinted Sunscreen With Niacinamide Serum",
    price: "1599/-",
    reducedPrice: "1259/-",
    productCode: "MZ23800000005SKTS",
    shortDetail: OilFreeTintedSaeedGhaniDesc,
    rating: "5.0",
  },
  {
    img: DisaarSunscreenLotion,
    text: "UV Protectant Sunblock Lotion",
    price: "899/-",
    reducedPrice: "599/-",
    productCode: "MZ655000000112CLSCL",
    shortDetail: DisaarSunscreenLotionDesc,
  },
  {
    img: NeutrogenaSunblock,
    text: "Neutrogena Sunblock",
    price: "N/A",
    reducedPrice: "N/A",
    productCode: "MZ67400046CYCH",
    shortDetail: "Material: Cream\nPackage Includes: 1 x Sunblock",
  },
  {
    img: JessicaSunblock,
    text: "Sunscreen, SPF- 60",
    price: "699/-",
    reducedPrice: "479/-",
    productCode: "MZ100320003TEBYEL",
    shortDetail: "Color: Yellow\nPackage Includes: 1 x Sunscreen",
  },
  {
    img: spf60SunScreen,
    text: "SPF 60 Sun Screen, 120 Ml",
    price: "799/-",
    reducedPrice: "599/-",
    productCode: "MZ118320032CCCS",
    shortDetail: spf60SunScreenDesc,
  },
  {
    img: uvSunblock,
    text: "UV Protectant Sunblock- SPF-60",
    price: "899/-",
    reducedPrice: "689/-",
    productCode: "MZ115720111ARTS",
    shortDetail: "Material: Cream\nSkin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone\nColor: White\nSPF-60\nProduct Feature: UV Protectant",
  },
  {
    img: sunblock120gUV,
    text: "UV Protectant Sunblock, 120 G",
    price: "1499/-",
    reducedPrice: "1199/-",
    productCode: "MZ66600113GNCS",
    shortDetail: "Material: Cream\nProduct Feature: UV Protectant\nPackage Includes: 1 x Sunblock\nWeight: 120 Gram",
    rating: "5.0",
  },
  {
    img: CeraVeSunblock,
    text: "Sunscreen Face Lotion SPF 50",
    price: "1199/-",
    reducedPrice: "969/-",
    productCode: "MZ23800094SKTS",
    shortDetail: "Material: Liquid\nHydrating Sunscreen Lotion Is Allergy-Tested, Paraben-Free, Fragrance-Free\nOil-Free, Oxybenzone-Free, Octanoate-Free, Non-Comedogenic, And Suitable For Sensitive Skin\nProvide Long-Lasting Hydration, As Well As Niacinamide To Help Calm Skin",
    rating: "5.0",
  },
  {
    img: SunblockPackOf3,
    text: "Sunblock - Pack Of 3",
    price: "799/-",
    reducedPrice: "599/-",
    productCode: "MZ69120124AIBSFD",
    shortDetail: "Material: Cream\nWater Resistant\nAnti-dark Spots\nAnti Darkening\nFor All Skin Types\nMultipurpose Product For Protecting Skin From UV-A and B Rays",
    rating: "5.0",
  },
  {
    img: AntheliosUvmune,
    text: "Anthelios Uvmune 400 Invisible Fluid Sunscreen",
    price: "999/-",
    reducedPrice: "749/-",
    productCode: "MZ90920013MPFR",
    shortDetail: "Material: Cream\nPackage Includes: 1 x Sunscreen",
    rating: "5.0",
  },
  {
    img: pondsUvProtect,
    text: "Pond's UV Protectant Sunblock",
    price: "699/-",
    reducedPrice: "419/-",
    productCode: "MZ84900020NNTS",
    shortDetail: "Material: Cream\nTexture: Smooth\nSkin Types: Normal Skin\nProduct Feature: UV Protectant\nPackage Includes: 1 x Sunblock",
    rating: "5.0",
  },
];

sunblocksArr = sunblocksArr.map((product) => ({
  ...product, 
  category : "sunblock"
}))


export { sunblocksArr }