import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts.jsx";
import AllCategories from "../Components/Categories/AllCategories.jsx";
import Search from "../Components/Search/Search.jsx";
import PackOfs from "../Components/PackOfs/PackOfs.jsx";
import Slider from "../Components/Slider/Slider.jsx";

function Home() {
  return (
    <>
      <Search />
      <Slider />
      <AllCategories />
      {/* <FeaturedProducts /> */}
      <PackOfs />
    </>
  );
}

export default Home;
