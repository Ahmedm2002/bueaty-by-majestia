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
function BrighteningCream() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Brightening Cream
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
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
