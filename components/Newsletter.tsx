
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="bg-pause-bg py-32 md:py-48 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-[1440px] mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium">
          Stay Connected
        </span>
        
        {!isSubscribed ? (
          <div className="animate-fade-in-up">
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight text-pause-text mt-6 mb-12 max-w-4xl mx-auto">
              Slow mornings, honest moments. Join for exclusive updates and first sips.
            </h2>
            
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-pause-accent/30 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-pause-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-pause-accent text-white px-8 py-4 rounded-xl font-medium uppercase tracking-widest text-sm hover:bg-pause-accent/90 transition-all active:scale-95 shadow-lg shadow-pause-accent/20"
              >
                Join
              </button>
            </form>
            
            <p className="text-sm text-pause-text/60 mt-8 font-light tracking-wide">
              We respect your inbox. No spam, ever.
            </p>
          </div>
        ) : (
          <div className="animate-fade-in py-12">
            <h2 className="font-serif italic text-4xl md:text-5xl text-pause-accent">
              Thank you — welcome to the pause.
            </h2>
            <button 
              onClick={() => setIsSubscribed(false)}
              className="mt-8 text-[10px] uppercase tracking-[0.3em] text-pause-text/40 hover:text-pause-accent transition-colors"
            >
              Sign up with another email
            </button>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
