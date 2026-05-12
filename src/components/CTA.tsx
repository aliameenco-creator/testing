import { motion } from 'motion/react';
import { ArrowRight, PlaneTakeoff } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Noise/Gradients */}
      <div className="absolute inset-0 bg-[#000]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,59,48,0.15),transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-12 md:p-20 rounded-[40px] border border-white/10 relative overflow-hidden"
        >
          {/* Decorative Corner Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full point-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full point-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mx-auto mb-8 animate-bounce"
            >
              <PlaneTakeoff className="w-8 h-8" />
            </motion.div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-semibold mb-6 tracking-tight"
            >
              Ready to automate <br /> your operations?
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Stop wasting human potential on robotic tasks. Let's build a custom AI ecosystem that scales infinitely without adding headcount.
            </motion.p>

            <motion.form 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input 
                type="email" 
                placeholder="Enter your work email"
                className="flex-1 bg-black/50 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 text-white placeholder-gray-500 transition-all"
                required
              />
              <button 
                type="submit"
                className="glowing-button bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.form>
            <p className="text-xs text-gray-500 mt-6 font-mono">
              Unsubscribe anytime. We respect your data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
