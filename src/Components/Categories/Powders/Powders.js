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

import { MuddMaskGolendGirlDesc, powderSameDesc } from "./PowdersDesc";

let powdersArr = [
  {
    img: MuddMaskGolendGirl,
    text: "Soft Touch Mudd Mask Cream 75g",
    price: "659/-",
    reducedPrice: "499/-",
    productCode: "MZ88700004ARSML",
    shortDetail: MuddMaskGolendGirlDesc,
  },
  {
    img: BeetrootPowder,
    text: "Red Beetroot Powder, Heart Health, Blood Pressure, Circulation, Skin & Lip Care",
    price: "1099/-",
    reducedPrice: "799/-",
    productCode: "MZ88200003INFST",
    shortDetail: powderSameDesc,
  },
  {
    img: roseFlowerPwdr,
    text: "Organic Rose Flowers Powder - Dried Rose Petals Powder - Irani Dried Rose Powder - 50g",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: powderSameDesc,
  },
  {
    img: neemLeavesPwdr,
    text: "Neem Leaves Natural Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: powderSameDesc,
  },
  {
    img: multaniMittiPwdr,
    text: "Multani Matti Powder",
    price: "399/-",
    reducedPrice: "229/-",
    productCode: "MZ109220005COZMO",
    shortDetail: powderSameDesc,
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
    reducedPrice: "1399/-",
    productCode: "MZ23800077SKTS",
    shortDetail: "Material: Powder\nPackage Includes: 1 x Face Powder",
  },
  {
    img: RicePowderFacePack,
    text: "Rice Powder Natural Brightening Rice Face Pack",
    price: "549/-",
    reducedPrice: "349/-",
    productCode: "MZ109220005COZMO",
    shortDetail: powderSameDesc,
  },
  {
    img: RoseNeemPowder,
    text: "Rose Flower Powder and Neem Leaves Powder",
    price: "549/-",
    reducedPrice: "349/-",
    productCode: "MZ109220011COZMO",
    shortDetail: powderSameDesc,
  },
  {
    img: RicePwdrCharcoal,
    text: "Rice Powder and Activated Charcoal Powder",
    price: "699/-",
    reducedPrice: "399/-",
    shortDetail: powderSameDesc,
    rating: "5.0",
    productCode: "MZ109220016COZMO",
  },
  {
    img: RicePowderandMultaniMitti,
    text: "Rice Powder and Multani Mitti, Pack Of 2",
    price: "649/-",
    reducedPrice: "399/-",
    shortDetail: powderSameDesc,
    productCode: "MZ109220017COZMO",
  },
  {
    img: NeemLeavesPowder,
    text: "Neem Leaves Powder and Multani Mitti",
    price: "549/-",
    reducedPrice: "399/-",
    shortDetail: powderSameDesc,
    productCode: "MZ109220021COZMO",
  },
];

powdersArr = powdersArr.map((product) => ({
  ...product, 
  category : "powders"
}))

export { powdersArr }