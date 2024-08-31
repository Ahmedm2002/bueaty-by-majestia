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

import { kalonjiFKDesc } from "./facialKitsDesc";

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
          shortDetail="Whitening Facial Kit
            Product Details:Material: Cream
            Product Type: Whitening And Glowing Facial Kit
            Product Details: Gives A Natural Glow To Your Skin, Improve Complexion, Anti-Aging Glycolic Peel
            Package Includes: 1 x Scrub, 1 x Mask, 1 x Face Wash"
        />

        <ProductCard
          img={FruityWhiteningFacial}
          text="Fruity Whitening Urgent Facial Tube - 75ml"
          price="499/-"
          reducedPrice="349/-"
          productCode="MZ53500000002HHK"
          rating="5.0"
          shortDetail="Material: Facial
            Whitening Urgent Facial with natural ingredients
            Precious Herbs is a complete facial treatment that will make your skin healthy, fresh
            Radiant in just a few minutes! It leaves your skin with a perfect glow
            Package Includes: 1 x Fruity Whitening Urgent Facial Tube - 75ml
            "
        />

        <ProductCard
          img={DermaWhiteningAndBrightening}
          text="Whitening And Brightening Facial Kit "
          price="6999/-"
          reducedPrice="4699/-"
          productCode="MZ80120009LABY"
          shortDetail="Material: Cream
            Texture: Smooth
            Skin Types: Normal Skin
            Product Feature: Whitening And Brightening
            Package Includes: 1 x Facial Kit
            Product Features: Infused With Fruit Extracts For A Refreshing Experience.
            suitableFor All Skin Types.  This Multi-Pack Offers A Refreshing And Rejuvenating Experience, Perfect For Your Skincare Routine. 
            Weight: 200 Grams"
        />

        <ProductCard
          img={GlutaponeFK}
          text="Whitening Facial Kit, Pack Of 6"
          price="4099/-"
          reducedPrice="3849/-"
          productCode="MZ90200000004UEWD"
          shortDetail="Material: Liquid
            Pack Of: Pack Of 6
            Package Includes: 1 x Whitening Facial Kit Set
            Glutapone Facial Face Wash,  180ml
            Glutapone Facial Cleanser.180ml
            Glutapone Facial Skin Polish, 180ml
            Glutapone Facial Scrub, 180ml
            Glutapone Facial Massage Cream, 180ml
            Glutapone Facial Mask, 180ml"
        />

        <ProductCard
          img={SkinTouchGold}
          text="Whitening And Glowing Urgent Facial"
          price="699/-"
          reducedPrice="539/-"
          productCode="MZ22100021MSEE"
          shortDetail="Product Feature: Whitening, Exfoliation, Brightening
            Package Includes: 1 x Facial 
            "
        />

        <ProductCard
          img={TeaTreeOrganicSkincareKit}
          text="Tea Tree Organic Skincare Kit"
          price="2699/-"
          reducedPrice="2199/-"
          productCode="MZ69120050AIBSFD"
          shortDetail="Package Includes: 1 x Skincare Kit"
        />

        <ProductCard
          img={BNBFacialKit}
          text="Rice Whitening And Glowing Facial Kit"
          price="1699/-"
          reducedPrice="1269/-"
          productCode="MZ118320064CCCS"
          shortDetail="Material: Cream
            Blend Of Fruit Extracts And Oils, Gives A Natural Glow To Your Skin, Improve Complexion
            Whitening Face Wash, Whitening Facial Cleanser, Whitening Facial Scrub
            Whitening Facial Polish, Whitening Facial Massage Cream, Whitening Face Mask"
        />

        <ProductCard
          img={riceCleaningScrub}
          text="Rice Exfoliating Facial Scrub, 100 Ml"
          price="599/-"
          reducedPrice="389/-"
          productCode="MZ57520029HYCS"
          shortDetail="Material: Cream
            Size: 100 Ml
            Package Includes: 1 x Facial Scrub
            Restores skin beauty, Health and radiance, For all skin types"
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
          shortDetail="Material: Cream
            Texture: Smooth
            Color: White
            Product Feature: Nourishing, Rejuvenating, Glowing
            Package Includes: 1 x Facial Scrub, 1 x Face Mud Mask, 1 x Face Massage Cream, 1 x Skin Polisher, 1 x Double Action, 1 x Triple Action"
        />
        <ProductCard
          img={TheOdinaryFacialKit}
          text="Brightening Glow Kit - Pack Of 4"
          price="2999/-"
          reducedPrice="2699/-"
          productCode="MZ19920112RAAS"
          shortDetail="Material: Cream
            A Fast-Absorbing Serum That Targets Dark Spots And Hyperpigmentation
            A Gentle Yet Effective Exfoliation That Removes Dead Skin Cells And Unclogs Pores
            Hydrates And Brightens The Skin
            Package Includes: 4 x Brightening Glow Kit"
          rating="5.0"
        />
        <ProductCard
          img={BrighteningFacialKitBNB}
          text="Brightening Facial Kit"
          price="2499/-"
          reducedPrice="1999/-"
          productCode="MZ19920079RAAS"
          shortDetail="Material: Cream
            Texture: Smooth
            Color: Pink
            No. Of Pcs: 3
            Product Feature: Whitening And Brightening, Exfoliator, Nourishing"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default FacialKit;
