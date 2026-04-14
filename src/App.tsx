import { motion } from 'motion/react';
import { Instagram, ShoppingBag, Globe, MessageCircle, Twitter, Sun, Moon, Github, Link, Linkedin } from 'lucide-react';
import LinkCard from './components/LinkCard';
import BackgroundVisuals from './components/BackgroundVisuals';
import { useState, useEffect } from 'react';
import ProfileImage from '../src/img/profil.jpg';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col md:grid md:grid-cols-[400px_1fr] overflow-x-hidden transition-colors duration-500">
      {/* Futuristic Background Visuals */}
      <BackgroundVisuals />
      
      {/* Running Text Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-15 flex flex-col justify-around opacity-[0.03] dark:opacity-[0.05] py-20">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          <div className="flex shrink-0">
            {Array(5).fill("VISUAL ANIMATION LAWRENCE ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {Array(5).fill("VISUAL ANIMATION LAWRENCE ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex whitespace-nowrap animate-marquee-reverse-slow">
          <div className="flex shrink-0">
            {Array(5).fill("LAWRENCE ANIMATION VISUAL ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {Array(5).fill("LAWRENCE ANIMATION VISUAL ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="flex whitespace-nowrap animate-marquee-slow">
          <div className="flex shrink-0">
            {Array(5).fill("VISUAL LAWRENCE ANIMATION ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {Array(5).fill("VISUAL LAWRENCE ANIMATION ").map((text, i) => (
              <span key={i} className="text-[15vh] font-black uppercase mr-20 text-black dark:text-white">
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-grid opacity-30 dark:opacity-50" />
      <div className="fixed bottom-[-40px] right-[-20px] -z-10 text-[280px] font-black text-black/[0.02] dark:text-white/[0.02] uppercase tracking-[-10px] select-none">
        LINK
      </div>

      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100 dark:bg-bold-surface border border-slate-300 dark:border-white/10 text-slate-900 dark:text-bold-accent hover:scale-110 transition-all shadow-xl"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Profile Section */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 p-10 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-300 dark:border-white/10"
      >
        <div className="relative w-32 h-32 bg-slate-900 dark:bg-bold-accent mb-8 shadow-2xl overflow-hidden">
          <img 
            src={ProfileImage} 
            alt="Profile" 
            className="w-full h-full object-cover mix-blend-multiply grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 dark:bg-bold-bg" />
        </div>

        <div className="inline-block px-3 py-1 bg-slate-900/5 dark:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 self-start text-slate-900 dark:text-white">
          Active / Available
        </div>
        
        <h1 className="font-sans font-black text-5xl md:text-6xl uppercase tracking-tighter leading-[0.9] mb-4 text-slate-900 dark:text-white">
          CALVIN<br />LAWRENCE
        </h1>
        
        <p className="font-mono text-slate-900 dark:text-bold-accent text-xs uppercase tracking-wider mb-12">
          Visual Dynamics & Digital Commerce Interface // v2.04
        </p>

        <div className="mt-auto pt-12 text-[11px] opacity-40 dark:opacity-40 font-mono leading-relaxed uppercase text-slate-900 dark:text-white">
          EST. 2026 / GLOBAL<br />
          DIGITAL ASSETS & CURATED COLLECTIONS<br />
          ENCRYPTED SECURE CHECKOUT
        </div>
      </motion.section>

      {/* Links Section */}
      <main className="relative z-10 p-10 md:p-20 flex flex-col justify-center max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-6">
          
          
          <LinkCard 
            title="Instagram" 
            subtitle="visual narrative"
            hoverInfo="@_lawrence_calvin_0418"
            icon={Instagram} 
            href="https://instagram.com/_lawrence_calvin_0418" 
            delay={0.2}
          />

          <LinkCard 
            title="WhatsApp Sales" 
            subtitle="direct human concierge"
            hoverInfo="+62 895 806 357 615"
            icon={MessageCircle} 
            href="https://wa.me/+62895806357615" 
            delay={0.3}
          />


          <LinkCard 
            title="Github" 
            subtitle="Web Dev Portfolio"
            hoverInfo=""
            icon={Github} 
            href="https://github.com/LawrenceVectus86" 
            delay={0.3}
          />

          <LinkCard 
            title="Visual Animation / Streaming" 
            subtitle="Animation Lyric / Tips Streaming"
            hoverInfo=""
            icon={Link} 
            href="https://lynk.id/_lawrence_calvin_0418" 
            delay={0.3}
          />

          <LinkCard 
            title="Linkedln" 
            subtitle="Profile / Portfolio"
            hoverInfo=""
            icon={Linkedin} 
            href="https://www.linkedin.com/in/calvin-lawrence-983b53258/" 
            delay={0.3}
          />

          

          <LinkCard 
            title="Shop Collection" 
            subtitle="direct commerce interface"
            icon={ShoppingBag} 
            isFeatured
            isExpandable
            delay={0.1}
          >
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group/item relative aspect-square bg-black/5 dark:bg-white/5 overflow-hidden border border-black/5 dark:border-white/5">
                  <img 
                    src={`https://picsum.photos/seed/item${i}/400/400`} 
                    alt={`Product ${i}`} 
                    className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-bold-accent/20 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-slate-100 dark:bg-bold-bg text-[10px] font-black px-3 py-1 uppercase tracking-widest text-slate-900 dark:text-white border border-slate-300 dark:border-white/10">View Details</span>
                  </div>
                </div>
              ))}
            </div>
          </LinkCard>

          
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-10 left-10 md:left-16 z-20 font-mono text-[9px] opacity-30 uppercase tracking-widest hidden md:block text-black dark:text-white">
        &copy; 2026 FUTURA STUDIO GLOBAL // ALL RIGHTS RESERVED // ENCRYPTED_CONNECTION_ESTABLISHED
      </footer>
    </div>
  );
}
