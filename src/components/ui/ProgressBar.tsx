import React from 'react';

interface ProgressBarProps {
  current: number;
  target: number;
  className?: string;
  showText?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  current, 
  target, 
  className = '',
  showText = true
}) => {
  const percentage = Math.min(Math.round((current / target) * 100), 100);
  
  let barColor = 'bg-blue-500';
  if (percentage >= 75) {
    barColor = 'bg-green-500';
  } else if (percentage >= 25) {
    barColor = 'bg-blue-500';
  } else {
    barColor = 'bg-gray-500';
  }
  
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${barColor} transition-all duration-500 ease-out`} 
          style={{ width: `${percentage}%` }} 
        />
      </div>
      {showText && (
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>{current.toLocaleString('it-IT')} firme</span>
          <span>{Math.round(percentage)}% dell'obiettivo</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;