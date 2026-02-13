
import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const title = "Pause.";
  const letters = title.split("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleMugClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    setShowMessage(true);

    // Reset after animation
    setTimeout(() => {
      setShowMessage(false);
      setTimeout(() => setIsClicked(false), 1000);
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;
    const colors = ['#5C4033', '#F0EDE6', '#111111'];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > (canvas?.width || 0)) this.x = 0;
        else if (this.x < 0) this.x = (canvas?.width || 0);
        if (this.y > (canvas?.height || 0)) this.y = 0;
        else if (this.y < 0) this.y = (canvas?.height || 0);
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-pause-bg overflow-hidden px-6 md:px-12 pt-20">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="absolute top-[20%] left-[-5%] w-96 h-96 bg-pause-secondary rounded-full blur-[120px] opacity-40 select-none pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        
        <div 
          className="flex-1 text-center md:text-left transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
        >
          <h1 className="font-serif italic text-7xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-[0.85] tracking-tighter text-pause-text select-none flex justify-center md:justify-start overflow-hidden">
            {letters.map((char, index) => (
              <span 
                key={index} 
                className="inline-block animate-letter-in opacity-0"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          
          <div className="mt-8 md:mt-12 max-w-lg animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-xl md:text-2xl lg:text-3xl font-sans font-light tracking-wide text-pause-text/70 leading-relaxed italic">
              Handcrafted coffee. <br className="hidden md:block" />
              Quiet moments. <br className="hidden md:block" />
              Port Harcourt.
            </p>
          </div>
          
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <a href="#menu" className="inline-block border-b border-pause-text pb-1 text-sm uppercase tracking-[0.3em] hover:text-pause-accent hover:border-pause-accent transition-all duration-300">
              Discover the Menu
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div 
            className="relative group cursor-pointer"
            onClick={handleMugClick}
          >
            
            {/* Background Image: Coffee Bag (Refined Hover) */}
            <div 
              className="absolute -top-12 -left-12 md:-top-20 md:-left-20 z-0 animate-fade-in-left opacity-0 transition-transform duration-1000 ease-out"
              style={{ 
                animationDelay: '1.4s',
                transform: `translate3d(0, ${scrollY * 0.25}px, 0) rotate(-12deg)`
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=600"
                alt="Minimalist coffee bag"
                className={`w-32 md:w-48 lg:w-64 object-cover rounded-xl shadow-lg grayscale transition-all duration-1000 ease-out 
                  ${isClicked ? 'opacity-20 translate-x-12' : 'group-hover:rotate-[-8deg] group-hover:-translate-x-6 group-hover:opacity-40'}
                `}
              />
            </div>

            {/* Background Image: Coffee Beans (Refined Hover) */}
            <div 
              className="absolute -bottom-10 -right-6 md:-bottom-16 md:-right-10 z-0 animate-fade-in-left opacity-0 transition-transform duration-1000 ease-out"
              style={{ 
                animationDelay: '1.6s',
                transform: `translate3d(0, ${scrollY * -0.15}px, 0) rotate(8deg)`
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=600"
                alt="Close up of coffee beans"
                className={`w-24 md:w-40 lg:w-56 object-cover rounded-xl shadow-lg transition-all duration-1000 ease-out 
                  ${isClicked ? 'opacity-20 -translate-y-12' : 'group-hover:rotate-[15deg] group-hover:translate-y-6 group-hover:translate-x-4 group-hover:opacity-40'}
                `}
              />
            </div>

            {/* Main Featured Image (Refined Hover: Slight lift and increased shadow) */}
            <div 
              className="relative z-10 animate-fade-in-left transition-transform duration-700 ease-out"
              style={{ 
                animationDelay: '0.8s',
                transform: `translate3d(0, ${scrollY * 0.05}px, 0)`
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542338332-76971ae8c292?auto=format&fit=crop&q=80&w=1200"
                alt="Artisanal coffee experience at Pause"
                className={`w-72 md:w-96 lg:w-[32rem] object-cover rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                  ${isClicked ? 'scale-90 opacity-80 blur-[2px] shadow-sm' : 'group-hover:scale-[1.03] group-hover:-translate-y-4 group-hover:shadow-[0_60px_100px_-15px_rgba(0,0,0,0.25)]'}
                `}
              />
              
              <div className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="font-serif italic text-2xl md:text-4xl text-pause-accent bg-white/60 backdrop-blur-lg px-8 py-4 rounded-full shadow-xl">Enjoy your pause.</span>
              </div>

              <div className={`absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-lg shadow-sm hidden md:block transition-all duration-700 ${isClicked ? 'opacity-0' : 'group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-white group-hover:shadow-lg'}`}>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-pause-accent">Signature Roast No. 01</span>
              </div>
            </div>

            <div className={`absolute inset-0 bg-pause-accent/5 blur-[120px] rounded-full -z-10 opacity-30 transition-opacity duration-700 ${isClicked ? 'opacity-10' : 'group-hover:opacity-50'}`}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in pointer-events-none md:pointer-events-auto" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:mb-6 transition-all duration-500">Scroll</span>
          <svg className="w-6 h-6 text-pause-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes letter-in {
          from { opacity: 0; transform: translateY(100%) rotate(5deg); }
          to { opacity: 1; transform: translateY(0) rotate(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-letter-in {
          animation: letter-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-left {
          opacity: 0;
          animation: fade-in-left 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
