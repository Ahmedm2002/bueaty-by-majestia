import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts.jsx";
import AllCategories from "../Components/Categories/AllCategories.jsx";
import Search from "../Components/Search/Search.jsx";
function Home() {
  return (
    <>
      <Search />
      <AllCategories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
