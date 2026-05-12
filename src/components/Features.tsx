import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, ShieldCheck, Workflow, BarChart3, Clock, Bot } from 'lucide-react';

const features = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Workflow Orchestration',
    description: 'We map your entire operational lifecycle and replace human bottlenecks with seamless machine precision.'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Custom AI Agents',
    description: 'Bespoke LLM-powered agents trained on your proprietary data to handle customer support, sales, and intake.'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Predictive Analytics',
    description: 'Turn your historical data into an oracle. Anticipate trends, churn, and revenue opportunities before they occur.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Instant Integrations',
    description: 'We connect disparate tools (HubSpot, Slack, Stripe, custom CRMs) into a unified, breathing ecosystem.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: '24/7 autonomous Ops',
    description: 'Your business never sleeps. AI systems process tasks, manage pipelines, and execute commands continuously.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Enterprise-Grade Security',
    description: 'Military-grade encryption and SOC2 compliant architectures ensure your automated data pipelines are bulletproof.'
  }
];


export default function Features() {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand font-mono text-sm tracking-widest uppercase mb-4"
            >
              <Sparkles className="w-4 h-4" /> Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-semibold tracking-tight"
            >
              Intelligence infused into <br className="hidden md:block"/> every process.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md"
          >
            We don't just integrate tools; we architect ecosystems that think, react, and scale on their own.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => (
            <FeatureCard key={index} feature={feat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({ feature, index }: { feature: { icon: ReactNode, title: string, description: string }, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-brand/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {feature.description}
      </p>
      
      {/* Bottom glowing line on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-brand w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
