
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
    text: "Whitening And Glowing Facial Kit",
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
    text: "Whitening And Brightening Facial Kit",
    price: "6999/-",
    reducedPrice: "4699/-",
    productCode: "MZ80120009LABY",
    shortDetail: DermaWhiteningAndBrighteningDesc,
  },
  {
    img: GlutaponeFK,
    text: "Whitening Facial Kit, Pack Of 6",
    price: "4099/-",
    reducedPrice: "3849/-",
    productCode: "MZ90200000004UEWD",
    shortDetail: GlutaponeFKDesc,
  },
  {
    img: SkinTouchGold,
    text: "Whitening And Glowing Urgent Facial",
    price: "699/-",
    reducedPrice: "539/-",
    productCode: "MZ22100021MSEE",
    shortDetail: SkinTouchGoldDesc,
  },
  {
    img: TeaTreeOrganicSkincareKit,
    text: "Tea Tree Organic Skincare Kit",
    price: "2699/-",
    reducedPrice: "2199/-",
    productCode: "MZ69120050AIBSFD",
    shortDetail: TeaTreeOrganicSkincareKitDesc,
  },
  {
    img: BNBFacialKit,
    text: "Rice Whitening And Glowing Facial Kit",
    price: "1699/-",
    reducedPrice: "1269/-",
    productCode: "MZ118320064CCCS",
    shortDetail: BNBFacialKitDesc,
  },
  {
    img: riceCleaningScrub,
    text: "Rice Exfoliating Facial Scrub, 100 Ml",
    price: "599/-",
    reducedPrice: "389/-",
    productCode: "MZ57520029HYCS",
    shortDetail: riceCleaningScrubDesc,
  },
  {
    img: kalonjiFK,
    text: "Kolonji brightening facial kit 6 in 1",
    price: "2099/-",
    reducedPrice: "1649/-",
    productCode: "1949369",
    shortDetail: kalonjiFKDesc,
  },
  {
    img: nourishingFacialKit,
    text: "Nourishing Facial Kit - Pack Of 6",
    price: "1799/-",
    reducedPrice: "1599/-",
    productCode: "MZ115720075ARTS",
    shortDetail: nourishingFacialKitDesc,
  },
  {
    img: TheOdinaryFacialKit,
    text: "Brightening Glow Kit - Pack Of 4",
    price: "2999/-",
    reducedPrice: "2699/-",
    productCode: "MZ19920112RAAS",
    shortDetail: TheOdinaryFacialKitDesc,
    rating: "5.0",
  },
  {
    img: BrighteningFacialKitBNB,
    text: "Brightening Facial Kit",
    price: "2499/-",
    reducedPrice: "1999/-",
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