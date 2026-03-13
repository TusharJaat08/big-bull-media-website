import React from 'react';
import { Bot, LineChart, Globe, Zap, Database, BrainCircuit } from 'lucide-react';

const capabilities = [
  {
    icon: <Globe className="w-5 h-5 text-white" />,
    title: 'Immersive Web3D',
    description: 'Bespoke web experiences using Spline that elevate brand perception and increase time-on-site.',
  },
  {
    icon: <Bot className="w-5 h-5 text-white" />,
    title: 'AI Lead Qualification',
    description: 'Custom conversational agents trained on your sales material to qualify inbound traffic 24/7.',
  },
  {
    icon: <Database className="w-5 h-5 text-white" />,
    title: 'Programmatic SEO',
    description: 'LLM-driven taxonomy and content generation engines capable of dominating long-tail search variants quickly.',
  },
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: 'Automated Outbound',
    description: 'Self-healing intent pipelines that scrape data, enrich leads, and build hyper-personalized outbound sequences.',
  },
  {
    icon: <BrainCircuit className="w-5 h-5 text-white" />,
    title: 'Predictive Analytics',
    description: 'Machine learning models measuring CAC and LTV across channels, highlighting invisible opportunities.',
  },
  {
    icon: <LineChart className="w-5 h-5 text-white" />,
    title: 'Growth Retainers',
    description: 'Full-stack marketing embedded within your team, operating purely on quantitative iteration.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-medium mb-6 text-white tracking-tight">Capabilities</h2>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            We bridge the gap between creative design and algorithmic logic. 
            Our suite of services replaces bloated traditional agency models with 
            lean, high-leverage technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="group cursor-default border-t border-neutral-900 pt-8 hover:border-neutral-700 transition-colors"
            >
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {cap.icon}
              </div>
              <h3 className="text-lg font-medium text-white mb-3 tracking-tight">{cap.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
