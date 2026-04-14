import { useEffect, useRef } from 'react';

export default function BackgroundVisuals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:+-*=&%';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      
      // Match the trail color to the theme background
      ctx.fillStyle = isDark ? 'rgba(5, 5, 5, 0.1)' : 'rgba(226, 232, 240, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        if (isDark) {
          ctx.fillStyle = Math.random() > 0.98 ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)';
        } else {
          // Darker particles for light mode to be visible against slate background
          ctx.fillStyle = Math.random() > 0.98 ? '#0F172A' : 'rgba(15, 23, 42, 0.08)';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-40"
    />
  );
}
