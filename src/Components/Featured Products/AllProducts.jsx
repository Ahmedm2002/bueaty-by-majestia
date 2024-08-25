import React from "react";
import ProductCard from "./ProductCard";
import serum from "./Images/serum.jpg";
import faceWash from "./Images/faceWash.jpg";
import moisturizer from "./Images/moisturizer.jpg";
import teaTreeOil from "./Images/teaTreeOil.jpg";
import cleanser from "./Images/facialCleanser.jpg";
function FeaturedProducts() {
  return (
    <>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-8">
        <div className="mx-auto max-w-screen-xl ">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Our featured products
            </h2>
            {/* <p className="mt-4 text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p> */}
          </div>
          <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
            <div className="w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5">
              <ProductCard
                img={faceWash}
                text="Face Wash"
                price="2999/-"
                reducedPrice="1499/-"
                onSale={true}
                shortDetail="Material: Oil Package Includes: 1 x Oil"
              />
            </div>
            <div className="w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5">
              <ProductCard
                img={teaTreeOil}
                text="Tea Tree Oil, 10 Ml"
                price="450/-"
                reducedPrice="199/-"
                shortDetail="Material: Oil Package Includes: 1 x Oil"
              />
            </div>
            <div className="w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5">
              <ProductCard
                img={moisturizer}
                text="Body Moisturizer by Olivia"
                price="999/-"
                reducedPrice="499/-"
                shortDetail="Material: Oil Package Includes: 1 x Oil"
                rating="5.0"
              />
            </div>
            <div className="w-[90%] sm:w-1/3 md:w-1/4 lg:w-1/5">
              <ProductCard
                img={cleanser}
                text="Foaming Facial Cleanser"
                price="999/-"
                reducedPrice="499/-"
                shortDetail="A gentle enzyme and amino acid blend loosens makeup, oil and other impurities on the skin and in the pores"
                rating="5.0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
