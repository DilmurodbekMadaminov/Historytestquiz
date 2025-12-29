
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
          <h2 className="text-2xl font-bold text-gray-900">O'zbekiston Tarixi</h2>
          <p className="text-gray-500 font-medium">Test savollari banki</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Savol: {current} / {total}
          </span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default QuizHeader;
