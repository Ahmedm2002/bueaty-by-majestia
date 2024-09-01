import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import {
  RiceFaceWash,
  DeepFreshFaceWash,
  DrRashelFaceWash,
  AcneControlTea,
  SQMBlackHeadClearing,
  GalipWashScrubMask,
  GoldernPearlTripleProtection,
} from "./Images/FaceWashImgs";

import {
  DeepFreshFaceWashDesc,
  GalipWashScrubMaskDesc,
  RiceFaceWashDesc,
  GoldernPearlTripleProtectionDesc,
  DrRashelFaceWashDesc,
  AcneControlTeaDesc,
  SQMBlackHeadClearingDesc,
} from "./FaceWashsDesc";

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
          shortDetail={DeepFreshFaceWashDesc}
        />

        <ProductCard
          img={GalipWashScrubMask}
          text="3 in 1 Face & Body Scrubbing Mask, 170g"
          price="799/-"
          reducedPrice="519/-"
          productCode="MZ25200000011GLUS"
          shortDetail={GalipWashScrubMaskDesc}
        />

        <ProductCard
          img={RiceFaceWash}
          text="Rice Face Wash, 120 Ml"
          price="1099/-"
          reducedPrice="849/-"
          productCode="MZ69120300AIBSFD"
          shortDetail={RiceFaceWashDesc}
        />

        <ProductCard
          img={GoldernPearlTripleProtection}
          text="Sunblock Tripple Protection - 200g"
          price="1499/-"
          reducedPrice="1169/-"
          productCode="MZ37000012GWAYBYMT"
          shortDetail={GoldernPearlTripleProtectionDesc}
        />

        <ProductCard
          img={DrRashelFaceWash}
          text="Dr.Rashel's Purifying Face Wash"
          price="999/-"
          reducedPrice="699/-"
          productCode={null}
          shortDetail={DrRashelFaceWashDesc}
        />
        <ProductCard
          img={AcneControlTea}
          text="Acne Control Tea Tree Face Wash"
          price="1299/-"
          reducedPrice="939/-"
          productCode="MZ100320007TEBYEL"
          shortDetail={AcneControlTeaDesc}
          rating="5.0"
        />
        <ProductCard
          img={SQMBlackHeadClearing}
          text="Blackhead Clearing Oil-Free Salicylic Acid Aloe Scrub - 170g"
          price="999/-"
          reducedPrice="659/-"
          productCode="MZ485000036ECKSP"
          shortDetail={SQMBlackHeadClearingDesc}
          rating="5.0"
        />
      </div>
    </>
  );
}

export default FaceWash;
