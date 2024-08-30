import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import spf60SunScreen from "./Images/spf60SunScreen.jpeg";
import uvSunblock from "./Images/uvSunblock.jpeg";
import sunblock120gUV from "./Images/sunblock120gUV.jpeg";
import CeraVeSunblock from "./Images/CeraVeSunblock.jpeg";
import SunblockPackOf3 from "./Images/SunblockPackOf3.jpeg";
import AntheliosUvmune from "./Images/AntheliosUvmune.jpeg";
import pondsUvProtect from "./Images/pondsUvProtect.jpeg";
import NeutrogenaSunblock from "./Images/NeutrogenaSunblock.jpeg";
import JessicaSunblock from "./Images/JessicaSunblock.jpeg";
import DisaarSunscreenLotion from "./Images/DisaarSunscreenLotion.jpeg";
import OilFreeTintedSaeedGhani from "./Images/OilFreeTintedSaeedGhani.jpeg";
function Sunblock() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Sunblock
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={OilFreeTintedSaeedGhani}
          text="Oil Free Tinted Sunscreen With Niacinamide Serum"
          price="1599/-"
          reducedPrice="1259/-"
          productCode="MZ23800000005SKTS"
          shortDetail="Material: Cream
            Volume: 30Ml
            Package Includes: 1 x Sunscreen"
          rating="5.0"
        />

        <ProductCard
          img={DisaarSunscreenLotion}
          text="UV Protectant Sunblock Lotion, 50 Ml"
          price="899/-"
          reducedPrice="599/-"
          productCode="MZ655000000112CLSCL"
          shortDetail="Material: Cream
            Product Type: UV Protectant Sunblock Spf 50
            Product Details: Helps Protect The Skin Against Sun Broad Spectrum Of Harmful UV Radiations, No White Sheen, For All Skin Types, Paraben Free
            Color: White
            Package Includes: 1 x Sunblock
            Weight: 50 Ml"
        />

        <ProductCard
          img={NeutrogenaSunblock}
          text="Neutrogena Sunblock"
          price="N/A"
          reducedPrice="N/A"
          productCode="MZ67400046CYCH"
          shortDetail="Material: Cream
            Package Includes: 1 x Sunblock"
        />

        <ProductCard
          img={JessicaSunblock}
          text="Sunscreen, SPF- 60"
          price="699/-"
          reducedPrice="479/-"
          productCode="MZ100320003TEBYEL"
          shortDetail="Color: Yellow
            Package Includes: 1 x Sunscreen"
        />

        <ProductCard
          img={spf60SunScreen}
          text="SPF 60 Sun Screen, 120 Ml"
          price="799/-"
          reducedPrice="599/-"
          productCode="MZ118320032CCCS"
          shortDetail="Product Feature: UV Protectant, Protects From Sunburn
            sun screen with spf-60 & vitamin E highly effective and immediate UVA/UVV protection against sun burn "
        />
        <ProductCard
          img={uvSunblock}
          text="UV Protectant Sunblock- SPF-60"
          price="899/-"
          reducedPrice="689/-"
          productCode="MZ115720111ARTS"
          shortDetail="Material: Cream
            Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
            Color: White
            SPF-60
            Product Feature: UV Protectant"
        />
        <ProductCard
          img={sunblock120gUV}
          text="UV Protectant Sunblock, 120 G"
          price="1499/-"
          reducedPrice="1199/-"
          productCode="MZ66600113GNCS"
          shortDetail="Material: Cream
            Product Feature: UV Protectant
            Package Includes: 1 x Sunblock
            Weight: 120 Gram"
          rating="5.0"
        />
        <ProductCard
          img={CeraVeSunblock}
          text="Sunscreen Face Lotion SPF 50"
          price="1199/-"
          reducedPrice="969/-"
          productCode="MZ23800094SKTS"
          shortDetail="Material: Liquid
            Hydrating Sunscreen Lotion Is Allergy-Tested, Paraben-Free, Fragrance-Free
            Oil-Free, Oxybenzone-Free, Octanoate-Free, Non-Comedogenic, And Suitable For Sensitive Skin
            Provide Long-Lasting Hydration, As Well As Niacinamide To Help Calm Skin"
          rating="5.0"
        />
        <ProductCard
          img={SunblockPackOf3}
          text="Sunblock - Pack Of 3"
          price="799/-"
          reducedPrice="599/-"
          productCode="MZ69120124AIBSFD"
          shortDetail="Material: Cream
            Water Resistant
            Anti-dark Spots
            Anti Darkening
            For All Skin Types
            Multipurpose Product For Protecting Skin From UV-A and B Rays"
          rating="5.0"
        />
        <ProductCard
          img={AntheliosUvmune}
          text="Anthelios Uvmune 400 Invisible Fluid Sunscreen"
          price="999/-"
          reducedPrice="749/-"
          productCode="MZ90920013MPFR"
          shortDetail="Material: Cream
            Package Includes: 1 x Sunscreen"
          rating="5.0"
        />
        <ProductCard
          img={pondsUvProtect}
          text="Pond's UV Protectant Sunblock"
          price="699/-"
          reducedPrice="419/-"
          productCode="MZ84900020NNTS"
          shortDetail="Material: Cream
            Texture: Smooth
            Skin Types: Normal Skin
            Product Feature: UV Protectant
            Package Includes: 1 x Sunblock"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default Sunblock;
