import React from "react";
import { Content } from "../Pages/Content";
import { Navbar } from "../Pages/Navbar";
import { HeroSection } from "../Pages/HeroSection";
import { Footer } from "../Pages/Footer";
export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Content />
      <Footer />
    </>
  );
};
