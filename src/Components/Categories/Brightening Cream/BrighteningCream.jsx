import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import GlupatoneBC from "./Images/GlupatoneBC.jpeg";
import WhiteningEmulsion from "./Images/WhiteningEmulsion.jpeg";
import FacialBeautyCream from "./Images/FacialBeautyCream.jpeg";
import SkinPolish300g from "./Images/SkinPolish300g.jpeg";
import CentellaCream30G from "./Images/CentellaCream30G.jpeg";
import goldenPearlMassageCream from "./Images/goldenPearlMassageCream.jpeg";
import AcneRemovalCream from "./Images/AcneRemovalCream.jpeg";
import bioaouaUnderArmCream from "./Images/bioaouaUnderArmCream.jpeg";
import VitaminCWhiteningCream from "./Images/VitaminCWhiteningCream.jpeg";
import VitaminCCream60g from "./Images/VitaminCCream60g.jpeg";
import BiPureAcneCream from "./Images/BiPureAcneCream.jpeg";
import SaeedGhaniFootAndHandCream from "./Images/SaeedGhaniFootAndHandCream.jpeg";
import DermacosWhiteningSkinPolishBleachSet from "./Images/DermacosWhiteningSkinPolishBleachSet.jpeg";
import FairandLovelyCream from "./Images/FairandLovelyCream.jpeg";
function BrighteningCream() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={FairandLovelyCream}
          text="Fair and Lovely Cream"
          price="499/-"
          rating="5.0"
          reducedPrice="419/-"
          productCode="MZ60720008AASGML"
          shortDetail="Package Includes: 1 x Face Cream
Weight: 25 Grams"
        />

        <ProductCard
          img={DermacosWhiteningSkinPolishBleachSet}
          text="Whitening Skin Polish Bleach Set, Pack Of 3"
          price="2199/-"
          reducedPrice="1799/-"
          productCode="MZ80120008LABY"
          shortDetail="Product Feature: Whitening
Package Includes: 1 x Oxygen Skin Gloss Polish, 1 x Dust Free Facial Blond Brightener, 1 x Harmless Facial Blond Activater
"
        />
        <ProductCard
          img={BiPureAcneCream}
          text="Bi Pure Acne Cream"
          price="849/-"
          reducedPrice="619/-"
          productCode="MZ100700011RTBY"
          shortDetail="Package Includes: 1 x Bi Pure Acne Cream"
        />
        <ProductCard
          img={SaeedGhaniFootAndHandCream}
          text="Saeed Ghani Foot & Hand Whitening Cream 150g"
          price="1099/-"
          reducedPrice="959/-"
          productCode="MZ23800030SKTS"
          shortDetail="Material: Cream
Nourishes And Moisturizes Your Skin Through All Seasons
Gives Your Skin A Natural Glow And Makes It Brighter
Helps Fight Acne And Skin Cracks To Give You Healthier Skin
Gives you younger-Looking Skin
Package Includes: 1 x Hand Cream"
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
          img={bioaouaUnderArmCream}
          text="Underarm Whitening Cream"
          price="899/-"
          reducedPrice="649/-"
          shortDetail="Gives A Natural Glow To Your Skin, Improve Complexion, Can Be Used On Private Parts"
          rating="4.0"
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
