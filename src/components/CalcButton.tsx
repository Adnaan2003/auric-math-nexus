
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
    "border border-yellow-500/30 shadow-lg hover:shadow-xl",
    "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50",
    size === 'small' ? 'h-12 text-sm' : 'h-16 text-lg'
  );

  const variantClasses = {
    number: "bg-gray-700 hover:bg-gray-600 text-yellow-100 hover:text-white",
    operator: "bg-yellow-600 hover:bg-yellow-500 text-gray-900 font-bold",
    equals: "bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold",
    clear: "bg-red-600 hover:bg-red-500 text-white",
    function: "bg-blue-600 hover:bg-blue-500 text-white text-xs",
    memory: "bg-purple-600 hover:bg-purple-500 text-white text-xs"
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
