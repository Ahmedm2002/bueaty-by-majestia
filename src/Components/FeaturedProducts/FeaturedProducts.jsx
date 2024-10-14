import React from "react";
import ProductCard from "../Product Cards/ProductCard";
import { featuredProductsArr } from "./FeaturedProducts.js";

function FeaturedProducts() {
  return (
    <>
      <section className="bg-white py-6 text-gray-700 sm:py-16 lg:py-8">
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
            {featuredProductsArr.map((product, index) => (
              <ProductCard
                key={index}
                img={product.img}
                text={product.text}
                price={product.price}
                reducedPrice={product.reducedPrice}
                productCode={product.productCode}
                shortDetail={product.shortDetail}
                rating={product.rating}
                category="featuredproduct"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProducts;
