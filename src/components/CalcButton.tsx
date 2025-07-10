
import React from 'react';
import { cn } from '@/lib/utils';

interface CalcButtonProps {
  value: string;
  onClick: () => void;
  className?: string;
  size?: 'normal' | 'small';
}

export const CalcButton: React.FC<CalcButtonProps> = ({ 
  value, 
  onClick, 
  className = 'number',
  size = 'normal' 
}) => {
  const baseClasses = cn(
    "rounded-xl font-semibold transition-all duration-200 transform active:scale-95",
    "border shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50",
    "backdrop-blur-sm",
    size === 'small' ? 'h-12 text-sm' : 'h-16 text-lg'
  );

  const variantClasses = {
    number: "bg-gray-700/80 hover:bg-gray-600/80 text-yellow-100 hover:text-white border-gray-600/50 hover:border-yellow-500/50",
    operator: "bg-gradient-to-br from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-gray-900 font-bold border-yellow-500/50 shadow-yellow-500/20",
    equals: "bg-gradient-to-br from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-bold border-yellow-400/50 shadow-yellow-400/30",
    clear: "bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50",
    function: "bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs border-blue-500/50",
    memory: "bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white text-xs border-purple-500/50"
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[className as keyof typeof variantClasses])}
    >
      {value}
    </button>
  );
};
