
import React from 'react';

interface QuizHeaderProps {
  current: number;
  total: number;
  score: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ current, total, score }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">O'zbekiston Tarixi</h2>
          <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">Test savollari banki</p>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 uppercase">
            Progress: {Math.round(progressPercentage)}%
          </span>
          <span className="text-slate-400 text-sm font-bold">
            {current} / {total}
          </span>
        </div>
      </div>
      
      <div className="w-full bg-slate-100 rounded-full h-3 p-0.5 border border-slate-200/50">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizHeader;
