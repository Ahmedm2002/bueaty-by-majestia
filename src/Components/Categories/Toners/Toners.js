import { DermaSkinToner } from "./Imgaes/TonersImgs";

import { DermaSkinTonerDesc } from "./TonersDesc";

let tonersArr = [
  {
    img: DermaSkinToner,
    text: "Derma Shine Skin Toner With Honey & Lemon 320Ml",
    price: "1299/-",
    reducedPrice: "999/-",
    productCode: "MZ37000000002GWAYBYMT",
    shortDetail: DermaSkinTonerDesc,
  },
];


tonersArr = tonersArr.map((product) => ({
  ...product, 
  category : "toners"
}))

export { tonersArr }