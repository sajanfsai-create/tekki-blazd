import React from 'react';

export default function VideoModal() {
  return (
    <div className="bg-[#051511] p-1 md:p-2 rounded-2xl w-full mx-auto shadow-2xl border border-[rgba(29,158,117,0.2)]">
      <div className="relative pt-[56.25%] w-full rounded-xl overflow-hidden bg-black">
        <iframe 
          className="absolute inset-0 w-full h-full border-0" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="Tekki Blaze Video"
        ></iframe>
      </div>
    </div>
  );
}
