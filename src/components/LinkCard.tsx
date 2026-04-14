import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, ReactNode } from 'react';

interface LinkCardProps {
  title: string;
  subtitle?: string;
  hoverInfo?: string;
  icon: LucideIcon;
  href?: string;
  delay?: number;
  isFeatured?: boolean;
  isExpandable?: boolean;
  children?: ReactNode;
}

export default function LinkCard({ 
  title, 
  subtitle, 
  hoverInfo,
  icon: Icon, 
  href, 
  delay = 0, 
  isFeatured,
  isExpandable,
  children 
}: LinkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const content = (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          {isFeatured && (
            <span className="bg-bold-accent dark:bg-bold-accent light:bg-slate-900 text-bold-bg dark:text-bold-bg light:text-white text-[10px] font-black px-2 py-0.5 mb-1 self-start uppercase tracking-wider">
              Featured
            </span>
          )}
          <div className="flex items-center gap-4">
            <div className="text-bold-accent dark:text-bold-accent light:text-slate-900 group-hover:scale-110 transition-transform duration-300">
              <Icon size={24} />
            </div>
            <div className="flex flex-col">
              <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-tight leading-tight group-hover:hidden text-slate-900 dark:text-white">
                {title}
              </h3>
              {hoverInfo && (
                <h3 className="font-sans font-extrabold text-xl md:text-2xl uppercase tracking-tight leading-tight hidden group-hover:block text-bold-accent dark:text-bold-accent light:text-slate-900">
                  {hoverInfo}
                </h3>
              )}
              <p className="text-slate-900/40 dark:text-white/40 text-[10px] font-mono uppercase tracking-widest mt-1">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="text-bold-accent dark:text-bold-accent light:text-slate-900 transition-all duration-300">
          {isExpandable ? (
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown size={24} />
            </motion.div>
          ) : (
            <div className="opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 border-t border-white/10 light:border-black/10 mt-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const className = cn(
    "group relative flex p-6 bg-bold-surface light:bg-slate-100 border border-white/10 light:border-slate-300 w-full hover:border-bold-accent light:hover:border-slate-900 transition-all duration-300",
    isExpandable ? "cursor-pointer" : "cursor-pointer"
  );

  if (isExpandable) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.5 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={className}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ x: 10 }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
