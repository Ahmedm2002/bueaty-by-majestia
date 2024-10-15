import { DermaSkinToner } from "./Imgaes/TonersImgs";

import { DermaSkinTonerDesc } from "./TonersDesc";

let tonersArr = [
  {
    img: DermaSkinToner,
    text: "Honey And Lemon Brightening Skin Toner, 320 Ml",
    price: "1299/-",
    reducedPrice: "1019/-",
    productCode: "MZ37000000002GWAYBYMT",
    shortDetail: DermaSkinTonerDesc,
  },
];


tonersArr = tonersArr.map((product) => ({
  ...product, 
  category : "toners"
}))

export { tonersArr }