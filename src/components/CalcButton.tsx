
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
    "rounded-xl font-semibold transition-all duration-300 transform active:scale-95",
    "border shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    "focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50",
    "backdrop-blur-sm relative overflow-hidden group",
    size === 'small' ? 'h-14 text-base font-bold' : 'h-16 text-lg'
  );

  const variantClasses = {
    number: "bg-gradient-to-br from-gray-700/90 to-gray-800/90 hover:from-gray-600/90 hover:to-gray-700/90 text-yellow-100 hover:text-white border-gray-600/50 hover:border-yellow-500/50 shadow-gray-900/50",
    
    operator: "bg-gradient-to-br from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-gray-900 font-bold border-yellow-500/50 shadow-yellow-500/30 hover:shadow-yellow-400/40",
    
    equals: "bg-gradient-to-br from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-bold border-yellow-400/50 shadow-yellow-400/40 hover:shadow-yellow-300/50",
    
    'equals-span': "bg-gradient-to-br from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-gray-900 font-bold border-yellow-400/50 shadow-yellow-400/40 hover:shadow-yellow-300/50 col-span-4",
    
    clear: "bg-gradient-to-br from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-red-500/50 shadow-red-500/30 hover:shadow-red-400/40",
    
    function: "bg-gradient-to-br from-blue-600/95 to-blue-700/95 hover:from-blue-500/95 hover:to-blue-600/95 text-white font-bold text-sm border-blue-500/60 shadow-blue-600/40 hover:shadow-blue-500/50",
    
    memory: "bg-gradient-to-br from-purple-600/95 to-purple-700/95 hover:from-purple-500/95 hover:to-purple-600/95 text-white font-bold text-sm border-purple-500/60 shadow-purple-600/40 hover:shadow-purple-500/50"
  };

  return (
    <button
      onClick={onClick}
      className={cn(baseClasses, variantClasses[className as keyof typeof variantClasses])}
    >
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      
      {/* Button content with better contrast */}
      <span className="relative z-10 drop-shadow-sm">{value}</span>
    </button>
  );
};
