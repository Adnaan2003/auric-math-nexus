
import React from 'react';
import { Calculator, Zap } from 'lucide-react';

interface ModeToggleProps {
  isScientific: boolean;
  onToggle: (isScientific: boolean) => void;
  isDegrees: boolean;
  onAngleToggle: (isDegrees: boolean) => void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({
  isScientific,
  onToggle,
  isDegrees,
  onAngleToggle
}) => {
  return (
    <div className="flex items-center gap-4">
      {/* Mode Toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onToggle(false)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            !isScientific
              ? 'bg-yellow-500 text-gray-900'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Calculator size={16} className="inline mr-1" />
          Standard
        </button>
        <button
          onClick={() => onToggle(true)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isScientific
              ? 'bg-yellow-500 text-gray-900'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Zap size={16} className="inline mr-1" />
          Scientific
        </button>
      </div>

      {/* Angle Mode Toggle */}
      {isScientific && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => onAngleToggle(true)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              isDegrees
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            DEG
          </button>
          <button
            onClick={() => onAngleToggle(false)}
            className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
              !isDegrees
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
            }`}
          >
            RAD
          </button>
        </div>
      )}
    </div>
  );
};
