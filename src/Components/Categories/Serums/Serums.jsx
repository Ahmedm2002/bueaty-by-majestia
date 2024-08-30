import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import RiceSkinBueatyEssence from "./Images/RiceSkinBueatyEssence.jpeg";
import pixiSerum from "./Images/pixiSerum.jpeg";
import NiacinamideSkinpeeling from "./Images/NiacinamideSkinpeeling.jpeg";
import TeaTreeSerum from "./Images/TeaTreeSerum.jpeg";
import TeaTreeOilSerum from "./Images/TeaTreeOilSerum.jpeg";
import teaTreeEssentialOil from "./Images/teaTreeEssentialOil.jpeg";
function Serums() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={TeaTreeOilSerum}
          text="Aiken Tea Tree Oil Serum"
          price="749/-"
          reducedPrice="539/-"
          productCode={null}
          shortDetail="Material: Liquid
            Product Type: Tea Tree Oil Anti-Acne Serum
            Product Details: Specially Formulated To Target Acne Prone Skin, This Serum Helps Clear Blemishes, Control Oil, And Promote A Healthy, Balanced Complexion, Soothing And Calming, Regulates Oil Production, Clearer And Healthier Skin. Multiple Uses: (1) Face Care: 1-3 drops into the foam cleanser, water, milk, cream, facial mask etc in the mix to use, (2) Hair Care: 5 drops into the water to wash your hair, or drop into the shampoo and conditioner used in, or directly to massage the scalp, (3)Bady Care: Bubble bath, bath, or feet, etc. (4) Environmental Care: It can be as perfume spray in the environment.
            Package Includes: 1 x Serum
            Weight: 10 Ml"
        />

        <ProductCard
          img={TeaTreeSerum}
          text="Tea Tree Oil Serum"
          price="1299/-"
          reducedPrice="959/-"
          productCode={null}
          shortDetail="Tea Tree Oil Serum
            Product Details:Material: Liquid
            Product Type: Tea Tree Oil 
            Product Details: Specially Formulated To Target Acne Prone Skin, This Serum Helps Clear Blemishes, Control Oil, And Promote A Healthy, Balanced Complexion, Soothing And Calming, Regulates Oil Production, Clearer And Healthier Skin
            Color: Green
            Package Includes: 1 x Serum
            Weight: 30 Ml"
        />

        <ProductCard
          img={RiceSkinBueatyEssence}
          text="Rice Skin Bueaty Essence"
          price="1599/-"
          reducedPrice="1449/-"
          productCode="MZ18700837RFAAC"
          shortDetail="Material: Cream
            Product Type: Rice Cream, Rice Lotion And Rice Serum Deal
            Product Details: Nourish Your Skin, Moisture Replenish for Body, Soothing And Cooling, Hydration"
        />

        <ProductCard
          img={teaTreeEssentialOil}
          text="Tea Tree Oil"
          price="349/-"
          reducedPrice="259/-"
          productCode="MZ88300009UNQWD"
          shortDetail="Material: Oil
            Volume: 10 Ml
            Package Includes: 1 x Oil"
        />

        <ProductCard
          img={NiacinamideSkinpeeling}
          text="Niacinamide Skin peeling Serum"
          price="849/-"
          reducedPrice="719/-"
          productCode="MZ69120013AIBSFD"
          shortDetail="Product Details: Skin Brightening, Evens Skin Tone, Hydration Boost, Gentle And Non Irritating, Kin Plump And Hydrated, Unveil Your Natural Beauty
            Package Includes: 1 x Serum
            Weight: 30 Ml"
        />

        <ProductCard
          img={pixiSerum}
          text="RPixi Botanical Collagen & Retinol Serum"
          price="899/-"
          reducedPrice="649/-"
          productCode="1949615"
          shortDetail="Repair damaged skin provide glow in skin help to remove pigmentation acne scars tighten your skin work as anti aging.
          Helps In: This concentrated, volumizing serum is formulated with Acacia Collagen, Retinol and vitamins to help restore skin’s elasticity."
        />
      </div>
    </>
  );
}

export default Serums;
