import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-orange-600 pt-2">
      Developed by: &nbsp;
      <span>
        <a
          href="https://remarkable-bienenstitch-91d6fb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-600 tracking-wide p-1 rounded-lg border-radius: 6px "
        >
          Emmanuel Kaome
        </a>
      </span>
      | &copy;2022 All Rights Reserved
      <p className="pt-3 pb-2">
        Powered by: &nbsp;
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-600 tracking-wide p-1 rounded-lg border-radius:6px"
        >
          The Movie DB
        </a>
      </p>
    </div>
  );
};

export default Footer;
