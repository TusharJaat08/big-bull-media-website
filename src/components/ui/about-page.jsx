import React from "react"
import { Button } from "./button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Note: Swapped next/image and next/link for standard HTML tags since this is a Vite project

export default function AboutPage() {
  return (
    <div id="about" className="flex flex-col bg-black">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="py-24 md:py-32 bg-black border-t border-neutral-900">
        <div className="mx-auto max-w-7xl space-y-6 px-6">
          <img
            className="rounded-xl object-cover w-full h-[240px] md:h-[460px] border border-neutral-800"
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200"
            alt="AI abstract neural network"
            loading="lazy"
          />

          <div className="grid gap-6 md:grid-cols-2 md:gap-12 mt-12">
            <h1 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight">
              The Nexus <span className="text-neutral-500">Ecosystem</span>{" "}
              <span className="text-neutral-400">
                unifies generative logic with immersive digital physics.
              </span>
            </h1>
            <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
              <p>
                Nexus AI is evolving beyond standard agency workflows. We deploy a proprietary ecosystem — 
                from programmatic SEO architectures to customized AI qualification engines that help modern founders innovate.
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 pr-4 rounded-none group"
              >
                <a href="#contact">
                  <span>Deploy Systems</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="py-24 md:py-32 border-t border-neutral-900 bg-neutral-950/30">
        <div className="mx-auto max-w-7xl space-y-16 px-6">

          {/* Header */}
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
              Our Capabilities
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Nexus AI is a passionate team of creative technologists dedicated to engineering 
              leverage that empowers B2B brands to dominate organic search and close metrics.
            </p>
          </div>

          {/* ---------------- LAST THREE CARDS (NEW LAYOUT) ---------------- */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">
            
            {/* LEFT BIG IMAGE */}
            <div className="md:flex-1">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
                alt="AI Chat Visualization"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[360px] md:h-[100%] border border-neutral-800"
              />
            </div>

            {/* RIGHT TWO CARDS */}
            <div className="flex flex-col gap-6 md:flex-1">
              {/* FIRST CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 text-white shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-60 sm:h-64 md:h-48 w-full overflow-hidden"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600"
                    alt="Accelerate Growth Logic"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-neutral-900 to-transparent" />
                </motion.div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold tracking-tight">Algorithmic Scaling</h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    Our programmatic SEO and intelligent qualification layers drive innovation, efficiency, and measurable ROI for B2B brands.
                  </p>
                  <Button
                    variant="default"
                    className="mt-6 w-full sm:w-auto"
                  >
                    View Stack
                  </Button>
                </div>
              </motion.div>

              {/* SECOND CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600"
                  alt="3D Space"
                  className="h-full w-full object-cover min-h-[220px] sm:min-h-[240px] md:min-h-[220px]"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <h3 className="text-xl font-semibold tracking-tight">Immersive Physics</h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    WebGL and Spline-powered experiences transforming generic brand perception into Fortune-500 presence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
