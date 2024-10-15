import {
  NeemLeavesPowder,
  RicePowderandMultaniMitti,
  RicePwdrCharcoal,
  RoseNeemPowder,
  RicePowderFacePack,
  multaniMittiPwdr,
  OrangePeelsPwdr,
  neemLeavesPwdr,
  roseFlowerPwdr,
  FacePowder,
  BeetrootPowder,
  MuddMaskGolendGirl,
} from "./Images/PowdersImgs";

import { MuddMaskGolendGirlDesc } from "./PowdersDesc";

let powdersArr = [
  {
    img: MuddMaskGolendGirl,
    text: "Mud Mask, 75 G",
    price: "659/-",
    reducedPrice: "469/-",
    productCode: "MZ88700004ARSML",
    shortDetail: MuddMaskGolendGirlDesc,
  },
  {
    img: BeetrootPowder,
    text: "Beetroot Powder",
    price: "1099/-",
    reducedPrice: "819/-",
    productCode: "MZ88200003INFST",
    shortDetail: "Material: Powder\nProduct Type: Beetroot Powder\nProduct Details: Beetroot Powder Antioxidants Promote A Youthful Glow By Combating Free Radicals And Reducing Oxidative Stress.\nPackage Includes: 1 x Powder\nWeight: 140g",
  },
  {
    img: roseFlowerPwdr,
    text: "Rose Flower Natural Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: "Natural Brightening\nMaterial: Powder\nPackage Includes: 1 x Skin Moisturizing Face Powder",
  },
  {
    img: neemLeavesPwdr,
    text: "Neem Leaves Natural Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: "Natural Brightening\nMaterial: Powder\nPackage Includes: 1 x Skin Moisturizing Face Powder",
  },
  {
    img: multaniMittiPwdr,
    text: "Multani Matti Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: "Natural Brightening\nMaterial: Powder\nPackage Includes: 1 x Skin Moisturizing Face Powder",
  },
  {
    img: OrangePeelsPwdr,
    text: "Orange Peel Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220004COZMO",
    shortDetail: "Material: Powder\nPackage Includes: 1 x Orange Peel Face Powder",
  },
  {
    img: FacePowder,
    text: "Face Powder",
    price: "1999/-",
    reducedPrice: "1499/-",
    productCode: "MZ23800077SKTS",
    shortDetail: "Material: Powder\nPackage Includes: 1 x Face Powder",
  },
  {
    img: RicePowderFacePack,
    text: "Rice Powder Natural Brightening Rice Face Pack",
    price: "549/-",
    reducedPrice: "429/-",
    productCode: "MZ109220005COZMO",
    shortDetail: "Material: Powder\nPackage Includes: 1 x Skin Moisturizing Face Powder",
  },
  {
    img: RoseNeemPowder,
    text: "Rose Flower Powder and Neem Leaves Powder",
    price: "549/-",
    reducedPrice: "429/-",
    productCode: "MZ109220011COZMO",
    shortDetail: "Material: Powder\nPackage Includes: 2 x Skin Moisturizing Face Powder",
  },
  {
    img: RicePwdrCharcoal,
    text: "Rice Powder and Activated Charcoal Powder",
    price: "699/-",
    reducedPrice: "489/-",
    shortDetail: "Material: Powder\nPackage Includes: 2 x Skin Moisturizing Face Powder",
    rating: "5.0",
    productCode: "MZ109220016COZMO",
  },
  {
    img: RicePowderandMultaniMitti,
    text: "Rice Powder and Multani Mitti, Pack Of 2",
    price: "649/-",
    reducedPrice: "489/-",
    shortDetail: "Material: Powder\nPackage Includes: 2 x Skin Moisturizing Face Powder",
    productCode: "MZ109220017COZMO",
  },
  {
    img: NeemLeavesPowder,
    text: "Neem Leaves Powder and Multani Mitti",
    price: "549/-",
    reducedPrice: "429/-",
    shortDetail: "Material: Powder\nPackage Includes: 2 x Skin Moisturizing Face Powder",
    productCode: "MZ109220021COZMO",
  },
];

powdersArr = powdersArr.map((product) => ({
  ...product, 
  category : "powders"
}))

export { powdersArr }