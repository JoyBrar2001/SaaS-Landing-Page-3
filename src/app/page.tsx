"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Features from "@/sections/Features";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
    </>
  );
}
