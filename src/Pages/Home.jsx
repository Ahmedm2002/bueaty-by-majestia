import React from "react";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts.jsx";
import AllCategories from "../Components/Categories/AllCategories.jsx";
function Home() {
  return (
    <>
      <AllCategories />
      <FeaturedProducts />
    </>
  );
}

export default Home;
