import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 300]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black selection:bg-white selection:text-black">
      
      {/* Absolute Full Screen Spline Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" /> {/* Overlay for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" /> {/* Fades into page body */}
        <Spline scene="https://prod.spline.design/nBz0Tytg3eaE0PKz/scene.splinecode" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col items-center text-center mt-12"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-8 leading-[1]"
        >
          Scale with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600">
            Intelligent
          </span> Design.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed"
        >
          Big Bull Media is a hybrid agency blending Fortune 500-level 3D aesthetics with rigorous AI automation. We build the growth engines that dominate markets.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-semibold hover:bg-neutral-200 hover:scale-105 transition-all duration-300 rounded-lg group"
          >
            Book Growth Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] auto-underline after:bg-neutral-600 hover:after:bg-white pb-1"
          >
            Explore Capabilities
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
