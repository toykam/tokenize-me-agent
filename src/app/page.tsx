"use client"

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FrameReadyWrapper from "@/components/FrameReadyWrapper";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowitWorks";
import Navbar from "@/components/Navbar";

export default function Home() {


  return (
    <FrameReadyWrapper>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
      </div>
    </FrameReadyWrapper>
  );
}
