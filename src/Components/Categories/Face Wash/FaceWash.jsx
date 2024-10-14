import React from "react";
import ProductCard from "../../Product Cards/ProductCard";
import { FaceWashArr } from "./FaceWash";

function FaceWash() {
  return (
    <>
      <h1 className="text-2xl text-center font-semibold my-4">
        Products in Face Wash
      </h1>
      <div className="mt-4 lg:mt-8 flex flex-row flex-wrap gap-12 justify-center">
        {FaceWashArr.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            text={product.text}
            price={product.price}
            reducedPrice={product.reducedPrice}
            productCode={product.productCode}
            shortDetail={product.shortDetail}
            rating={product.rating}
            category="faceWash"
          />
        ))}
      </div>
    </>
  );
}

export default FaceWash;
