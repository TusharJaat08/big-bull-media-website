import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { SplineSceneBasic } from './components/ui/demo';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-black text-neutral-200 min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tighter text-white uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">BIG BULL MEDIA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-white text-black px-5 py-2 text-sm font-medium hover:bg-neutral-200 transition-colors hidden sm:block">
            Book Audit
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <SplineSceneBasic />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-neutral-500 text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">© {new Date().getFullYear()} Big Bull Media. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/bigbull-media-456097391/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
