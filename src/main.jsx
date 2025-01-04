import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// Pages

import Layout from "./Pages/Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";

//  Categories

import Sunblock from "./Components/Categories/Sunblock/Sunblock.jsx";
import FaceWash from "./Components/Categories/Face Wash/FaceWash.jsx";
import FacialKit from "./Components/Categories/Facial Kit/FacialKit.jsx";
import Gels from "./Components/Categories/Gels/Gels.jsx";
import NightSkinCare from "./Components/Categories/NightSkinCare/NightSkinCare.jsx";
import Cleansers from "./Components/Categories/Cleansers/Cleansers.jsx";
import BodyLotions from "./Components/Categories/BodyLotions/BodyLotions.jsx";
import BrighteningCream from "./Components/Categories/Brightening Cream/BrighteningCream.jsx";
import Serums from "./Components/Categories/Serums/Serums.jsx";
import FaceMasks from "./Components/Categories/Masks/FaceMasks.jsx";
import ProductDetails from "./Components/Product Cards/ProductDetails.jsx";
import CalculatePrice from "../CalculatePrice";
import CalculateDiscount from "../CalculateDiscount";
import Powders from "./Components/Categories/Powders/Powders.jsx";
import Toners from "./Components/Categories/Toners/Toners.jsx";
import PackOfs from "./Components/PackOfs/PackOfs.jsx";

// WhatsApp Logo
import whatsapp from "./assets/whatsapp.png";

const App = () => {
  function chatOnWhatsapp() {
    window.open("https://wa.me/+923400545395", "_blank");
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="aboutUs"
          element={<AboutUs />}
        />
        <Route
          path="contactUs"
          element={<ContactUs />}
        />
        <Route
          path="sunblock"
          element={<Sunblock />}
        />
        <Route
          path="faceWash"
          element={<FaceWash />}
        />
        <Route
          path="facialKit"
          element={<FacialKit />}
        />
        <Route
          path="gels"
          element={<Gels />}
        />
        <Route
          path="nightSkinCare"
          element={<NightSkinCare />}
        />
        <Route
          path="cleansers"
          element={<Cleansers />}
        />
        <Route
          path="bodyLotions"
          element={<BodyLotions />}
        />
        <Route
          path="brighteningCreams"
          element={<BrighteningCream />}
        />
        <Route
          path="serums"
          element={<Serums />}
        />
        <Route
          path="facemasks"
          element={<FaceMasks />}
        />
        <Route
          path="powders"
          element={<Powders />}
        />
        <Route
          path="toners"
          element={<Toners />}
        />
        <Route
          path="/:category/:productName"
          element={<ProductDetails />}
        />
        <Route
          path="calculatePrice"
          element={<CalculatePrice />}
        />
        <Route
          path="calculateDiscount"
          element={<CalculateDiscount />}
        />
        <Route
          path="packofs"
          element={<PackOfs />}
        />
      </Route>
    )
  );

  return (
    <>
      <img
        src={whatsapp}
        onClick={() => chatOnWhatsapp()}
        className="w-12 h-12 fixed bottom-10 right-5 z-50 hover:cursor-pointer"
      />
      <RouterProvider router={router} />;
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
