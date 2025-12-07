import React, { useState } from 'react';
import { X, Cloud, Code, Shield, Copy, Check, ExternalLink, HelpCircle, FolderUp } from 'lucide-react';

interface DeploymentGuideProps {
  onClose: () => void;
}

export const DeploymentGuide: React.FC<DeploymentGuideProps> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showGithubHelp, setShowGithubHelp] = useState(false);

  const embedCode = `<iframe 
  src="https://your-project.vercel.app" 
  width="100%" 
  height="900px" 
  style="border: none; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="Cabinet Color Visualizer"
></iframe>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col">
        {/* Content omitted for brevity in recursive download */}
        <div className="p-8 text-center">
            <h2 className="text-xl font-bold">Please download the original source code.</h2>
        </div>
      </div>
    </div>
  );
};