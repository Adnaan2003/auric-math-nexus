
import React from 'react';
import { Database } from 'lucide-react';

interface DisplayProps {
  display: string;
  expression: string;
  memory: number;
}

export const Display: React.FC<DisplayProps> = ({ display, expression, memory }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-6 mb-8 border border-yellow-500/30 shadow-inner relative overflow-hidden">
      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-6 h-full w-full">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-yellow-500/20" />
          ))}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-500/5 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Memory indicator */}
        {memory !== 0 && (
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1 rounded-lg bg-yellow-400/20 border border-yellow-500/30">
              <Database size={16} className="text-yellow-400" />
            </div>
            <span className="text-yellow-400 text-sm font-medium bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
              Memory: {memory}
            </span>
          </div>
        )}
        
        {/* Expression */}
        <div className="text-gray-400 text-base mb-4 min-h-[24px] overflow-x-auto font-mono tracking-wide">
          <div className="inline-flex items-center gap-2">
            <span className="text-green-400 text-sm">f(x) =</span>
            <span className="text-yellow-300/80">
              {expression || '\u00A0'}
            </span>
          </div>
        </div>
        
        {/* Main display */}
        <div className="text-right">
          <div className="text-yellow-100 text-5xl lg:text-6xl font-mono font-bold overflow-x-auto bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent leading-tight">
            <div className="flex items-center justify-end gap-3">
              <span className="animate-pulse text-green-400 text-sm">●</span>
              <span>{display}</span>
            </div>
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
          <span>FutureCalc Pro v2.0</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};
