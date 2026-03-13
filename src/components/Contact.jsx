import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const response = await fetch('https://formspree.io/f/xlgplbna', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-32 bg-black relative border-t border-neutral-900 overflow-hidden">
      
      {/* Interactive Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#404040 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="pt-8"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">
            Initiate <br /> <span className="text-neutral-500">Dialogue.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-neutral-400 text-lg mb-12 max-w-md leading-relaxed">
            Stop relying on outdated marketing models. Partner with us to deploy high-leverage AI workflows and immersive web experiences designed to scale.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="border border-neutral-800 p-8 font-mono text-sm text-neutral-400 bg-neutral-950/50 backdrop-blur-md rounded-lg shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            {/* Terminal glow hover effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-900 relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <span className="text-neutral-600 uppercase tracking-widest text-xs flex items-center gap-2">
                <Terminal className="w-3 h-3" /> system_init.sh
              </span>
            </div>
            <div className="relative z-10 text-xs sm:text-sm">
              <p className="text-neutral-600 mb-4"># Initialize growth sequence algorithm</p>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-2"
              >
                <span className="text-purple-400">const</span> target = <span className="text-green-400">"Your Brand"</span>;
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="mb-2"
              >
                <span className="text-purple-400">await</span> ai.qualifyLeads(target);
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="text-purple-400">await</span> spline.deployWeb3D(target, {"{"} <span className="text-blue-400">conversionOptimization: true</span> {"}"});
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-white z-20"></div>
          <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-white z-20"></div>
          <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-white z-20"></div>
          <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-white z-20"></div>

          <div className="border border-neutral-800 p-8 lg:p-12 bg-neutral-950/80 backdrop-blur-xl shadow-2xl relative z-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              <div className="relative">
                <label 
                  htmlFor="name" 
                  className={`absolute left-0 transition-all duration-300 font-medium ${focusedInput === 'name' || document.getElementById('name')?.value ? '-top-5 text-[10px] text-white' : 'top-2 text-sm text-neutral-500'} uppercase tracking-widest`}
                >
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors rounded-none"
                />
                {focusedInput === 'name' && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                )}
              </div>

              <div className="relative mt-4">
                <label 
                  htmlFor="email" 
                  className={`absolute left-0 transition-all duration-300 font-medium ${focusedInput === 'email' || document.getElementById('email')?.value ? '-top-5 text-[10px] text-white' : 'top-2 text-sm text-neutral-500'} uppercase tracking-widest`}
                >
                  Work Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required 
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-transparent border-b border-neutral-800 py-2 text-white focus:outline-none focus:border-white transition-colors rounded-none"
                />
                {focusedInput === 'email' && (
                  <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                )}
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <label htmlFor="budget" className="text-xs uppercase tracking-widest font-medium text-neutral-500">Monthly Marketing Budget</label>
                <div className="relative group">
                  <select 
                    id="budget"
                    name="budget"
                    onFocus={() => setFocusedInput('budget')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full bg-transparent border border-neutral-800 p-4 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer hover:bg-neutral-900"
                  >
                    <option value="" disabled selected hidden className="bg-neutral-900 text-neutral-500">Select parameter range...</option>
                    <option value="under-5k" className="bg-neutral-900">&lt; $5k / mo</option>
                    <option value="10k-25k" className="bg-neutral-900">$10k - $25k / mo</option>
                    <option value="25k-100k" className="bg-neutral-900">$25k - $100k / mo</option>
                    <option value="100k+" className="bg-neutral-900">$100k+ / mo</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500 group-hover:text-white transition-colors">
                    ▼
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={formState !== 'idle'}
                className="mt-6 relative overflow-hidden flex items-center justify-between w-full bg-white text-black font-semibold py-5 px-8 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Button Hover Glow Layer */}
                <span className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></span>
                
                <AnimatePresence mode="wait">
                  {formState === 'idle' ? (
                    <motion.div 
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between w-full relative z-10"
                    >
                      <span className="tracking-wide uppercase text-sm">Deploy Audit Request</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </motion.div>
                  ) : formState === 'submitting' ? (
                    <motion.div 
                       key="submitting"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       className="flex items-center justify-center w-full relative z-10 font-mono text-sm tracking-widest animate-pulse"
                    >
                      INITIALIZING...
                    </motion.div>
                  ) : (
                    <motion.div 
                       key="success"
                       initial={{ opacity: 0, scale: 0.9 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="flex items-center justify-center w-full relative z-10 text-green-600 font-bold tracking-widest uppercase text-sm"
                    >
                      SYSTEM ENGAGED
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
              
              <div className="text-center text-xs text-neutral-600 font-mono tracking-widest">
                <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                AI QUALIFICATION ACTIVE
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
