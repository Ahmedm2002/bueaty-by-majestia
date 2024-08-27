import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import NeemLeavesPowder from "./Images/NeemLeavesPowder.jpeg";
import RicePowderandMultaniMitti from "./Images/RicePowderandMultaniMitti.jpeg";
import RicePwdrCharcoal from "./Images/RicePwdrCharcoal.jpeg";
import RoseNeemPowder from "./Images/RoseNeemPowder.jpeg";
import RicePowderFacePack from "./Images/RicePowderFacePack.jpeg";
import multaniMittiPwdr from "./Images/multaniMittiPwdr.jpeg";
import OrangePeelsPwdr from "./Images/OrangePeelsPwdr.jpeg";
import neemLeavesPwdr from "./Images/neemLeavesPwdr.jpeg";
import roseFlowerPwdr from "./Images/roseFlowerPwdr.jpeg";
import FacePowder from "./Images/FacePowder.jpeg";

function Powders() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Powders
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={roseFlowerPwdr}
          text="Rose Flower Natural Powder"
          price="399/-"
          reducedPrice="229/-"
          productCode="MZ109220005COZMO"
          shortDetail="Natural Brightening
          Material: Powder
Package Includes: 1 x Skin Moisturizing Face Powder"
        />

        <ProductCard
          img={neemLeavesPwdr}
          text="Neem Leaves Natural Powder"
          price="399/-"
          reducedPrice="229/-"
          productCode="MZ109220005COZMO"
          shortDetail="Natural Brightening
          Material: Powder
Package Includes: 1 x Skin Moisturizing Face Powder"
        />

        <ProductCard
          img={multaniMittiPwdr}
          text="Multani Matti Powder"
          price="399/-"
          reducedPrice="229/-"
          productCode="MZ109220005COZMO"
          shortDetail="Natural Brightening
          Material: Powder
Package Includes: 1 x Skin Moisturizing Face Powder"
        />

        <ProductCard
          img={OrangePeelsPwdr}
          text="Orange Peel Powder"
          price="399/-"
          reducedPrice="229/-"
          productCode="MZ109220004COZMO"
          shortDetail="Material: Powder
Package Includes: 1 x Orange Peel Face Powder"
        />

        <ProductCard
          img={FacePowder}
          text="Face Powder"
          price="1999/-"
          reducedPrice="1499/-"
          productCode="MZ23800077SKTS"
          shortDetail="Material: Powder
Package Includes: 1 x Face Powder"
        />

        <ProductCard
          img={RicePowderFacePack}
          text="Rice Powder Natural Brightening Rice Face Pack"
          price="549/-"
          reducedPrice="429/-"
          productCode="MZ109220005COZMO"
          shortDetail="Material: Powder
Package Includes: 1 x Skin Moisturizing Face Powder"
        />

        <ProductCard
          img={RoseNeemPowder}
          text="Rose Flower Powder and  Neem Leaves Powder"
          price="549/-"
          reducedPrice="429/-"
          productCode="MZ109220011COZMO"
          shortDetail="Material: Powder
Package Includes: 2 x Skin Moisturizing Face Powder"
        />

        <ProductCard
          img={RicePwdrCharcoal}
          text=" Rice Powder and  Activated Charcoal Powder"
          price="699/-"
          reducedPrice="489/-"
          shortDetail="Material: Powder
Package Includes: 2 x Skin Moisturizing Face Powder
"
          rating="5.0"
          productCode="MZ109220016COZMO"
        />

        <ProductCard
          img={RicePowderandMultaniMitti}
          text="Rice Powder and  Multani Mitti, Pack Of 2"
          price="649/-"
          reducedPrice="489/-"
          shortDetail="Material: Powder
Package Includes: 2 x Skin Moisturizing Face Powder"
          productCode="MZ109220017COZMO"
        />

        <ProductCard
          img={NeemLeavesPowder}
          text="Neem Leaves Powder and Multani Mitti"
          price="549/-"
          reducedPrice="429/-"
          shortDetail="Material: Powder
Package Includes: 2 x Skin Moisturizing Face Powder"
          productCode="MZ109220021COZMO"
        />
      </div>
    </>
  );
}

export default Powders;
