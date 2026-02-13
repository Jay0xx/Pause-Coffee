import React from 'react';

export default function InstagramFeed() {
  const images = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
    "https://thumbs.dreamstime.com/b/takeaway-coffee-cup-creamy-latte-art-bathed-soft-natural-light-warm-cafe-concept-perfect-modern-culture-to-go-cozy-361996359.jpg",
    "https://thumbs.dreamstime.com/b/close-up-shot-shows-pile-roasted-coffee-beans-against-clean-light-gray-background-rich-brown-color-showcasing-425946704.jpg",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    "https://thumbs.dreamstime.com/b/two-cups-cappuccino-latte-art-wooden-table-cafe-closeup-view-morning-scene-fresh-hot-drinks-atmosphere-367378670.jpg",
    "https://thumbs.dreamstime.com/b/macro-shot-roasted-coffee-beans-rich-dark-brown-tones-glossy-textures-perfect-branding-caf-promotions-beverage-362220661.jpg"
  ];

  return (
    <section id="instagram" className="bg-pause-bg py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.5em] text-pause-accent font-medium mb-12 block">
          See More on Instagram
        </span>

        {/* Mobile: Horizontal Scroll | Desktop: Grid 2-3-4 */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 lg:gap-10 pb-8 md:pb-0 no-scrollbar grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-full snap-center group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl shadow-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-md"
            >
              <img
                src={src}
                alt={`Instagram moment ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Ultra-subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}