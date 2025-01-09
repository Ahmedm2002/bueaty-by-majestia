import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-auto rounded-lg shadow text-center text-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-lg">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Beauty By Majestia
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
