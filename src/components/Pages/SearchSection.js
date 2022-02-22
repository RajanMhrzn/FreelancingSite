import React from "react";
import { Link } from "react-router-dom";
export const SearchSection = () => {
  return (
    <>
      <div>
        <div className="flex justify-between bg-gray-200">
          <div className="ml-32 mt-16 mb-10">
            <h1 className="font-bold text-gray-800 pb-2">
              Whom are you looing for?
            </h1>
            <div className="flex justify-between w-64 mb-2">
              <label className="flex items-center text-sm">
                <input type="radio" name="remember" className="mr-1" />
                UI/UX Designer
              </label>
              <label className="flex items-center text-sm">
                <input type="radio" name="remember" className="mr-1" />
                Web Developer
              </label>
            </div>
            <div className="flex justify-between w-64 mb-2">
              <label className="flex items-center text-sm ">
                <input type="radio" name="remember" className="mr-1" />
                UI/UX Designer
              </label>
              <label className="flex items-center text-sm ">
                <input type="radio" name="remember" className="mr-1" />
                Web Developer
              </label>
            </div>
            <div className="flex justify-between w-64 mb-2">
              <label className="flex items-center text-sm">
                <input type="radio" name="remember" className="mr-1" />
                UI/UX Designer
              </label>
              <label className="flex items-center text-sm">
                <input type="radio" name="remember" className="mr-1" />
                Web Developer
              </label>
            </div>
          </div>
          <div className="mr-32 mt-16">
            <h1 className="font-bold text-gray-800 pb-2">
              Or search by skills
            </h1>

            <div>
              <form class="m-4 flex items-center">
                <input
                  className="rounded-l-lg p-2 w-80 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white outline-none"
                  placeholder="Enter email or name or tag"
                />
                <Link
                  to="/profile-cards"
                  className="bg-green-500 px-5 py-2 rounded-r-md hover:text-white"
                >
                  Search
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
