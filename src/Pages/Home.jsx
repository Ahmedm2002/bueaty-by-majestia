import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import AllCategories from "../Components/Categories/AllCategories";
import banner from "../../public/banner.jpg";
function Home() {
  return (
    <>
      {/* <img src={banner} className="w-full h-96 md:w-[97%] mx-auto" /> */}
      <AllCategories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
