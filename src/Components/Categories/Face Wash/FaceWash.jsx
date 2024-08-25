import React from "react";
import ProductCard from "../../Featured Products/ProductCard";
import RiceFaceWash from "./Images/RiceFaceWash.jpeg";
function FaceWash() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Wash
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={RiceFaceWash}
          text=" Rice Face Wash, 120 Ml"
          price="2999/-"
          reducedPrice="1499/-"
          onSale={true}
          shortDetail="Liquid Material Smooth Texture
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Product Feature: Hydrating, Absorbent"
        />
        {/* <ProductCard
          img={teaTreeOil}
          text="Tea Tree Oil, 10 Ml"
          price="450/-"
          reducedPrice="199/-"
          shortDetail="Material: Oil Package Includes: 1 x Oil"
        />
        <ProductCard
          img={moisturizer}
          text="Body Moisturizer by Olivia"
          price="999/-"
          reducedPrice="499/-"
          shortDetail="Material: Oil Package Includes: 1 x Oil"
          rating="5.0"
        />
        <ProductCard
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
