import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import HyderatingBL250ML from "./Images/HyderatingBL250ML.jpeg";
import soapexFeetCream from "./Images/soapexFeetCream.jpeg";
import XQMFaceBodyScrub from "./Images/XQMFaceBodyScrub.jpeg";
import CharismaHandAndFeet from "./Images/CharismaHandAndFeet.jpeg";
import WhiteningSpraySunProtector from "./Images/WhiteningSpraySunProtector.jpeg";
function BodyLotions() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={XQMFaceBodyScrub}
          text="Face & Body Plant Energy Scrub"
          price="899/-"
          reducedPrice="659/-"
          productCode="MZ66600064GNCS"
          shortDetail="Material: Cream
            Product Feature: Exfoliator, Dead Skin Remover
            Package Includes: 1 x Face & Body Scrubbing Mask
            Directions: Apply 2 times a day for the best results
            Apply on your skin where dirt or dead skin is present, rub it then remove. 
            Package Includes: 1 x Face & Body Pure Active Plant Energy
            Weight: 100 g"
        />

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
            Imported Cracked Foot And Hands Skin Repair Cream, Ultra-Hydrating, Professional-Strength Formula             Delivering Triple Action –Moisturizing, Repairing, And Soothing Dry, Cracked Feet."
        />
        <ProductCard
          img={CharismaHandAndFeet}
          text="Dead Skin Remover Foot & Hand Scrub, Free Sunblock"
          price="799/-"
          reducedPrice="589/-"
          productCode={null}
          shortDetail="Material: Scrub
            Product Type: Dead Skin Remover Foot & Hand Scrub
            Product Details: Scrub Deep Cleans To Leave Skin Healthy And Refreshed, Contains Natural Ingredients That Purify And Exfoliate For A Radiant Complexion, By Gently Removing Excess Callus And Dead Skin, This Scrub Lets Skin Natural Radiance Shine
            Package Includes: 1 x Scrub, 1 x Sunblock
            Weight: 30 g"
          rating="5.0"
        />
        <ProductCard
          img={WhiteningSpraySunProtector}
          text="Whitening Spray & Sun Protector"
          price="999/-"
          reducedPrice="719/-"
          productCode="MZ67200225ALIBF"
          shortDetail="UV Protectant Sunblock
            Product Details:Material: Cream
            Product Type: Whitening Spray
            Product Details: Helps Protect The Skin Against Sun Broad Spectrum Of Harmful UV Radiations, No White Sheen, For All Skin Types, Paraben Free
            Color: White
            Package Includes: 1 x Skin Spray
            Weight: 150 Ml"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default BodyLotions;
