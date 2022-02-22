import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../firebase";
export const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      {user ? (
        <nav
          className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm  font-bold font-mono"
          role="navigation"
        >
          <Link to="/" className="pl-32">
            <span className="text-green-500">Free</span>lancer
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
            <button
              className="p-1 border border-green-500 text-black font-bold hover:text-white hover:bg-green-500 rounded-lg"
              onClick={logout}
            >
              <Link to="/">Logout </Link>
            </button>
          </div>
        </nav>
      ) : (
        <nav
          className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-bold font-mono"
          role="navigation"
        >
          <Link to="/" className="pl-32">
            <span className="text-green-500">Free</span>lancer
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
            <Link className="p-4" to="/login">
              Login
            </Link>
            <Link
              className="p-1 border border-green-500 text-black  hover:text-white hover:bg-green-500 rounded-lg"
              to="/signup"
            >
              Create Account
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};
