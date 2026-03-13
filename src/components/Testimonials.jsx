import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nexus completely transformed our inbound pipeline. We replaced two generic SDRs with their AI qualification agent, and our close rate jumped 45% because sales only speaks to red-hot leads.",
    author: "Sarah Jenkins",
    role: "CMO, CloudScale Inc.",
  },
  {
    quote: "The 3D website they built doesn't just look incredible—it converts. Tying the immersive WebGL experience into a seamless automated backend changed how our investors and customers view us.",
    author: "Marcus Thorne",
    role: "Founder, Zenith Protocol",
  },
  {
    quote: "Within 3 months, their programmatic SEO engine generated over 400 targeted landing pages. Our organic traffic 10x'd, and the AI maintains the content quality automatically.",
    author: "Elena Rodriguez",
    role: "VP Growth, SendFlow",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black relative border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 lg:flex gap-16 justify-between">
        
        <div className="mb-16 lg:mb-0 lg:w-1/3">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-tight">Client <br/> Outcomes</h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            Don't take our word for it. Here's how our hybrid approach of premium design and automation drives real results.
          </p>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group pl-8 relative border-l border-neutral-800 hover:border-white transition-colors"
            >
              <Quote className="absolute -left-3 top-0 w-6 h-6 text-neutral-800 group-hover:text-white transition-colors bg-black py-1" />
              <p className="text-neutral-300 text-xl leading-relaxed mb-6 font-medium tracking-tight">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full group-hover:bg-white transition-colors"></div>
                <div>
                  <h4 className="text-white text-sm font-medium tracking-wide">{t.author}</h4>
                  <p className="text-neutral-500 text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
