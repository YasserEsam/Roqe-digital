import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
import Techs from "@/components/Techs";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import PortfolioSection from "@/components/projects/PortfolioSection";

export const metadata: Metadata = {
  title: "رقي ديجيتال | الصفحة الرئيسية",
  description: "موقع رقي ديجيتال",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
       <Techs /> 
      {/* <Brands /> */}
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <PortfolioSection />
      <Blog />
      <Contact />
    </>
  );
}
