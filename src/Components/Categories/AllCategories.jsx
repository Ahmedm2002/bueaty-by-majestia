import React from "react";
import serums from "./Images/serums.jpg";
import toner from "./Images/toner.jpg";
import cleanser from "./Images/cleanser.jpg";
import moisturizers from "./Images/moisturizers.jpg";
import masks from "./Images/masks.jpg";
import sunblock from "./Images/sunblock.jpg";
import faceWash from "./Images/faceWash.jpg";
import facialKit from "./Images/facialKit.jpg";
import gel from "./Images/gel.jpg";
import nightSkinCare from "./Images/nightSkinCare.jpg";
import BodyLotion from "./Images/BodyLotion.jpg";
import BrighteningCream from "./Images/BrighteningCream.jpg";
import Category from "./Category";
function AllCategories() {
  return (
    <>
      <section className="bg-white text-gray-700 sm:py-16 lg:py-8 py-12 ">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Explore Categories
          </h2>
        </div>
        <div class="flex flex-wrap flex-row mt-6 md:mt-10 justify-center items-center md:gap-6 gap-3">
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
          <Category img={BodyLotion} name="Body Lotions" url="bodyLotions" />
          <Category
            img={BrighteningCream}
            name="Brightening Creams"
            url="brighteningCreams"
          />
          {/* <Category img={toner} name="Toner" /> */}
          {/* <Category img={moisturizers} name="Moisturizers" /> */}
        </div>
      </section>
    </>
  );
}

export default AllCategories;
