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
    text: "DEEP FRESH BRIGHTENING FACE WASH",
    price: "899/-",
    reducedPrice: "549/-",
    productCode: "  MZ57300131UDEES",
    shortDetail: DeepFreshFaceWashDesc,
  },
  {
    img: GalipWashScrubMask,
    text: "3 in 1 Face & Body Scrubbing Mask, 170g",
    price: "999/-",
    reducedPrice: "579/-",
    productCode: "MZ25200000011GLUS",
    shortDetail: GalipWashScrubMaskDesc,
  },
  {
    img: RiceFaceWash,
    text: "BNB Rice Extract Face Wash",
    price: "1099/-",
    reducedPrice: "799/-",
    productCode: "MZ69120300AIBSFD",
    shortDetail: RiceFaceWashDesc,
  },
  {
    img: GoldernPearlTripleProtection,
    text: "Sunblock Tripple Protection - 200g",
    price: "1299/-",
    reducedPrice: "999/-",
    productCode: "MZ37000012GWAYBYMT",
    shortDetail: GoldernPearlTripleProtectionDesc,
  },
  {
    img: DrRashelFaceWash,
    text: "Dr.Rashel Black Charcoal Purifying Face Wash - 100g",
    price: "1199/-",
    reducedPrice: "899/-",
    productCode: "MZ67400000035CYCH",
    shortDetail: DrRashelFaceWashDesc,
  },
  {
    img: AcneControlTea,
    text: "BNB Acne Tea Tree Face Wash",
    price: "1299/-",
    reducedPrice: "949/-",
    productCode: "MZ100320007TEBYEL",
    shortDetail: AcneControlTeaDesc,
    rating: "5.0",
  },
  {
    img: SQMBlackHeadClearing,
    text: "XQM Blackhead clearing Aloe Scrub",
    price: "999/-",
    reducedPrice: "599/-",
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