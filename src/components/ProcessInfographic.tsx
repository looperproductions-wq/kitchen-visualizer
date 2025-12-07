import React from 'react';
import { X, Globe, Server, Cpu, ArrowRight, User, ShieldCheck } from 'lucide-react';
interface ProcessInfographicProps { onClose: () => void; }
export const ProcessInfographic: React.FC<ProcessInfographicProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white z-10">
          <div><h2 className="text-2xl font-bold text-slate-900">System Architecture</h2><p className="text-slate-500">How your website talks to the AI</p></div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors"><X className="w-6 h-6 text-slate-500" /></button>
        </div>
        <div className="p-8 overflow-y-auto bg-slate-50/50">
           {/* Simple graphic representation for zip download to save space... see live app for full graphic */}
           <div className="text-center text-slate-600">Please refer to the live app for full infographic.</div>
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end"><button onClick={onClose} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors">Close</button></div>
      </div>
    </div>
  );
};