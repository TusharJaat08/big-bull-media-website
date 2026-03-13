import React from "react"
import { Card, CardContent, CardHeader } from "./card"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="mx-auto max-w-7xl space-y-12 px-6 md:space-y-20">
        
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
          <h2 className="text-4xl font-medium lg:text-5xl text-white tracking-tight">
            Engineered for founders, <br/>
            loved by <span className="text-neutral-500">growth teams.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Big Bull Media is evolving to be more than just an agency. We support an entire infrastructure—from 3D frontend aesthetics to the APIs and automated platforms helping SaaS businesses scale.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          
          {/* Main Top Left Span Card */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-8 lg:row-span-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent pointer-events-none" />
            <CardHeader className="relative z-10 px-0 pt-0">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </div>
                  <span className="text-white font-medium tracking-widest uppercase text-xs">CloudScale Inc.</span>
              </div>
            </CardHeader>
            <CardContent className="px-0 pb-0 relative z-10">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-8">
                <p className="text-2xl font-medium text-white leading-relaxed tracking-tight">
                  Big Bull Media completely transformed our inbound pipeline. We replaced two generic SDRs with their AI qualification agent, and our close rate jumped 45% because sales only speaks to red-hot leads. The sheer leverage is a game-changer for modern SaaS.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <Avatar className="h-14 w-14 border border-neutral-800">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
                      alt="Sarah Jenkins"
                      loading="lazy"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>

                  <div>
                    <cite className="text-sm font-medium text-white not-italic">Sarah Jenkins</cite>
                    <span className="text-neutral-500 block text-sm mt-0.5">CMO, CloudScale</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Top Right Span Card */}
          <Card className="md:col-span-2 sm:p-6 group hover:border-neutral-700 transition-colors">
            <CardContent className="h-full px-0 py-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-neutral-300 leading-relaxed">
                  The 3D website they built doesn't just look incredible—it converts. Tying the immersive WebGL experience into a seamless automated backend changed how our investors view us.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-4 mt-4">
                  <Avatar className="h-12 w-12 border border-neutral-800">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150"
                      alt="Marcus Thorne"
                      loading="lazy"
                    />
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-white not-italic">Marcus Thorne</cite>
                    <span className="text-neutral-500 block text-sm mt-0.5">Founder, Zenith Protocol</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Bottom Middle Card */}
          <Card className="sm:p-6 group hover:border-neutral-700 transition-colors">
            <CardContent className="h-full px-0 py-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-neutral-400 leading-relaxed text-sm">
                  Within 3 months, their programmatic SEO engine generated over 400 targeted assets. Organic traffic 10x'd autonomously.
                </p>

                <div className="grid items-center gap-4 grid-cols-[auto_1fr] mt-auto">
                  <Avatar className="h-10 w-10 border border-neutral-800">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
                      alt="Elena Rodriguez"
                      loading="lazy"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-xs font-medium text-white not-italic">Elena Rodriguez</cite>
                    <span className="text-neutral-500 block text-[10px] uppercase tracking-widest mt-1">VP Growth</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Bottom Right Card */}
          <Card className="sm:p-6 bg-neutral-900/50 group hover:border-neutral-700 transition-colors">
            <CardContent className="h-full px-0 py-0">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-neutral-400 leading-relaxed text-sm">
                  The automated outbound pipelines scraped and enriched intent data so perfectly that our sales cycle halved in under a month.
                </p>

                <div className="grid grid-cols-[auto_1fr] items-center gap-4 mt-auto">
                  <Avatar className="h-10 w-10 border border-neutral-800">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
                      alt="David Chen"
                      loading="lazy"
                    />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-medium text-white">David Chen</p>
                    <span className="text-neutral-500 block text-[10px] uppercase tracking-widest mt-1">Head of Sales</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
