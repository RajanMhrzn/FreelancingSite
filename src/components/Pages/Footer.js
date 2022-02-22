import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="flex flex-col-3 justify-center pl-32 pr-32 pt-20 pb-20 gap-x-20 gap-y-16 ">
        <div>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">
            Freelancer
          </h1>
          <h3 className=" flex-col text-gray-500">
            lets you hire affordable freelancers, remote workers, and agencies
            based on their reviews and ratings.
          </h3>
        </div>

        <div>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">
            About
          </h1>
          <h4 className=" flex-col text-gray-500">Our Story</h4>
          <h4 className=" flex-col text-gray-500">FAQ</h4>
          <h4 className=" flex-col text-gray-500">Privacy</h4>
          <h4 className=" flex-col text-gray-500">Terms of Service</h4>
        </div>

        <div>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">
            Support
          </h1>
          <h4 className=" flex-col text-gray-500">freelacer@state.com</h4>
          <h4 className=" flex-col text-gray-500">Join Facebook Group</h4>
        </div>

        <div>
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-white">
            Address
          </h1>
          <h4 className=" flex-col text-gray-500">Kathmandu,Nepal</h4>
          <div className="flex gap-x-5">
            <Link to="/facebook.com">
              <BsFacebook size="32px" color="white" />
            </Link>
            <Link to="/facebook.com">
              <BsInstagram size="32px" color="white" />
            </Link>
            <Link to="/facebook.com">
              <BsTwitter size="32px" color="white" />
            </Link>
          </div>
        </div>
      </div>

      <h3 className="text-gray-600 text-center pb-5">All Rights Reserved</h3>
    </footer>
  );
};
