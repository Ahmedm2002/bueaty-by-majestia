import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import BNBFacialKit from "./Images/BNBFacialKit.jpeg";
import nourishingFacialKit from "./Images/nourishingFacialKit.jpeg";
import TheOdinaryFacialKit from "./Images/TheOdinaryFacialKit.jpeg";
import BrighteningFacialKitBNB from "./Images/BrighteningFacialKitBNB.jpeg";
function FacialKit() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Facial Kit
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={BNBFacialKit}
          text="Rice Whitening And Glowing Facial Kit"
          price="2999/-"
          reducedPrice="1499/-"
          shortDetail="Material: Cream
Blend Of Fruit Extracts And Oils, Gives A Natural Glow To Your Skin, Improve Complexion
Whitening Face Wash, Whitening Facial Cleanser, Whitening Facial Scrub
Whitening Facial Polish, Whitening Facial Massage Cream, Whitening Face Mask"
        />
        <ProductCard
          img={nourishingFacialKit}
          text="TNourishing Facial Kit - Pack Of 6"
          price="450/-"
          reducedPrice="199/-"
          shortDetail="Material: Cream
Texture: Smooth
Color: White
Product Feature: Nourishing, Rejuvenating, Glowing
Package Includes: 1 x Facial Scrub, 1 x Face Mud Mask, 1 x Face Massage Cream, 1 x Skin Polisher, 1 x Double Action, 1 x Triple Action"
        />
        <ProductCard
          img={TheOdinaryFacialKit}
          text="Brightening Glow Kit - Pack Of 4"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Cream
A Fast-Absorbing Serum That Targets Dark Spots And Hyperpigmentation
A Gentle Yet Effective Exfoliation That Removes Dead Skin Cells And Unclogs Pores
Hydrates And Brightens The Skin
Package Includes: 4 x Brightening Glow Kit
"
          rating="5.0"
        />
        <ProductCard
          img={BrighteningFacialKitBNB}
          text="Brightening Facial Kit"
          price="999/-"
          reducedPrice="499/-"
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
