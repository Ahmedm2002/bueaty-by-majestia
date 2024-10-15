import React from "react";
import Category from "./Category";
import { categoriesList } from "./Categories";

function AllCategories() {
  return (
    <>
      <section className="bg-white text-gray-700 sm:py-8 lg:py-8 py-4 ">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Explore Categories
          </h2>
        </div>
        <div className="flex flex-wrap flex-row mt-6 md:mt-10 justify-center items-center sm:gap-3 md:gap-6 gap-1">
          {categoriesList.map((category, index) => (
            <Category
              key={index}
              name={category.name}
              url={category.url}
              img={category.img}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AllCategories;
