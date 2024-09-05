import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import {
  GlupatoneBC,
  WhiteningEmulsion,
  FacialBeautyCream,
  SkinPolish300g,
  CentellaCream30G,
  goldenPearlMassageCream,
  AcneRemovalCream,
  bioaouaUnderArmCream,
  VitaminCCream60g,
  VitaminCWhiteningCream,
  BiPureAcneCream,
  SaeedGhaniFootAndHandCream,
  dermawickUrgerntFacial,
  DermacosWhiteningSkinPolishBleachSet,
  FairandLovelyCream,
  SeiBella,
  GlowAndCleanSkinPolish,
  HeavenDoveCream,
  GoldenPearlUrgentFacial,
  BioaquaAcneRemoval,
  VitaminECapsuleJar,
  DeepFreshUVCream,
  DeuuHerbalSkinPolish,
  YardlieAntiAcneVitaminC,
  RubellaWhitenningCream,
} from "./Images/exportBCImgs";

import {
  bioaouaUnderArmCreamDetails,
  RubellaWhitenningCreamDesc,
  DeuuHerbalSkinPolishDesc,
  DeepFreshUVCreamDesc,
  VitaminECapsuleJarDesc,
  GlowAndCleanSkinPolishDesc,
  BioaquaAcneRemovalDesc,
  HeavenDoveCreamDesc,
  dermawickUrgerntFacialDesc,
  GoldenPearlUrgentFacialDesc,
  SeiBellaDesc,
  FairandLovelyCreamDesc,
  DermacosWhiteningSkinPolishBleachSetDesc,
  BiPureAcneCreamDesc,
  SaeedGhaniFootAndHandCreamDesc,
} from "./productDescription";

