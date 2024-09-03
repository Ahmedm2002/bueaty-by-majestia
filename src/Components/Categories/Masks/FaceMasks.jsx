import React from "react";
import ProductCard from "../../Product Cards/ProductCard";

import {
  OliveBlackMask,
  PeelOffMask,
  SadoerGoldMask,
  StrawberryMaskStick,
  DrRaheelGoldenCollagen,
  VitaminCAichunBueaty,
} from "./Images/MasksImgs";

import {
  VitaminCAichunBueatyDesc,
  OliveBlackMaskDesc,
  DrRaheelGoldenCollagenDesc,
  StrawberryMaskStickDesc,
  SadoerGoldMaskDesc,
  PeelOffMaskDesc,
} from "./FaceMasksDesc";

function FaceMasks() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Masks
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={VitaminCAichunBueaty}
          text="Vitamin C Honey Peel-Off Face Mask"
          price="999/-"
          reducedPrice="719/-"
          productCode="MZ65500101CLSCL"
          shortDetail={VitaminCAichunBueatyDesc}
        />

        <ProductCard
          img={OliveBlackMask}
          text="Dead Skin Remover Peel-Off Face Mask"
          price="599/-"
          reducedPrice="399/-"
          productCode="MZ19920102RAAS"
          shortDetail={OliveBlackMaskDesc}
        />

        <ProductCard
          img={DrRaheelGoldenCollagen}
          text="Dr.Raheel Peel-Off Face Mask"
          price="899/-"
          reducedPrice="599/-"
          productCode=" MZ55700000027BYBR"
          shortDetail={DrRaheelGoldenCollagenDesc}
        />

        <ProductCard
          img={StrawberryMaskStick}
          text="Moisturizing Stick Mask"
          price="699/-"
          reducedPrice="529/-"
          productCode="MZ90000000031MJCN"
          shortDetail={StrawberryMaskStickDesc}
        />

        <ProductCard
          img={SadoerGoldMask}
          text="Retinol Snake Venom Peptide Anti-Wrinkle, Gold Mask"
          price="899/-"
          reducedPrice="599/-"
          productCode="MZ19920011RAAS"
          shortDetail={SadoerGoldMaskDesc}
        />

        <ProductCard
          img={PeelOffMask}
          text="Rejuvenating Peel-Off Face Mask"
          price="499/-"
          reducedPrice="359/-"
          productCode="MZ19920101RAAS"
          shortDetail={PeelOffMaskDesc}
        />
      </div>
    </>
  );
}

export default FaceMasks;
