
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
    number: "bg-secondary hover:bg-secondary/80 text-secondary-foreground border-border hover:border-accent shadow-lg hover:shadow-xl",
    
    operator: "bg-primary hover:bg-primary/80 text-primary-foreground font-bold border-primary/50 shadow-lg hover:shadow-xl",
    
    equals: "bg-accent hover:bg-accent/80 text-accent-foreground font-bold border-accent/50 shadow-lg hover:shadow-xl",
    
    'equals-span': "bg-accent hover:bg-accent/80 text-accent-foreground font-bold border-accent/50 shadow-lg hover:shadow-xl col-span-4",
    
    clear: "bg-destructive hover:bg-destructive/80 text-destructive-foreground border-destructive/50 shadow-lg hover:shadow-xl",
    
    function: "bg-muted hover:bg-muted/80 text-muted-foreground font-bold text-sm border-border shadow-lg hover:shadow-xl",
    
    memory: "bg-sidebar-primary hover:bg-sidebar-primary/80 text-sidebar-primary-foreground font-bold text-sm border-sidebar-primary/50 shadow-lg hover:shadow-xl"
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
