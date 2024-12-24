import React, { useState, useEffect, useRef } from "react";
import allProducts from "../../../allProducts";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  function searchProducts(e) {
    const value = e.target.value;
    setSearch(value);
    if (value === "") {
      setSearchedProduct([]);
      setIsSearchActive(false); // Hide results if input is empty
      return;
    }
    const filteredProducts = allProducts.filter((product) =>
      product.text.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedProduct(filteredProducts);
    setIsSearchActive(true); // Show results when typing
  }

  function navigateToProduct(text, category) {
    let formattedProductName = text.replace(/\s+/g, "-").toLowerCase();
    setSearch("");
    setSearchedProduct([]);
    setIsSearchActive(false); // Hide results after navigation
    navigate(`/${category}/${formattedProductName}`);
  }

  // Hide search results on outside click or scroll
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchActive(false); // Only hide the results, don't modify the products array
        setSearch("");
      }
    }

    function handleScroll() {
      setIsSearchActive(false); // Hide search results on scroll
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full md:max-w-2xl p-1 mt-1 mx-auto z-20 md:z-50 sticky top-14 md:top-1 "
      ref={searchRef}
    >
      <div className="flex rounded-md border-2 border-pink-500 overflow-hidden shadow-lg">
        <input
          type="text"
          placeholder="Search products"
          value={search}
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2 md:text-sm"
          onChange={searchProducts}
        />

        <button
          type="button"
          className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 transition-colors px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="20px"
            className="fill-white"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </button>
      </div>
      {isSearchActive && searchedProduct.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-md shadow-lg p-4 z-50 max-h-60 overflow-y-auto">
          <h2 className="text-lg font-semibold text-pink-500 mb-2">
            Search Results
          </h2>
          <ul className="space-y-2">
            {searchedProduct.map((product, index) => (
              <li
                key={index}
                className="flex items-center p-2 border-b border-gray-200 hover:bg-pink-50 cursor-pointer"
                onClick={() =>
                  navigateToProduct(product.text, product.category)
                }
              >
                <img
                  src={product.img}
                  alt={product.text}
                  className="w-10 h-10 rounded-md mr-3"
                />
                <div className="flex flex-col">
                  <h3 className="text-gray-700">{product.text}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {search && searchedProduct.length === 0 && isSearchActive && (
        <p className="mt-4 p-3 bg-pink-300 mx-auto rounded-md text-center">
          No products found.
        </p>
      )}
    </div>
  );
}

export default Search;
