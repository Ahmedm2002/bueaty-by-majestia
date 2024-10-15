import {
  nightCream,
  exfoliatingNCPck2,
  vitaminCnightCream,
  retinolSaeedGhaniAntiAging,
} from "./Images/NightSkinCareImgs";

import {
  retinolSaeedGhaniAntiAgingDesc,
  vitaminCnightCreamDesc,
  nightCreamDesc,
  exfoliatingNCPck2Desc,
} from "./NightSkinCareDesc";

let NightCreamsArr = [
  {
    img: retinolSaeedGhaniAntiAging,
    text: "Anti Aging Retinol Night Cream",
    price: "1599/-",
    reducedPrice: "1259/-",
    productCode: "MZ23800000006SKTS",
    shortDetail: retinolSaeedGhaniAntiAgingDesc,
    rating: "5.0",
  },
  {
    img: vitaminCnightCream,
    text: "Vitamin C Night Cream, 50 Grams",
    price: "1299/-",
    reducedPrice: "1099/-",
    productCode: "MZ117420031FZCS",
    shortDetail: vitaminCnightCreamDesc,
  },
  {
    img: nightCream,
    text: "Whitening And Aging Night Cream",
    price: "699/-",
    reducedPrice: "459/-",
    productCode: "MZ23800144SKTS",
    shortDetail: nightCreamDesc,
  },
  {
    img: exfoliatingNCPck2,
    text: "Exfoliating Gel And Night Cream, Pack Of 2",
    price: "1699/-",
    reducedPrice: "1399/-",
    productCode: "MZ23800118SKTS",
    shortDetail: exfoliatingNCPck2Desc,
    rating: "5.0",
  }
];

NightCreamsArr = NightCreamsArr.map((product) => ({
  ...product, 
  category : "nightSkinCare"
}))

export { NightCreamsArr }
