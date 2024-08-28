import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import RiceFaceWash from "./Images/RiceFaceWash.jpeg";
import DrRashelFaceWash from "./Images/DrRashelFaceWash.jpeg";
import AcneControlTea from "./Images/AcneControlTea.jpeg";
import SQMBlackHeadClearing from "./Images/SQMBlackHeadClearing.jpeg";
import GoldernPearlTripleProtection from "./Images/GoldernPearlTripleProtection.jpeg";
import DeepFreshFaceWash from "./Images/DeepFreshFaceWash.jpeg";
import GalipWashScrubMask from "./Images/GalipWashScrubMask.jpeg";
function FaceWash() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Wash
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={DeepFreshFaceWash}
          text="Deep Fresh Brightening Face Wash"
          price="699/-"
          reducedPrice="489/-"
          productCode="MZ57300131UDEES"
          shortDetail="Brightening Face Wash
Product Details:Material: Face Wash
Product Type: Brightening Face Wash
Product Details: Deep Fresh Brightening Facewash, Crafted With Premium Herbs And Fruits, Provides Optimal Skin Care For All Types, Offering Protection From Sunlight And A Rejuvenating Touch For Soft, Radiant Skin.
Package Includes: 1 X Brightening Facewash
Weight:75 G"
        />

        <ProductCard
          img={GalipWashScrubMask}
          text="3 in 1 Face & Body Scrubbing Mask, 170g"
          price="799/-"
          reducedPrice="519/-"
          productCode="MZ25200000011GLUS"
          shortDetail="Material: Cream
Weight: 170 Grams
Package Includes: 1 x Face Scrubbing Mask"
        />

        <ProductCard
          img={RiceFaceWash}
          text="Rice Face Wash, 120 Ml"
          price="1099/-"
          reducedPrice="849/-"
          productCode="MZ69120300AIBSFD"
          shortDetail="Liquid Material Smooth Texture
Skin Types: Normal, Oily, Dry, Combination, Sensitive, Or Acne-Prone
Product Feature: Hydrating, Absorbent"
        />

        <ProductCard
          img={GoldernPearlTripleProtection}
          text="Sunblock Tripple Protection - 200g"
          price="1499/-"
          reducedPrice="1169/-"
          productCode="MZ37000012GWAYBYMT"
          shortDetail="LProduct Material: Skin Care
Product Finish-type: Skin Care
Apply a sufficient amount of sunblock to cover all exposed areas of your skin.
Don’t forget areas like the ears, neck, back of the hands, and tops of the feet.
Ideally, do it at least 15 to 30 minutes before going into the sun to allow the sunscreen to bind to your skin properly.
Product Dimension Value (L5 x W2 x H3 (inches): 
Weight - 200Gram
Product Warranty: 100% Original
Package Includes: 1 x Sunblock"
        />

        <ProductCard
          img={DrRashelFaceWash}
          text="Dr.Rashel's Purifying Face Wash"
          price="999/-"
          reducedPrice="699/-"
          productCode={null}
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
        <ProductCard
          img={SQMBlackHeadClearing}
          text="Blackhead Clearing Oil-Free Salicylic Acid Aloe Scrub - 170g"
          price="999/-"
          reducedPrice="659/-"
          productCode="MZ485000036ECKSP"
          shortDetail="This Revitalizing Tan-Removal scrub is blended with aloe vera
Dissolve dead surface cells
Unclog pore openings and smooth the way for clear skin to surface
Gentle refining action uncovers skin's natural brightness for a younger-looking complexion
This Revitalizing tan removal scrub is blended with aloe vera
Dissolve dead surface cells
Unclog pore openings and smooth the way for clear skin to surface
Gentle refining action uncovers skin's natural brightness for a younger-looking complexion
Package Includes: 1 x Blackhead Clearing Oil-Free Salicylic Acid Aloe Scrub - 170g"
          rating="5.0"
        />
      </div>
    </>
  );
}

export default FaceWash;
