import {
  RiceFaceWash,
  DeepFreshFaceWash,
  DrRashelFaceWash,
  AcneControlTea,
  SQMBlackHeadClearing,
  GalipWashScrubMask,
  GoldernPearlTripleProtection,
} from "./Images/FaceWashImgs";

import {
  DeepFreshFaceWashDesc,
  GalipWashScrubMaskDesc,
  RiceFaceWashDesc,
  GoldernPearlTripleProtectionDesc,
  DrRashelFaceWashDesc,
  AcneControlTeaDesc,
  SQMBlackHeadClearingDesc,
} from "./FaceWashsDesc";


let FaceWashArr = [
  {
    img: DeepFreshFaceWash,
    text: "Deep Fresh Brightening Face Wash",
    price: "699/-",
    reducedPrice: "489/-",
    productCode: "MZ57300131UDEES",
    shortDetail: DeepFreshFaceWashDesc,
  },
  {
    img: GalipWashScrubMask,
    text: "3 in 1 Face & Body Scrubbing Mask, 170g",
    price: "799/-",
    reducedPrice: "519/-",
    productCode: "MZ25200000011GLUS",
    shortDetail: GalipWashScrubMaskDesc,
  },
  {
    img: RiceFaceWash,
    text: "Rice Face Wash, 120 Ml",
    price: "1099/-",
    reducedPrice: "849/-",
    productCode: "MZ69120300AIBSFD",
    shortDetail: RiceFaceWashDesc,
  },
  {
    img: GoldernPearlTripleProtection,
    text: "Sunblock Tripple Protection - 200g",
    price: "1499/-",
    reducedPrice: "1169/-",
    productCode: "MZ37000012GWAYBYMT",
    shortDetail: GoldernPearlTripleProtectionDesc,
  },
  {
    img: DrRashelFaceWash,
    text: "Dr.Rashel's Purifying Face Wash",
    price: "999/-",
    reducedPrice: "699/-",
    productCode: null,
    shortDetail: DrRashelFaceWashDesc,
  },
  {
    img: AcneControlTea,
    text: "Acne Control Tea Tree Face Wash",
    price: "1299/-",
    reducedPrice: "939/-",
    productCode: "MZ100320007TEBYEL",
    shortDetail: AcneControlTeaDesc,
    rating: "5.0",
  },
  {
    img: SQMBlackHeadClearing,
    text: "Blackhead Clearing Oil-Free Salicylic Acid Aloe Scrub - 170g",
    price: "999/-",
    reducedPrice: "659/-",
    productCode: "MZ485000036ECKSP",
    shortDetail: SQMBlackHeadClearingDesc,
    rating: "5.0",
  }
];


FaceWashArr = FaceWashArr.map((product) => ({
  ...product, 
  category : "faceWash"
}))

export { FaceWashArr }