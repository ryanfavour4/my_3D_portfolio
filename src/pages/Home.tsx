import React from "react";
import HeroSection from "../components/HeroSection";
import BoxSection from "../components/BoxSection";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMap from "../components/AboutMap";
import Features from "../components/Features";
import Reviews from "../components/Reviews/Reviews";
import FollowMe from "../components/FollowMe";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <BoxSection />
      <Skills />
      <Projects />
      <AboutMap />
      <Features />
      <Reviews/>
      <FollowMe />
      <Footer/>
    </div>
  );
}

export default Home;
