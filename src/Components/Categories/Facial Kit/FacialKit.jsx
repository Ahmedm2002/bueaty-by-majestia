import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

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

function FacialKit() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Facial Kit
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={DrRaheelWiteningRiceFacial}
          text="Whitening And Glowing Facial Kit"
          price="1499/-"
          reducedPrice="1199/-"
          productCode="MZ73200027TNDML"
          rating="5.0"
          shortDetail={DrRaheelWiteningRiceFacialDesc}
        />

        <ProductCard
          img={FruityWhiteningFacial}
          text="Fruity Whitening Urgent Facial Tube - 75ml"
          price="499/-"
          reducedPrice="349/-"
          productCode="MZ53500000002HHK"
          rating="5.0"
          shortDetail={FruityWhiteningFacialDesc}
        />

        <ProductCard
          img={DermaWhiteningAndBrightening}
          text="Whitening And Brightening Facial Kit "
          price="6999/-"
          reducedPrice="4699/-"
          productCode="MZ80120009LABY"
          shortDetail={DermaWhiteningAndBrighteningDesc}
        />

        <ProductCard
          img={GlutaponeFK}
          text="Whitening Facial Kit, Pack Of 6"
          price="4099/-"
          reducedPrice="3849/-"
          productCode="MZ90200000004UEWD"
          shortDetail={GlutaponeFKDesc}
        />

        <ProductCard
          img={SkinTouchGold}
          text="Whitening And Glowing Urgent Facial"
          price="699/-"
          reducedPrice="539/-"
          productCode="MZ22100021MSEE"
          shortDetail={SkinTouchGoldDesc}
        />

        <ProductCard
          img={TeaTreeOrganicSkincareKit}
          text="Tea Tree Organic Skincare Kit"
          price="2699/-"
          reducedPrice="2199/-"
          productCode="MZ69120050AIBSFD"
          shortDetail={TeaTreeOrganicSkincareKitDesc}
        />

        <ProductCard
          img={BNBFacialKit}
          text="Rice Whitening And Glowing Facial Kit"
          price="1699/-"
          reducedPrice="1269/-"
          productCode="MZ118320064CCCS"
          shortDetail={BNBFacialKitDesc}
        />

        <ProductCard
          img={riceCleaningScrub}
          text="Rice Exfoliating Facial Scrub, 100 Ml"
          price="599/-"
          reducedPrice="389/-"
          productCode="MZ57520029HYCS"
          shortDetail={riceCleaningScrubDesc}
        />

        <ProductCard
          img={kalonjiFK}
          text="Kolonji brightening facial kit 6 in 1"
          price="2099/-"
          reducedPrice="1649/-"
          productCode="1949369"
          shortDetail={kalonjiFKDesc}
        />

        <ProductCard
          img={nourishingFacialKit}
          text="TNourishing Facial Kit - Pack Of 6"
          price="1799/-"
          reducedPrice="1599/-"
          productCode="MZ115720075ARTS"
          shortDetail={nourishingFacialKitDesc}
        />
        <ProductCard
          img={TheOdinaryFacialKit}
          text="Brightening Glow Kit - Pack Of 4"
          price="2999/-"
          reducedPrice="2699/-"
          productCode="MZ19920112RAAS"
          shortDetail={TheOdinaryFacialKitDesc}
          rating="5.0"
        />
        <ProductCard
          img={BrighteningFacialKitBNB}
          text="Brightening Facial Kit"
          price="2499/-"
          reducedPrice="1999/-"
          productCode="MZ19920079RAAS"
          shortDetail={BrighteningFacialKitBNBDesc}
          rating="5.0"
        />
      </div>
    </>
  );
}

export default FacialKit;
