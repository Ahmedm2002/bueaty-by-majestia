import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Pages/Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import "./index.css";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Sunblock from "./Components/Categories/Sunblock/Sunblock";
import FaceWash from "./Components/Categories/Face Wash/FaceWash";
import FacialKit from "./Components/Categories/Facial Kit/FacialKit";
import Gels from "./Components/Categories/Gels/Gels";
import NightSkinCare from "./Components/Categories/NightSkinCare/NightSkinCare";
import Cleansers from "./Components/Categories/Cleansers/Cleansers";
import BodyLotions from "./Components/Categories/BodyLotions/BodyLotions";
import BrighteningCream from "./Components/Categories/Brightening Cream/BrighteningCream";
import Serums from "./Components/Categories/Serums/Serums";
import FaceMasks from "./Components/Categories/Masks/FaceMasks";
import ProductDetails from "./Components/Product Cards/ProductDetails";
import CalculatePrice from "../CalculatePrice";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="/sunblock" element={<Sunblock />} />
        <Route path="/faceWash" element={<FaceWash />} />
        <Route path="/facialKit" element={<FacialKit />} />
        <Route path="/gels" element={<Gels />} />
        <Route path="/nightSkinCare" element={<NightSkinCare />} />
        <Route path="/cleansers" element={<Cleansers />} />
        <Route path="/bodyLotions" element={<BodyLotions />} />
        <Route path="/brighteningCreams" element={<BrighteningCream />} />
        <Route path="/serums" element={<Serums />} />
        <Route path="/facemasks" element={<FaceMasks />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/calculatePrice" element={<CalculatePrice />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
