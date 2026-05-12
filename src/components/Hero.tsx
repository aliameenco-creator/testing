import { motion } from 'motion/react';
import { Network, Bot, Cpu } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated background particles using canvas for high performance
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {x: number, y: number, vx: number, vy: number, size: number}[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5
      });
    }

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 59, 48, 0.4)'; // brand color
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for(let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 59, 48, ${0.15 - dist/1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
      />
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        <div className="flex flex-col items-start text-left pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Next-Gen Intelligent Automation</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] leading-[1.05] font-display font-semibold tracking-tight mb-6"
          >
            Automate the <br className="hidden md:block"/>
            <span className="brand-gradient-action relative">
              Impossible.
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
                className="absolute bottom-1 left-0 h-[4px] bg-brand opacity-50"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-lg mb-10 font-light leading-relaxed"
          >
            We build custom AI ecosystems that replace busywork with precision. Scale your agency's operations without scaling your headcount.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="glowing-button bg-brand text-white px-8 py-4 rounded-full font-medium text-lg min-w-[200px] hover:scale-105 active:scale-95 transition-transform">
              Book Strategy Call
            </button>
            <button className="px-8 py-4 rounded-full font-medium text-lg min-w-[200px] border border-white/20 hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              View Case Studies
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-gray-800">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-brand text-sm">★★★★★</div>
              <span className="text-xs text-gray-400 font-mono mt-1">Trusted by 50+ agencies</span>
            </div>
          </motion.div>
        </div>

        {/* Abstract 3D / Animated Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] lg:h-[600px] hidden md:block" // Hidden on small screens to save space
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 glass-panel overflow-hidden">
            {/* Animated UI Elements simulating AI working */}
            <div className="absolute inset-4 rounded-2xl border border-white/5 bg-black/40 flex flex-col p-6 font-mono text-xs text-brand/70 gap-3 overflow-hidden">
              <motion.div 
                animate={{ y: [0, -100] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="flex flex-col gap-2"
              >
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 opacity-60">
                    <span className="text-gray-600">[{new Date().toISOString().split('T')[1].substring(0,8)}]</span>
                    <span className="text-brand/80">SYS_EXEC_PROC</span>
                    <span className="text-gray-400">ANALYZING_DATA_STREAM_{100 + i * 17}...</span>
                    <span className="text-green-500 ml-auto">OK</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Floating interactive cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-16 w-48 glass-panel p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <Network className="w-4 h-4" />
                </div>
                <div className="text-sm font-medium">Neural Sync</div>
              </div>
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "30%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="h-full bg-brand"
                />
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-8 bottom-24 w-56 glass-panel p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-sm font-medium">Processing Output</div>
              </div>
              <div className="text-2xl font-display font-bold">+284.5%</div>
              <div className="text-xs text-gray-400 mt-1">Efficiency Delta</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
