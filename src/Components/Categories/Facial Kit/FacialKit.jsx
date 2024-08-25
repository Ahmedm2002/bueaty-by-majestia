import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import BNBFacialKit from "./Images/BNBFacialKit.jpeg";
import nourishingFacialKit from "./Images/nourishingFacialKit.jpeg";
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
        {/* <ProductCard
          img={moisturizer}
          text="Body Moisturizer by Olivia"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Oil Package Includes: 1 x Oil"
          rating="5.0"
        /> */}
        {/* <ProductCard
          img={cleanser}
          text="Foaming Facial Cleanser"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="A gentle enzyme and amino acid blend loosens makeup, oil and other impurities on the skin and in the pores"
          rating="5.0"
        /> */}
      </div>
    </>
  );
}

export default FacialKit;
