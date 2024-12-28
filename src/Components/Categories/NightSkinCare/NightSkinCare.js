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
    price: "1399/-",
    reducedPrice: "1199/-",
    productCode: "MZ23800000006SKTS",
    shortDetail: retinolSaeedGhaniAntiAgingDesc,
    rating: "5.0",
  },
  {
    img: vitaminCnightCream,
    text: "Dr.Rashel Vitamin C Night Cream For Anti Aging And Brightning - 50G",
    price: "1299/-",
    reducedPrice: "1099/-",
    productCode: "MZ117420031FZCS",
    shortDetail: vitaminCnightCreamDesc,
  },
  {
    img: nightCream,
    text: "Whitening And Aging Night Cream",
    price: "869/-",
    reducedPrice: "599/-",
    productCode: "MZ91600000009TEFNSE",
    // productCode: "MZ23800144SKTS",
    shortDetail: nightCreamDesc,
  },
  {
    img: exfoliatingNCPck2,
    text: "Bioaqua Peach Extract Fruit Acid Exfoliating Face Gel Cream 140g - Pack of 2",
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
