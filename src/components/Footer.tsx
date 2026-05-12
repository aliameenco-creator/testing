import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-display font-bold text-black tracking-tighter">
                NX
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">Nexus AI</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
              Elite AI automation agency helping modern businesses scale through intelligent workflows, custom LLM agents, and precision engineering.
            </p>
            <div className="flex items-center gap-4">
              {/* Social icons placeholders */}
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs font-mono">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Custom AI Agents</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Data Engineering</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">API Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs font-mono">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs font-mono">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-mono">
            &copy; {new Date().getFullYear()} Nexus AI Automation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-500 font-mono">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
