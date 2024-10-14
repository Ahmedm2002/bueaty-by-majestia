import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import { NightCreamsArr } from "./NightSkinCare";

function NightSkinCare() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Night Skin Care
      </h1>
      <div className="mt- lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        {NightCreamsArr.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            text={product.text}
            price={product.price}
            reducedPrice={product.reducedPrice}
            productCode={product.productCode}
            shortDetail={product.shortDetail}
            rating={product.rating}
            category="nightSkinCare"
          />
        ))}
      </div>
    </>
  );
}

export default NightSkinCare;
