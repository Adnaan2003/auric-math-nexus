
import React from 'react';
import { Memory } from 'lucide-react';

interface DisplayProps {
  display: string;
  expression: string;
  memory: number;
}

export const Display: React.FC<DisplayProps> = ({ display, expression, memory }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-6 mb-4 border border-yellow-500/30">
      {/* Memory indicator */}
      {memory !== 0 && (
        <div className="flex items-center gap-2 mb-2">
          <Memory size={16} className="text-yellow-400" />
          <span className="text-yellow-400 text-sm">M: {memory}</span>
        </div>
      )}
      
      {/* Expression */}
      <div className="text-gray-400 text-sm mb-2 min-h-[20px] overflow-x-auto">
        {expression || '\u00A0'}
      </div>
      
      {/* Main display */}
      <div className="text-right">
        <div className="text-yellow-100 text-3xl lg:text-4xl font-mono font-bold overflow-x-auto">
          {display}
        </div>
      </div>
    </div>
  );
};
