import React from "react";
import Category from "./Category";

import {
  serums,
  faceWash,
  cleanser,
  masks,
  sunblock,
  facialKit,
  gel,
  nightSkinCare,
  BodyLotion,
  BrighteningCream,
  multaniMitti,
  toner,
} from "./CategoryImages/categoryImgs";

function AllCategories() {
  return (
    <>
      <section className="bg-white text-gray-700 sm:py-8 lg:py-8 py-4 ">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Explore Categories
          </h2>
        </div>
        <div className="flex flex-wrap flex-row mt-6 md:mt-10 justify-center items-center sm:gap-3 md:gap-6 gap-1">
          <Category
            img={BrighteningCream}
            name="Brightening Creams"
            url="brighteningCreams"
          />

          <Category img={sunblock} name="Sunblocks" url="sunblock" />
          <Category img={faceWash} name="Face Washs" url="faceWash" />
          <Category img={facialKit} name="Facial Kits" url="facialKit" />
          <Category img={gel} name="Gel" url="gels" />
          <Category
            img={nightSkinCare}
            name="Night Skin Care"
            url="nightSkinCare"
          />
          <Category img={cleanser} name="Cleansers" url="cleansers" />
          <Category img={multaniMitti} name="Powders" url="powders" />
          <Category img={BodyLotion} name="Body Lotions" url="bodyLotions" />
          <Category img={serums} name="Serums" url="serums" />
          <Category img={masks} name="Face Masks" url="facemasks" />
          <Category img={toner} name="Toners" url="toners" />
        </div>
      </section>
    </>
  );
}

export default AllCategories;
