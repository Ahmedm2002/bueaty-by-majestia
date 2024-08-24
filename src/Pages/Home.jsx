import React from "react";

function Home() {
  return (
    <>
      <h2 className="text-xl mt-4 text-center">
        Home Page
        <br />
        begharto time dy ker ghaib na ho jya karo
        <span className="text-4xl">Sharam Karo</span>
      </h2>
      <br />

      <p className="text-center">
        Categories and featured products will be listed here{" "}
      </p>

      <br />
      <p className="text-center font-bold">
        All products will be listed on the particular category <br />
        mtlb har category ka product os ke page py nazar aye ga or main page per
        sirf categories or featured products nazar ayn ge
      </p>

      <br />

      <p className="text-center text-3xl text-red-700">
        Color Scheme can be changed or open for changes
      </p>
    </>
  );
}

export default Home;
