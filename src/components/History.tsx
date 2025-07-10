
import React from 'react';
import { Trash2, Clock } from 'lucide-react';

interface HistoryProps {
  history: string[];
  onClear: () => void;
  onSelect: (value: string) => void;
}

export const History: React.FC<HistoryProps> = ({ history, onClear, onSelect }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-yellow-500/20 h-fit">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="text-yellow-400" size={20} />
          <h3 className="text-yellow-400 font-semibold">History</h3>
        </div>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>

      <div className="space-y-2 max-h-96 overflow-y-auto">
        {history.length === 0 ? (
          <p className="text-gray-500 text-sm text-center py-8">
            No calculations yet
          </p>
        ) : (
          history.map((calculation, index) => {
            const [expression, result] = calculation.split(' = ');
            return (
              <div
                key={index}
                onClick={() => onSelect(expression)}
                className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors border border-gray-600 hover:border-yellow-500/50"
              >
                <div className="text-gray-300 text-sm">{expression}</div>
                <div className="text-yellow-400 font-mono font-bold">{result}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
