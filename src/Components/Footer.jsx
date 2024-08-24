import React from "react";

function Footer() {
  return (
    <footer className="mt-auto rounded-lg shadow text-center text-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-lg">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Beauty By Majestia
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
