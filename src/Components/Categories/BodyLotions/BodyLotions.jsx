import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import HyderatingBL250ML from "./Images/HyderatingBL250ML.jpeg";
import soapexFeetCream from "./Images/soapexFeetCream.jpeg";
function BodyLotions() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={HyderatingBL250ML}
          text="Hydrating Body Lotion, 250 Ml"
          price="699/-"
          reducedPrice="539/-"
          shortDetail="Hydrating
Package Includes: 2 x Body Lotion
Volume: 250 Ml"
          productCode="MZ69120180AIBSFD"
        />

        <ProductCard
          img={soapexFeetCream}
          text="Soapex Heel Cream"
          price="499/-"
          reducedPrice="389/-"
          productCode="MZ19920069RAAS"
          shortDetail="Material: Cream
Imported Cracked Foot And Hands Skin Repair Cream, Ultra-Hydrating, Professional-Strength Formula Delivering Triple Action –Moisturizing, Repairing, And Soothing Dry, Cracked Feet."
        />
        {/* <ProductCard
          img={exfoliatingNCPck2}
          text="Exfoliating Gel And Night Cream, Pack Of 2"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Gel, Cream
Texture: High Pigmented
Plant Extraction Can Effectively Replenish Skin Moisture And Make Skin Tender And Smooth"
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

export default BodyLotions;
