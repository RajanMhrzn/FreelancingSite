import React from "react";
import { Link } from "react-router-dom";
export const UserNavbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link className="pl-32" to="/">
        Freelance
      </Link>
      <div className="px-4 md:hidden cursor-pointer">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-32 md:block hidden">
        <Link className="p-4" to="/browse-talents">
          Browse Talents
        </Link>
        <Link className="p-4" to="/reacent-reviews">
          Recent Reviews
        </Link>
      </div>
    </nav>
  );
};
