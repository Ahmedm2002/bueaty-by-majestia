import React from "react";
import allProducts from "../../../allProducts";
import ProductCard from "../Product Cards/ProductCard";

function PackOfs() {
  let packOfs = allProducts.filter((product) =>
    product.text.toLowerCase().includes("pack of")
  );

  packOfs = packOfs.reverse();

  return (
    <>
      <section className="bg-white py-6 text-gray-700 sm:py-16 lg:py-8">
        <div className="mx-auto max-w-screen-xl ">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Pack Ofs
            </h2>
          </div>
          <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-8 justify-center">
            {packOfs.map((product, index) => (
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

export default PackOfs;
