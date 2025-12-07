import React, { useState } from 'react';
import { X, Copy, ExternalLink, Download } from 'lucide-react';

interface DeploymentGuideProps {
  onClose: () => void;
}

export const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative">
         <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
           <X className="w-6 h-6" />
         </button>
         <h2 className="text-xl font-bold mb-4">Deployment</h2>
         <p className="text-slate-600 mb-4">To deploy this application, you need to provide your Gemini API Key in the hosting environment.</p>
         <div className="bg-slate-100 p-4 rounded-lg">
           <p className="font-mono text-sm">API_KEY=your_gemini_api_key</p>
         </div>
      </div>
    </div>
  );
};