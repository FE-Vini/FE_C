import React, { useEffect } from 'react';

export default function VideoSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Wir zeigen dir, wie wir arbeiten:
        </h2>
        <div className="max-w-4xl mx-auto">
          <div style={{padding:'56.25% 0 0 0', position:'relative'}} className="rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://player.vimeo.com/video/1071348572?h=49e45c9563&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
              title="FE Consulting"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}