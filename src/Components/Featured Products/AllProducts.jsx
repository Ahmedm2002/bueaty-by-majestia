import React from "react";
import ProductCard from "./ProductCard";
import JadeRollerAndGuaSha from "./Images/JadeRollerAndGuaSha.jpeg";
import sunBlockPackOfThree from "./Images/sunBlockPackOfThree.jpg";
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
            <ProductCard
              img={JadeRollerAndGuaSha}
              text="Jade Roller And Gua Sha"
              price="2999/-"
              reducedPrice="1499/-"
              onSale={true}
              shortDetail="Material: Jade
Texture: Smooth
Product Feature: Rejuvenating, Treat Fine Lines"
            />
            <ProductCard
              img={sunBlockPackOfThree}
              text="Foaming Facial Cleanser"
              price="999/-"
              reducedPrice="499/-"
              shortDetail="A gentle enzyme and amino acid blend loosens makeup, oil and other impurities on the skin and in the pores"
              rating="5.0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
