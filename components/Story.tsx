import React from 'react';

const Story: React.FC = () => {
  return (
    <section 
      id="story"
      className="bg-pause-bg py-32 md:py-48 lg:py-64 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-20">
        
        {/* Text Block */}
        <div className="flex-[1.5] order-2 md:order-1 text-center md:text-left">
          <span className="block text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium mb-10">
            Our Craft
          </span>
          
          <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-pause-text max-w-4xl mx-auto md:mx-0">
            We believe in slow mornings <br className="hidden lg:block" /> 
            and honest moments. <br />
            Single-origin beans sourced <br className="hidden lg:block" />
            with care, hand-brewed in <br className="hidden lg:block" />
            a space that lets you breathe.
          </h2>

          <div className="h-px w-20 md:w-32 bg-pause-accent/30 mx-auto md:mx-0 my-12" />

          <p className="font-serif italic text-2xl md:text-3xl text-pause-accent/80">
            Pause is not just coffee — it's presence.
          </p>
        </div>

        {/* Detail Image */}
        <div className="flex-1 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800" 
              alt="Soft light coffee pour" 
              className="w-48 md:w-64 lg:w-80 object-contain rounded-xl drop-shadow-lg opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-100"
            />
            
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-pause-accent/5 blur-[60px] rounded-full -z-10 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;