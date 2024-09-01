import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import {
  ExfoliatingGel,
  ExfoliatorGel,
  RiceAndPeachGel,
  AloeVeraSmoothingGel,
  AloeveraGel,
} from "./Images/GelsImgs";

import {
  AloeVeraSmoothingGelDesc,
  AloeveraGelDesc,
  ExfoliatorGelDesc,
  RiceAndPeachGelDesc,
  XQMExfoliatingGelDesc,
} from "./GelsDesc";

function Gels() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Gels
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        <ProductCard
          img={AloeVeraSmoothingGel}
          text="Soothing Aloe Vera Gel"
          price="499/-"
          reducedPrice="229/-"
          productCode="MZ88300007UNQWD"
          shortDetail={AloeVeraSmoothingGelDesc}
        />

        <ProductCard
          img={AloeveraGel}
          text="Aloe Vera Gel Leaf Tube - 120ml"
          price="299/-"
          reducedPrice="239/-"
          productCode="MZ103420052FSBY"
          shortDetail={AloeveraGelDesc}
        />
        <ProductCard
          img={ExfoliatorGel}
          text="Exfoliator Face & Body Scrubbing Gel"
          price="349/-"
          reducedPrice="299/-"
          productCode="MZ103420045FSBY"
          shortDetail={ExfoliatorGelDesc}
        />
        <ProductCard
          img={RiceAndPeachGel}
          text="Rice And Peach Exfoliating Gel - Pack Of 2"
          price="1099/-"
          reducedPrice="959/-"
          productCode="MZ60320026MNSRPS"
          shortDetail={RiceAndPeachGelDesc}
          rating="5.0"
        />
        <ProductCard
          img={ExfoliatingGel}
          text="Exfoliating Gel"
          price="699/-"
          reducedPrice="549/-"
          productCode="MZ19920100RAAS"
          shortDetail={XQMExfoliatingGelDesc}
          rating="5.0"
        />
      </div>
    </>
  );
}

export default Gels;
