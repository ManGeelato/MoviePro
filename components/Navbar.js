import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 height-100">
      <Link href="/">
        <div className="font-bold text-orange-600 p-4 max-w-7xl mx-6 tracking-widest text-2xl cursor-pointer">
          MoviePro
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
