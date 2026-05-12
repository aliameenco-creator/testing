import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Audit & Architecture",
    desc: "We dive deep into your current tech stack and operational bottlenecks. We identify exactly where AI and automation can deliver 10x ROI."
  },
  {
    num: "02",
    title: "Prototype & Build",
    desc: "In weeks, not months. We build the custom LLM agents, connect the APIs, and construct the automated pipelines using best-in-class tools."
  },
  {
    num: "03",
    title: "Deploy & Scale",
    desc: "We rigorously test the ecosystem. Once live, your systems run autonomously, allowing your team to focus strictly on creative and strategic growth."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#020202]">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20vw] leading-none font-display font-bold text-white/[0.02] whitespace-nowrap pointer-events-none tracking-tighter mix-blend-screen">
        SYSTEM DYNAMICS
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-semibold mb-4"
          >
            How we implement <span className="text-brand italic font-normal">intelligence</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A systematic, risk-averse approach to completely overhauling your agency's backend operations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 p-8 pt-12 rounded-3xl bg-transparent border border-white/5 hover:bg-[#0a0a0a] transition-colors group"
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 text-7xl font-display font-bold text-white/5 group-hover:text-brand/20 transition-colors">
                {step.num}
              </div>
              <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xl font-mono text-white mb-6 relative z-10 group-hover:bg-brand group-hover:border-brand transition-colors">
                {index + 1}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
