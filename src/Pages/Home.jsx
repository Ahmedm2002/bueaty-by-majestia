import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import AllCategories from "../Components/Categories/AllCategories";
import banner from "../../public/banner.png";
function Home() {
  return (
    <>
      <img src={banner} alt="" className="w-full sm:h-auto h-72" />
      <AllCategories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
