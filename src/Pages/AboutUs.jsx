import React from "react";
import hamza from "../assets/owners/hamza.jpg";
import adeel from "../assets/owners/adeel.jpg";
import abdullah from "../assets/owners/abdullah.jpg";

function AboutUs() {
  return (
    <>
      <div className="w-[90%] mt-6 md:mt-10 flex flex-col md:flex-row items-center p-6 mx-auto rounded-lg shadow-lg">
        <h1 className="text-3xl md:w-1/4 font-bold text-pink-900">About Us</h1>
        <p className="md:w-3/4 text-lg leading-relaxed text-gray-700">
          At Bueaty by Majestia, we believe that true beauty comes from
          embracing your natural self. Founded by a team of skincare
          enthusiasts, we are dedicated to offering high-quality,
          scientifically-backed skincare products that cater to all skin types
          and needs. Our mission is to empower individuals to feel confident in
          their own skin by providing products that not only enhance beauty but
          also nurture and protect the skin. We are committed to sustainability
          and ethical practices, ensuring that every product we create is as
          kind to the environment as it is to your skin.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <img
            src={hamza}
            alt="Muhammad Hamza"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-black text-xl text-center mt-2">
            Muhammad Hamza
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={adeel}
            alt="Adeel Masood"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-black text-xl text-center mt-2">Adeel Masood</h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={abdullah}
            alt="Abdullah Naveed"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-black text-xl text-center mt-2">
            Abdullah Naveed
          </h2>
        </div>
      </div>

      <div className="mt-10 text-center">
        <h1 className="text-3xl font-bold text-pink-900">Our Mission</h1>
        <p className="mt-4 my-4 text-lg text-gray-700 max-w-4xl mx-auto">
          Our mission at Bueaty by Majestia is to revolutionize the skincare
          industry by creating products that are not only effective but also
          ethically made. We strive to inspire confidence by promoting self-care
          and offering solutions that cater to the unique needs of every
          individual. Our commitment to innovation and sustainability drives us
          to continually develop products that protect, enhance, and celebrate
          the natural beauty in all of us. We believe in transparency and
          integrity, ensuring that every ingredient is carefully selected and
          every product is crafted with the utmost care and attention to detail.
        </p>
      </div>
    </>
  );
}

export default AboutUs;
