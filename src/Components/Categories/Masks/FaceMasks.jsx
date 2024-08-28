import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import OliveBlackMask from "./Images/OliveBlackMask.jpeg";
import PeelOffMask from "./Images/PeelOffMask.jpeg";
import SadoerGoldMask from "./Images/SadoerGoldMask.jpeg";
import StrawberryMaskStick from "./Images/StrawberryMaskStick.jpeg";
import DrRaheelGoldenCollagen from "./Images/DrRaheelGoldenCollagen.jpeg";
function FaceMasks() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Masks
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={OliveBlackMask}
          text="Dead Skin Remover Peel-Off Face Mask"
          price="599/-"
          reducedPrice="399/-"
          productCode="MZ19920102RAAS"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Black
Product Feature: Dead Skin Remover, Hydrating, Peel-off"
        />

        <ProductCard
          img={DrRaheelGoldenCollagen}
          text="Dr.Raheel Peel-Off Face Mask"
          price="899/-"
          reducedPrice="599/-"
          productCode=" MZ55700000027BYBR"
          shortDetail="Material: Cream
Package Includes: 1 x Face Sheet Mask"
        />

        <ProductCard
          img={StrawberryMaskStick}
          text="Moisturizing Stick Mask"
          price="699/-"
          reducedPrice="529/-"
          productCode="MZ90000000031MJCN"
          shortDetail="Material: Stick
For All Skin Types
•  Moisturizing And Cleansing
•  For Soft And Smooth Skin
•  Anti Acne And Oil Control
•  Weight: 40g
Package Includes: 1 x Face Mask
"
        />

        <ProductCard
          img={SadoerGoldMask}
          text="Retinol Snake Venom Peptide Anti-Wrinkle, Gold Mask"
          price="899/-"
          reducedPrice="599/-"
          productCode="MZ19920011RAAS"
          shortDetail="Details: Moisturizing And Clear, Moisturizing And Tender Skin Care, 3. Tight And Tender, Lifting And Lifting The Skin Moisturizing And Translucent, Full And Elastic, Tightening The Muscle Contour
Package Includes: 1 x Face Mask"
        />

        <ProductCard
          img={PeelOffMask}
          text="Rejuvenating Peel-Off Face Mask"
          price="499/-"
          reducedPrice="359/-"
          productCode="MZ19920101RAAS"
          shortDetail="Material: Synthetic
Texture: Smooth
Color: Golden
Product Feature: Rejuvenating, Absorbent, Peel-off, Nourishing"
        />
      </div>
    </>
  );
}

export default FaceMasks;
