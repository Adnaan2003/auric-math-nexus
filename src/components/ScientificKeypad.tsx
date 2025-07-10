
import React from 'react';
import { CalcButton } from './CalcButton';

interface ScientificKeypadProps {
  onInput: (value: string) => void;
  isDegrees: boolean;
}

export const ScientificKeypad: React.FC<ScientificKeypadProps> = ({ onInput, isDegrees }) => {
  const scientificButtons = [
    // Row 1 - Memory and Clear
    ['MC', 'MR', 'M+', 'M-', 'C', '⌫'],
    // Row 2 - Advanced functions
    ['sin(', 'cos(', 'tan(', 'ln(', 'log(', '÷'],
    // Row 3 - More functions  
    ['asin(', 'acos(', 'atan(', 'e^(', '10^(', '×'],
    // Row 4 - Powers and roots
    ['x^2', 'x^3', 'x^y', '√(', '1/x', '-'],
    // Row 5 - Constants and operations
    ['π', 'e', '!', '|x|', 'mod', '+'],
    // Row 6 - Parentheses and numbers
    ['(', ')', 'Ans', '7', '8', '9'],
    // Row 7 - Numbers
    ['4', '5', '6', '1', '2', '3'],
    // Row 8 - Zero, decimal, equals
    ['0', '.', '=', '=', '=', '=']
  ];

  const getButtonClass = (button: string, rowIndex: number, colIndex: number) => {
    if (button === '=') {
      if (rowIndex === 7 && colIndex >= 2) return 'equals-span';
      return 'equals';
    }
    if (['C', '⌫'].includes(button)) return 'clear';
    if (['÷', '×', '-', '+'].includes(button)) return 'operator';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(button)) return 'number';
    if (['MC', 'MR', 'M+', 'M-', 'Ans'].includes(button)) return 'memory';
    return 'function';
  };

  const getGridSpan = (button: string, rowIndex: number, colIndex: number) => {
    if (button === '=' && rowIndex === 7 && colIndex === 2) return 'col-span-4';
    return '';
  };

  return (
    <div className="grid grid-cols-6 gap-3 p-4 bg-gray-800/30 rounded-2xl border border-gray-700/30">
      {scientificButtons.map((row, rowIndex) => 
        row.map((button, colIndex) => {
          if (button === '=' && rowIndex === 7 && colIndex > 2) return null;
          
          return (
            <CalcButton
              key={`${rowIndex}-${colIndex}`}
              value={button}
              onClick={() => onInput(button)}
              className={`${getButtonClass(button, rowIndex, colIndex)} ${getGridSpan(button, rowIndex, colIndex)}`}
              size="small"
            />
          );
        })
      )}
    </div>
  );
};
