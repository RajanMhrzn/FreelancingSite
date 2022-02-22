import React from "react";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
  return (
    <div className="flex items-center border border-gray-600  shadow-sm ml-32 mr-32 mt-16">
      <div className="flex flex-col p-4">
        <img
          src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
          alt=""
          className="rounded-full w-16 h-16"
        />
        <p className="text-gray-500">$20/hr</p>
      </div>
      <div className="flex flex-col">
        <Link to="/profile" className="font-bold text-gray-600">
          Jane Doe
        </Link>
        <h3 className="text-gray-600">
          Digital Marketer & SEO Expert and Music Promoter
        </h3>
        <div className="flex">
          <h3 className="bg-gray-300 px-3 py-1 rounded-full w-auto mb-1 mr-1">
            digital marketing
          </h3>
          <h3 className="bg-gray-300 px-3 py-1 rounded-full w-auto mb-1 mr-1">
            seo expert
          </h3>
          <h3 className="bg-gray-300 px-3 py-1 rounded-full w-auto mb-1 mr-1">
            Facebook Marketing
          </h3>
        </div>
      </div>
    </div>
  );
};
