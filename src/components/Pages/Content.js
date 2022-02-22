import React from "react";
import { Link } from "react-router-dom";
import ContentOne from "../images/Content-1.png";
import ContentTwo from "../images/Content-2.png";
import ContentThree from "../images/Content-3.png";

export const Content = () => {
  return (
    <>
      <content className="flex gap-x-16 bg-gray-200">
        <div>
          <img
            src={ContentOne}
            alt="a boy with laptop and knowledge"
            className="h-fit flex justify-between items-center pl-32 mt-32"
          />
        </div>
        <div className="h-screen flex flex-col justify-center pr-20 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl ">
            Collect reviews from your <br /> existing clients.
          </h1>

          <h3 className=" flex-col text-3xl pt-3 pb-3">
            It will take 60sec too invite your clients.
          </h3>

          <Link
            to="/create-profile"
            className="flex items-center bg-green-600 py-6 px-10 rounded-lg hover:shadow-lg hover:bg-green-800 text-white transition duration-300 ease-in w-60"
          >
            Create Your Profile
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
      </content>

      <content className="flex ">
        <div className="h-screen flex flex-col justify-center pl-32 pr-12 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl ">
            Upload your work and get hired.
          </h1>

          <h3 className=" flex-col text-3xl pt-3 pb-3">
            You can add projects with your reviews.
          </h3>

          <Link
            to="/create-profile"
            className="flex items-center   py-6 px-10 rounded-lg hover:shadow-lg bg-green-600 text-white transition duration-300 ease-in w-40"
          >
            View More
          </Link>
        </div>

        <div>
          <img
            src={ContentTwo}
            alt="a boy with laptop and knowledge"
            className="h-fit flex justify-between items-center  mt-32 w-9/12"
          />
        </div>
      </content>

      <content className="flex gap-x-16 bg-gray-200">
        <div>
          <img
            src={ContentThree}
            alt="a boy with laptop and knowledge"
            className="h-fit flex justify-between items-center pl-32 mt-32"
          />
        </div>
        <div className="h-screen flex flex-col justify-center pr-20 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl ">
            Browse and hire top freelancers.
          </h1>

          <h3 className=" flex-col text-3xl pt-3 pb-3">
            Hire freelancers based on verified reviews
          </h3>

          <Link
            to="/create-profile"
            className="flex items-center bg-green-600 py-6 px-10 rounded-lg hover:shadow-lg hover:bg-green-800 text-white transition duration-300 ease-in w-60"
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
      </content>
    </>
  );
};