function BrighteningCream() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={bioaouaUnderArmCream}
          text="Underarm Whitening Cream"
          price="899/-"
          reducedPrice="644/-"
          productCode={null}
          shortDetail={bioaouaUnderArmCreamDetails}
          rating="4.0"
        />

        <ProductCard
          img={RubellaWhitenningCream}
          text="2 Pcs Whitening Cream"
          rating="4.0"
          price="649/-"
          reducedPrice="539/-"
          productCode="MZ84200076DOSTC"
          shortDetail={RubellaWhitenningCreamDesc}
        />

        <ProductCard
          img={YardlieAntiAcneVitaminC}
          text="Anti Acne Vitamin C Beauty Cream"
          rating="4.0"
          price="649/-"
          reducedPrice="539/-"
          productCode="MZ84200076DOSTC"
          shortDetail="Anti Acne, Whitening, Suitable for All Skin Types
            Product Details:Material: Cream
            Product Type: Vitamin C Beauty Cream
            Product Details: Anti Acne, Whitening, Suitable for All Skin Types, Export Quality with SPF45."
        />

        <ProductCard
          img={DeuuHerbalSkinPolish}
          text="Glowing Herbal Skin Polisher"
          rating="4.0"
          price="699/-"
          reducedPrice="489/-"
          productCode="MZ57300128UDEES"
          shortDetail={DeuuHerbalSkinPolishDesc}
        />

        <ProductCard
          img={DeepFreshUVCream}
          text="Deep Fresh Brightening Cream"
          rating="4.0"
          price="1099/-"
          reducedPrice="899/-"
          productCode="MZ35500121GLABM"
          shortDetail={DeepFreshUVCreamDesc}
        />

        <ProductCard
          img={VitaminECapsuleJar}
          text="Vitamin E Capsule Jar"
          rating="5.0"
          price="699/-"
          reducedPrice="468/-"
          productCode="MZ88700003ARSML"
          shortDetail={VitaminECapsuleJarDesc}
        />

        <ProductCard
          img={GlowAndCleanSkinPolish}
          text="Skin Polish Pack Of 3"
          rating="5.0"
          price="1599/-"
          reducedPrice="1319/-"
          productCode="MZ48800055ARUMT"
          shortDetail={GlowAndCleanSkinPolishDesc}
        />

        <ProductCard
          img={BioaquaAcneRemoval}
          text="Salicylic Acid Acne Removal Cream , 20 g"
          rating="5.0"
          price="449/-"
          reducedPrice="359/-"
          productCode="MZ59300116FIFEC"
          shortDetail={BioaquaAcneRemovalDesc}
        />

        <ProductCard
          img={HeavenDoveCream}
          text="Heaven Dove Whitening Cream - Blue"
          price="999/-"
          rating="4.0"
          reducedPrice="749/-"
          productCode="MZ67400000027CYCH"
          shortDetail={HeavenDoveCreamDesc}
        />

        <ProductCard
          img={dermawickUrgerntFacial}
          text="Whitening And Glowing Urgent Facial"
          price="699/-"
          rating="5.0"
          reducedPrice="539/-"
          productCode="MZ22100017MSEE"
          shortDetail={dermawickUrgerntFacialDesc}
        />

        <ProductCard
          img={GoldenPearlUrgentFacial}
          text="WUnique Formula Whitening Urgent Facial Tube - 75m"
          price="499/-"
          rating="4.0"
          reducedPrice="349/-"
          productCode="MZ53500000003HHK"
          shortDetail={GoldenPearlUrgentFacialDesc}
        />

        <ProductCard
          img={SeiBella}
          text="Sei Bella Skin Whitening Cream, 20 Ml"
          price="799/-"
          rating="5.0"
          reducedPrice="659/-"
          productCode="MZ100700007RTBY"
          shortDetail={SeiBellaDesc}
        />

        <ProductCard
          img={FairandLovelyCream}
          text="Fair and Lovely Cream"
          price="499/-"
          rating="5.0"
          reducedPrice="419/-"
          productCode="MZ60720008AASGML"
          shortDetail={FairandLovelyCreamDesc}
        />

        <ProductCard
          img={DermacosWhiteningSkinPolishBleachSet}
          text="Whitening Skin Polish Bleach Set, Pack Of 3"
          price="2199/-"
          reducedPrice="1799/-"
          productCode="MZ80120008LABY"
          shortDetail={DermacosWhiteningSkinPolishBleachSetDesc}
        />
        <ProductCard
          img={BiPureAcneCream}
          text="Bi Pure Acne Cream"
          price="849/-"
          reducedPrice="619/-"
          productCode="MZ100700011RTBY"
          shortDetail={BiPureAcneCreamDesc}
        />
        <ProductCard
          img={SaeedGhaniFootAndHandCream}
          text="Saeed Ghani Foot & Hand Whitening Cream 150g"
          price="1099/-"
          reducedPrice="959/-"
          productCode="MZ23800030SKTS"
          shortDetail={SaeedGhaniFootAndHandCreamDesc}
        />

        <ProductCard
          img={VitaminCCream60g}
          text="Vitamin-C Cream, 60 g"
          price="899/-"
          reducedPrice="649/-"
          productCode="MZ726002801BSMCS"
          shortDetail="Material: Cream
            Skin Types: Combination Skin
            Product Feature: Anti-Aging, Brightening, Whitening
            Package Includes: 1 x Vitamin-C Hand Cream
            "
        />

        <ProductCard
          img={GlupatoneBC}
          text="Brightening Cream"
          price="749/-"
          reducedPrice="549/-"
          shortDetail="Material: Cream
            Package Includes:  1 x Facial Beauty Cream"
          productCode="MZ60320025MNSRPS"
        />

        <ProductCard
          img={FacialBeautyCream}
          text="Facial Beauty Cream"
          price="699/-"
          reducedPrice="549/-"
          shortDetail="Material: Cream
            Package Includes:  1 x Facial Beauty Cream"
          rating="5.0"
          productCode="MZ60320024MNSRPS"
        />

        <ProductCard
          img={WhiteningEmulsion}
          text="Whitening And Brightening Emulsion"
          price="999/-"
          reducedPrice="769/-"
          shortDetail="Material: Cream
            Product Feature: Whitening And Brightening
            "
          productCode="MZ109020208QYCSSE"
        />

        <ProductCard
          img={SkinPolish300g}
          text=" Whitening Skin Polish 300g"
          price="999/-"
          reducedPrice="699/-"
          shortDetail="Material: Cream
            New Skin Beauty Skin Polishing Is A Technique Used To Brighten
            Exfoliate Dull Skin By Removing The Dead Skin On The Surface"
          rating="5.0"
          productCode="MZ108920020NWSNBY"
        />

        <ProductCard
          img={CentellaCream30G}
          text="Skin Care Centella Cream 30G"
          price="899/-"
          reducedPrice="599/-"
          shortDetail="Centella Asiatica Extract
            Soothing And Repairing
            Solution For Sensitive Skin
            Strenghten The Skin Bottom
            Moisturizing
            Rebuild The Skin Surface
            Size: 30G
            "
          productCode="MZ2600085ARCC"
          rating="5.0"
        />

        <ProductCard
          img={VitaminCWhiteningCream}
          text="Vitamin C Whitening Cream"
          price="839/-"
          reducedPrice="649/-"
          productCode="MZ726002801BSMCS"
          shortDetail="Material: Cream
            Skin Types: Normal Skin
            Product Feature: Whitening
            Quantity: 50 G
            Package Includes: 1 x Vitamin  C Whitening Cream
            "
        />

        <ProductCard
          img={goldenPearlMassageCream}
          text="Skin Lightening Massage Cream"
          price="899/-"
          reducedPrice="599/-"
          shortDetail="Material: Cream
            Product Feature: Whitening"
          productCode="MZ66600110GNCS"
        />

        <ProductCard
          img={AcneRemovalCream}
          text="Acne Scar Removal Rejuvenation Cream"
          price="419/-"
          reducedPrice="699/-"
          shortDetail="Product Description: 
            Product Details:Package Includes: 1 x Acne Scar Removal Rejuvenation Cream"
          productCode="MZ19920097RAAS"
        />
      </div>
    </>
  );
}

export default BrighteningCream;
