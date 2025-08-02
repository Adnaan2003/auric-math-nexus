
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
      return 'equals';
    }
    if (['C', '⌫'].includes(button)) return 'clear';
    if (['÷', '×', '-', '+', 'mod'].includes(button)) return 'operator';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(button)) return 'number';
    if (['MC', 'MR', 'M+', 'M-', 'Ans'].includes(button)) return 'memory';
    return 'function';
  };

  const getGridSpan = (button: string, rowIndex: number, colIndex: number) => {
    if (button === '=' && rowIndex === 7 && colIndex === 2) return 'col-span-4';
    return '';
  };

  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-3 p-3 sm:p-4 lg:p-5 bg-card/50 rounded-xl sm:rounded-2xl border border-border backdrop-blur-sm">
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
