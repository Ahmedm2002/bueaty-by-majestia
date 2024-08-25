import React from "react";
import ProductCard from "./ProductCard";
import serum from "./Images/serum.jpg";
import faceWash from "./Images/faceWash.jpg";
import moisturizer from "./Images/moisturizer.jpg";
import teaTreeOil from "./Images/teaTreeOil.jpg";

function FeaturedProducts() {
  return (
    <>
      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Our featured products
            </h2>
            {/* <p class="mt-4 text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p> */}
          </div>
          <div class="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
            <ProductCard
              img={serum}
              text="Serum"
              price="299/-"
              reducedPrice="149/-"
              shortDetail="Material: Oil Package Includes: 1 x Oil"
            />
            <ProductCard
              img={faceWash}
              text="Face Wash"
              price="2999/-"
              reducedPrice="1499/-"
              onSale={true}
              shortDetail="Material: Oil Package Includes: 1 x Oil"
            />
            <ProductCard
              img={teaTreeOil}
              text="Tea Tree Oil, 10 Ml"
              price="450/-"
              reducedPrice="199/-"
              shortDetail="Material: Oil Package Includes: 1 x Oil"
            />
            <ProductCard
              img={moisturizer}
              text="Body Moisturizer by Olivia"
              price="999/-"
              reducedPrice="499/-"
              shortDetail="Material: Oil Package Includes: 1 x Oil"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
