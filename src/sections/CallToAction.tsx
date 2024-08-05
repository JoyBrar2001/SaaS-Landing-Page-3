"use client";

import React, { useRef } from 'react';
import Button from '@/components/Button';
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <motion.div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage: `radial-gradient(50% 50% at 50% 35%, black, transparent)`,
            }}
          ></div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-Driven SEO for everyone.
            </h2>

            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4">
              Achieve clear, impactful results without the complexity.
            </p>

            <div className="flex justify-center mt-5">
              <Button>
                Join Wailist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;