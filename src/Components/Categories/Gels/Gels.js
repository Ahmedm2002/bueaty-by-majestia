import {
  ExfoliatingGel,
  ExfoliatorGel,
  RiceAndPeachGel,
  AloeVeraSmoothingGel,
  AloeveraGel,
} from "./Images/GelsImgs";

import {
  AloeVeraSmoothingGelDesc,
  AloeveraGelDesc,
  ExfoliatorGelDesc,
  RiceAndPeachGelDesc,
  XQMExfoliatingGelDesc,
} from "./GelsDesc";


let GelsArr = [
  {
    img: AloeVeraSmoothingGel,
    text: "Aloe Vera Soothing Gel Soothing & Relaxing Moisturizing 300g",
    price: "499/-",
    reducedPrice: "249/-",
    productCode: "MZ88300007UNQWD",
    shortDetail: AloeVeraSmoothingGelDesc,
  },
  {
    img: AloeveraGel,
    text: "Aloe Vera Gel Leaf Tube - 120ml",
    price: "499/-",
    reducedPrice: "299/-",
    productCode: "MZ103420052FSBY",
    shortDetail: AloeveraGelDesc,
  },
  {
    img: ExfoliatorGel,
    text: "Face and Body Brightening & Exfoliating Cleansing Scrub Gel",
    price: "349/-",
    reducedPrice: "299/-",
    productCode: "MZ103420045FSBY",
    shortDetail: ExfoliatorGelDesc,
  },
  {
    img: RiceAndPeachGel,
    text: "BIOAQUA Brightening & Exfoliating Rice Gel Face Scrub",
    price: "1299/-",
    reducedPrice: "999/-",
    productCode: "MZ60320026MNSRPS",
    shortDetail: RiceAndPeachGelDesc,
    rating: "5.0",
  },
  {
    img: ExfoliatingGel,
    text: "XQM Face and Body Facial Scrub Gel 100g",
    price: "699/-",
    reducedPrice: "549/-",
    productCode: "MZ19920100RAAS",
    shortDetail: XQMExfoliatingGelDesc,
    rating: "5.0",
  }
];

GelsArr = GelsArr.map((product) => ({
  ...product, 
  category : "gels"
}))

export { GelsArr }