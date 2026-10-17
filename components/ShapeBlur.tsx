import React from 'react';

interface ShapeBlurProps {
  variation?: number;
  pixelRatioProp?: number;
  shapeSize?: number;
  roundness?: number;
  borderSize?: number;
  circleSize?: number;
  circleEdge?: number;
  className?: string;
}

export const ShapeBlur: React.FC<ShapeBlurProps> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      {/* Outer soft blue atmospheric glow */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#002FA7]/40 via-[#002FA7]/20 to-white/30 blur-2xl transform-gpu scale-110"
        style={{ willChange: 'transform, opacity' }}
      />
      {/* Inner vibrant focal ring */}
      <div 
        className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-white/40 via-[#002FA7]/30 to-transparent blur-xl transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />
    </div>
  );
};
