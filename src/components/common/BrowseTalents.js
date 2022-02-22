import React from "react";
import { SearchSection } from "../Pages/SearchSection";
import { ProfileCard } from "../Pages/ProfileCard";
import { Navbar } from "../Pages/Navbar";
export const BrowseTalents = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <ProfileCard />
    </>
  );
};
