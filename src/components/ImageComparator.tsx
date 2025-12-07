import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface ImageComparatorProps {
  originalImage: string;
  generatedImage: string;
}

export const ImageComparator: React.FC<ImageComparatorProps> = ({ originalImage, generatedImage }) => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="relative w-full bg-slate-100 rounded-xl overflow-hidden shadow-lg group">
      <img
        src={showOriginal ? `data:image/jpeg;base64,${originalImage}` : `data:image/png;base64,${generatedImage}`}
        alt="Kitchen Preview"
        className="w-full h-auto block transition-opacity duration-300"
      />
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onMouseDown={() => setShowOriginal(true)}
          onMouseUp={() => setShowOriginal(false)}
          onMouseLeave={() => setShowOriginal(false)}
          onTouchStart={() => setShowOriginal(true)}
          onTouchEnd={() => setShowOriginal(false)}
          className="bg-white/90 hover:bg-white text-slate-800 px-4 py-2 rounded-lg font-medium shadow-md flex items-center gap-2 backdrop-blur transition-all active:scale-95 select-none"
        >
          {showOriginal ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          {showOriginal ? "Showing Original" : "Hold to View Original"}
        </button>
      </div>

      <div className="absolute top-4 left-4">
        <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur">
          {showOriginal ? 'Original' : 'AI Preview'}
        </span>
      </div>
    </div>
  );
};