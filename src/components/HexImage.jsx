import React from 'react';
import defaultAvatar from '../assets/avatar.svg';

/**
 * HexImage Component
 * ==================
 * Renders an image inside a precision CSS clip-path hexagon frame
 * with a neon cyan glowing border and an ambient backlight,
 * directly matching the reference portfolio design.
 *
 * @param {string} src - Image path (TODO: Pass your personal photo here)
 * @param {string} alt - Alt description for accessibility
 * @param {string} className - Optional container styling
 */
const HexImage = ({
  // TODO: Replace defaultAvatar with your own photo (e.g. import myPhoto from '../assets/my-photo.jpg')
  src = defaultAvatar,
  alt = 'Ajith P C - Portrait',
  className = '',
}) => {
  return (
    <div className={`relative flex items-center justify-center group ${className}`}>
      {/* Ambient neon cyan backlight glow behind the hexagon */}
      <div
        className="absolute -inset-4 md:-inset-8 rounded-full bg-accent/20 blur-2xl md:blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Hexagon Border Wrapper (drop-shadow hugs the polygon perimeter) */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 hex-glow hex-glow-hover transition-all duration-500">
        {/* Outer Cyan Hexagon Layer (creates the neon border) */}
        <div className="w-full h-full clip-hexagon bg-accent p-[3.5px] sm:p-[4px] transition-transform duration-500 group-hover:scale-[1.02]">
          {/* Inner Dark Background / Image Mask Container */}
          <div className="w-full h-full clip-hexagon bg-bg overflow-hidden relative">
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onError={(e) => {
                // Fallback to default avatar if custom photo fails to load
                e.currentTarget.src = defaultAvatar;
              }}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle inner dark vignette at bottom */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexImage;

