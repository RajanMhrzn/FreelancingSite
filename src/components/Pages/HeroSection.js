import React from "react";
import { Link } from "react-router-dom";
import HeroSectionImage from "../images/HeroSection-image.jpg";
export const HeroSection = () => {
  return (
    <hero className="flex">
      <div className="bg-white h-screen flex flex-col justify-center pl-32 ">
        <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-green-600 ">
          Hire best freelancer <br />
          based on reviews
        </h1>

        <h3 className=" flex-col text-4xl pt-3 pb-3">
          Explore top rated freelancers
        </h3>

        <Link
          to="/browse-talents"
          className="flex items-center bg-green-600 py-6 px-10 rounded-lg hover:shadow-lg hover:bg-green-800 text-white transition duration-300 ease-in w-52"
        >
          Browse Talents
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div>
        <img
          src={HeroSectionImage}
          alt="a boy with laptop and knowledge"
          className="h-screen"
        />
      </div>
    </hero>
  );
};
