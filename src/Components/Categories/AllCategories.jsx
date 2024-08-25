import React from "react";
import serums from "./Images/serums.jpg";
import toner from "./Images/toner.jpg";
import cleanser from "./Images/cleanser.jpg";
import moisturizers from "./Images/moisturizers.jpg";
import masks from "./Images/masks.jpg";
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
        <div class="flex flex-wrap flex-row mt-6 md:mt-10 justify-center items-center md:gap-6 gap-4">
          <Category img={serums} name="Serum" />
          <Category img={toner} name="Toner" />
          <Category img={masks} name="Masks" />
          <Category img={moisturizers} name="Moisturizers" />
          <Category img={cleanser} name="Cleanser" />
        </div>
      </section>
    </>
  );
}

export default AllCategories;
