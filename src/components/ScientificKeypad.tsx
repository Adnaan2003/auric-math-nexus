
import React from 'react';
import { CalcButton } from './CalcButton';

interface ScientificKeypadProps {
  onInput: (value: string) => void;
  isDegrees: boolean;
}

export const ScientificKeypad: React.FC<ScientificKeypadProps> = ({ onInput, isDegrees }) => {
  const scientificButtons = [
    // Row 1 - Memory and Clear functions
    ['MC', 'MR', 'M+', 'M-', 'C', '⌫'],
    // Row 2 - Trigonometric functions
    ['sin(', 'cos(', 'tan(', 'ln(', 'log(', '÷'],
    // Row 3 - Inverse trigonometric functions  
    ['asin(', 'acos(', 'atan(', 'e^(', '10^(', '×'],
    // Row 4 - Power and root functions
    ['x²', 'x³', 'x^y', '√(', '1/x', '-'],
    // Row 5 - Constants and parentheses
    ['π', 'e', '(', ')', 'mod', '+'],
    // Row 6 - Numbers 7-9 with functions
    ['7', '8', '9', '!', '|x|', 'Ans'],
    // Row 7 - Numbers 4-6
    ['4', '5', '6', '1', '2', '3'],
    // Row 8 - Zero, decimal, and equals
    ['0', '.', '=', '=', '=', '=']
  ];

  const getButtonClass = (button: string, rowIndex: number, colIndex: number) => {
    if (button === '=') {
      if (rowIndex === 7 && colIndex >= 2) return 'bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white border-green-500/50 shadow-lg hover:shadow-green-500/25';
      return 'bg-gradient-to-br from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white border-green-500/50 shadow-lg hover:shadow-green-500/25';
    }
    if (['C', '⌫'].includes(button)) return 'bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white border-red-500/50 shadow-lg hover:shadow-red-500/25';
    if (['÷', '×', '-', '+', 'mod'].includes(button)) return 'bg-gradient-to-br from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white border-orange-500/50 shadow-lg hover:shadow-orange-500/25';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(button)) return 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-gray-600/50 shadow-lg hover:shadow-gray-500/25';
    if (['MC', 'MR', 'M+', 'M-', 'Ans'].includes(button)) return 'bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-purple-500/50 shadow-lg hover:shadow-purple-500/25';
    return 'bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-blue-500/50 shadow-lg hover:shadow-blue-500/25';
  };

  const getGridSpan = (button: string, rowIndex: number, colIndex: number) => {
    if (button === '=' && rowIndex === 7 && colIndex === 2) return 'col-span-4';
    return '';
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5 bg-gray-800/40 rounded-xl sm:rounded-2xl border border-gray-700/40 backdrop-blur-sm">
      {scientificButtons.map((row, rowIndex) => 
        row.map((button, colIndex) => {
          if (button === '=' && rowIndex === 7 && colIndex > 2) return null;
          
          return (
            <CalcButton
              key={`${rowIndex}-${colIndex}`}
              value={button}
              onClick={() => onInput(button)}
              className={`${getButtonClass(button, rowIndex, colIndex)} ${getGridSpan(button, rowIndex, colIndex)} transition-all duration-200 hover:scale-105 font-semibold text-xs sm:text-sm border`}
              size="small"
            />
          );
        })
      )}
    </div>
  );
};
