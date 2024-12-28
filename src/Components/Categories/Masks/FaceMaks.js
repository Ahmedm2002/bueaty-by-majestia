import {
  OliveBlackMask,
  PeelOffMask,
  SadoerGoldMask,
  StrawberryMaskStick,
  DrRaheelGoldenCollagen,
  VitaminCAichunBueaty,
} from "./Images/MasksImgs";

import {
  VitaminCAichunBueatyDesc,
  OliveBlackMaskDesc,
  DrRaheelGoldenCollagenDesc,
  StrawberryMaskStickDesc,
  SadoerGoldMaskDesc,
  PeelOffMaskDesc,
} from "./FaceMasksDesc";

let FaceMasksArr = [
  {
    img: VitaminCAichunBueaty,
    text: "Aichun Beauty Vitamin C Honey Peel Off Mask 120ml",
    price: "999/-",
    reducedPrice: "719/-",
    productCode: "MZ65500101CLSCL",
    shortDetail: VitaminCAichunBueatyDesc,
  },
  {
    img: OliveBlackMask,
    text: "Coswin Olive Facial Black Mask",
    price: "599/-",
    reducedPrice: "399/-",
    productCode: "MZ19920102RAAS",
    shortDetail: OliveBlackMaskDesc,
  },
  {
    img: DrRaheelGoldenCollagen,
    text: "DR.RASHEL Facial Gold Collagen Peel Off Anti-Wrinkle mask Deep Clean Acne Gold face Mask 120ml",
    price: "1099/-",
    reducedPrice: "799/-",
    productCode: "MZ55700000027BYBR",
    shortDetail: DrRaheelGoldenCollagenDesc,
  },
  {
    img: StrawberryMaskStick,
    text: "Moisturizing Strawberry Stick Mask",
    price: "899/-",
    reducedPrice: "599/-",
    productCode: "MZ90000000031MJCN",
    shortDetail: StrawberryMaskStickDesc,
  },
  {
    img: SadoerGoldMask,
    text: "SADOER Retinol Snake Venom Peptide Gold Mask Deep Cleansing Gold Collagen Peel Off Face Mask",
    price: "899/-",
    reducedPrice: "599/-",
    productCode: "MZ19920011RAAS",
    shortDetail: SadoerGoldMaskDesc,
  },
  {
    img: PeelOffMask,
    text: "Rejuvenating Peel-Off Face Mask",
    price: "499/-",
    reducedPrice: "349/-",
    productCode: "MZ19920101RAAS",
    shortDetail: PeelOffMaskDesc,
  }
];

FaceMasksArr = FaceMasksArr.map((product) => ({
  ...product, 
  category : "facemasks"
}))


export { FaceMasksArr }