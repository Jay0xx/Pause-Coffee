import React from 'react';

export default function WhatsAppCTA() {
  const phoneNumber = "2340000000000"; // Placeholder for Port Harcourt number
  const message = encodeURIComponent("Hi Pause Coffee, I'd like to order a curated brew.");

  return (
    <div className="fixed bottom-8 right-8 z-50 group flex items-center">
      {/* Tooltip Label */}
      <span className="mr-4 px-4 py-2 bg-pause-text text-white text-[10px] uppercase tracking-[0.2em] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none shadow-xl">
        Order Coffee
      </span>

      {/* Floating Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pause-accent text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(92,64,51,0.3)] hover:shadow-[0_25px_60px_rgba(92,64,51,0.5)] hover:scale-110 active:scale-95 transition-all duration-500 border border-white/10"
        aria-label="Order via WhatsApp"
      >
        <svg
          className="w-7 h-7 md:w-9 md:h-9"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.039L0 24l6.135-1.61a11.782 11.782 0 005.91 1.586h.005c6.637 0 12.032-5.396 12.035-12.032a11.76 11.76 0 00-3.417-8.481" />
        </svg>
      </a>
    </div>
  );
}
