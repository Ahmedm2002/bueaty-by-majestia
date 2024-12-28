
import {
  BNBFacialKit,
  nourishingFacialKit,
  TeaTreeOrganicSkincareKit,
  TheOdinaryFacialKit,
  BrighteningFacialKitBNB,
  kalonjiFK,
  riceCleaningScrub,
  DermaWhiteningAndBrightening,
  SkinTouchGold,
  GlutaponeFK,
  FruityWhiteningFacial,
  DrRaheelWiteningRiceFacial,
} from "./Images/FacialKitsImgs";

import {
  kalonjiFKDesc,
  DrRaheelWiteningRiceFacialDesc,
  FruityWhiteningFacialDesc,
  DermaWhiteningAndBrighteningDesc,
  GlutaponeFKDesc,
  SkinTouchGoldDesc,
  TeaTreeOrganicSkincareKitDesc,
  BNBFacialKitDesc,
  riceCleaningScrubDesc,
  nourishingFacialKitDesc,
  TheOdinaryFacialKitDesc,
  BrighteningFacialKitBNBDesc,
} from "./facialKitsDesc";


let FacialKitsArr = [
  {
    img: DrRaheelWiteningRiceFacial,
    text: "Doctor Raheel White Rice Whitening And Glowing Facial Kit",
    price: "1499/-",
    reducedPrice: "1199/-",
    productCode: "MZ73200027TNDML",
    rating: "5.0",
    shortDetail: DrRaheelWiteningRiceFacialDesc,
  },
  {
    img: FruityWhiteningFacial,
    text: "Fruity Whitening Urgent Facial Tube - 75ml",
    price: "499/-",
    reducedPrice: "349/-",
    productCode: "MZ53500000002HHK",
    rating: "5.0",
    shortDetail: FruityWhiteningFacialDesc,
  },
  {
    img: DermaWhiteningAndBrightening,
    text: "DERMA SHINE FRUIT FACIAL KIT Whitening And Brightening Facial Kit",
    price: "5599/-",
    reducedPrice: "3999/-",
    productCode: "MZ80120009LABY",
    shortDetail: DermaWhiteningAndBrighteningDesc,
  },
  {
    img: GlutaponeFK,
    text: "Glutapone Complete Facial set Facial Kit pack of 6 180ML each Tube",
    price: "4599/-",
    reducedPrice: "3599/-",
    productCode: "MZ90200000004UEWD",
    shortDetail: GlutaponeFKDesc,
  },
  {
    img: SkinTouchGold,
    text: "Whitening And Glowing Urgent Facial",
    price: "899/-",
    reducedPrice: "499/-",
    productCode: "MZ22100021MSEE",
    shortDetail: SkinTouchGoldDesc,
  },
  {
    img: TeaTreeOrganicSkincareKit,
    text: "BNB Acne Control Tea Tree Organic Skincare Kit",
    price: "3699/-",
    reducedPrice: "2899/-",
    productCode: "MZ69120050AIBSFD",
    shortDetail: TeaTreeOrganicSkincareKitDesc,
  },
  {
    img: BNBFacialKit,
    text: "BNB Rice Extract Bright & Glow Kit ( Rice Face Wash + Rice Scrub + Rice Mask ) ",
    price: "2399/-",
    reducedPrice: "1799/-",
    productCode: "MZ118320064CCCS",
    shortDetail: BNBFacialKitDesc,
  },
  {
    img: riceCleaningScrub,
    text: "Purchase Wokali Rice Cleansing Facial Scrub - Urban Beauty",
    price: "899/-",
    reducedPrice: "499/-",
    productCode: "MZ57520029HYCS",
    shortDetail: riceCleaningScrubDesc,
  },
  {
    img: kalonjiFK,
    text: "Kolonji Brightening Facial Kit 6 In 1",
    price: "2899/-",
    reducedPrice: "1999/-",
    productCode: "1949369",
    shortDetail: kalonjiFKDesc,
  },
  {
    img: nourishingFacialKit,
    text: "Nourishing Facial Kit - Pack Of 6",
    price: "1799/-",
    reducedPrice: "1499/-",
    productCode: "MZ115720075ARTS",
    shortDetail: nourishingFacialKitDesc,
  },
  {
    img: TheOdinaryFacialKit,
    text: "The Ordinary Face And Hand Brightening Glow Kit - Pack Of 4",
    price: "2999/-",
    reducedPrice: "2599/-",
    productCode: "MZ19920112RAAS",
    shortDetail: TheOdinaryFacialKitDesc,
    rating: "5.0",
  },
  {
    img: BrighteningFacialKitBNB,
    text: "CLARA B&B Korean Rice Facial Kit Face Wash Glow Organic Brightening Glow 3 in 1 Scrub + Wash + Mask",
    price: "2499/-",
    reducedPrice: "1799/-",
    productCode: "MZ19920079RAAS",
    shortDetail: BrighteningFacialKitBNBDesc,
    rating: "5.0",
  }
];

FacialKitsArr = FacialKitsArr.map((product) => ({
  ...product, 
  category : "facialKit"
}))

export { FacialKitsArr }