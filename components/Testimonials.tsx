import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "The perfect pause in my day. Truly exceptional brews.",
      author: "A. M., Daily Visitor"
    },
    {
      quote: "Quiet space, honest coffee. My new ritual.",
      author: "K. O., Port Harcourt"
    },
    {
      quote: "Every sip feels intentional. Highly recommend.",
      author: "S. L."
    }
  ];

  return (
    <section id="testimonials" className="bg-pause-bg py-32 md:py-48 lg:py-64 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium mb-12 block">
          Moments Shared
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 text-center">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/20 border border-pause-accent/10 rounded-2xl p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-md transition-all duration-500"
            >
              <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight text-pause-text group-hover:scale-[1.02] transition-transform duration-500">
                "{item.quote}"
              </blockquote>
              <cite className="block mt-6 text-sm uppercase tracking-widest text-pause-text/60 not-italic font-medium opacity-80">
                — {item.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;