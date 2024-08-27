import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import RiceFaceWash from "./Images/RiceFaceWash.jpeg";
import DrRashelFaceWash from "./Images/DrRashelFaceWash.jpeg";
import AcneControlTea from "./Images/AcneControlTea.jpeg";
function FaceWash() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Wash
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={RiceFaceWash}
          text="Rice Face Wash, 120 Ml"
          price="1099/-"
          reducedPrice="849/-"
          onSale={true}
          shortDetail="Liquid Material Smooth Texture
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Product Feature: Hydrating, Absorbent"
          productCode="MZ69120300AIBSFD"
        />
        <ProductCard
          img={DrRashelFaceWash}
          text="Dr.Rashel's Purifying Face Wash"
          price="999/-"
          reducedPrice="699/-"
          shortDetail="Experience a deep, revitalizing cleanse! Infused with activated charcoal, it detoxifies, controls oil, and prevents breakouts, leaving your skin clearer and healthier. Perfect for daily use, this 100g tube ensures smooth, refreshed skin. "
        />
        <ProductCard
          img={AcneControlTea}
          text="Acne Control Tea Tree Face Wash"
          price="1299/-"
          reducedPrice="939/-"
          productCode="MZ100320007TEBYEL"
          shortDetail="Revitalize Your Skincare Routine With Acne Tea Tree Face Wash
A Potent Solution For Clearer, Healthier-Looking Skin
Infused With The Purifying Essence Of Tea Tree Oil
This Invigorating Cleanser Effectively Targets Acne-Causing Bacteria While Gently Unclogging Pores
Package Includes: 1 x Face Wash"
          rating="5.0"
        />
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

export default FaceWash;
