import React from "react";
import email from "../assets/contact us logos/email.png";
import facebook from "../assets/contact us logos/facebook.png";
import linkedIn from "../assets/contact us logos/linkedin.png";
import instagram from "../assets/contact us logos/instagram.png";

function ContactUs() {
  return (
    <>
      <h3 className="text-3xl text-center mt-4 md:mt-6 text-pink-900 font-semibold">
        Contact Us
      </h3>
      <div className="mt-6 md grid md:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
        <div>
          <h1 className="text-pink-900 text-2xl font-semibold">Let's Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center shrink-0">
                  <img src={email} classNameName="" alt="email" />
                </div>
                <a href="javascript:void(0)" className="text-sm ml-4">
                  <small className="block ">Mail</small>
                  <p classNameName="mt-0">bueatybymajestia@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Socials</h2>

            <ul className="flex mt-4 space-x-4">
              <li className="h-10 w-10 flex items-center justify-center shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="h-10 w-10 flex items-center justify-center shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={linkedIn} alt="linkedin" />
                </a>
              </li>
              <li className="h-10 w-10 flex items-center justify-center shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
          ></textarea>
          <button
            type="button"
            className="text-white bg-pink-600 hover:bg-pink-700 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
