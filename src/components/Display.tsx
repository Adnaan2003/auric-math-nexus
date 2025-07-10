
import React from 'react';
import { Database } from 'lucide-react';

interface DisplayProps {
  display: string;
  expression: string;
  memory: number;
}

export const Display: React.FC<DisplayProps> = ({ display, expression, memory }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 mb-6 border border-yellow-500/30 shadow-inner">
      {/* Memory indicator */}
      {memory !== 0 && (
        <div className="flex items-center gap-2 mb-3">
          <Database size={16} className="text-yellow-400" />
          <span className="text-yellow-400 text-sm font-medium">M: {memory}</span>
        </div>
      )}
      
      {/* Expression */}
      <div className="text-gray-400 text-sm mb-3 min-h-[20px] overflow-x-auto font-mono">
        {expression || '\u00A0'}
      </div>
      
      {/* Main display */}
      <div className="text-right">
        <div className="text-yellow-100 text-4xl lg:text-5xl font-mono font-bold overflow-x-auto bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
          {display}
        </div>
      </div>
    </div>
  );
};
