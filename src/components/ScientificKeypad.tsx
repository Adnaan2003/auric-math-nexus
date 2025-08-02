
import React from 'react';
import { CalcButton } from './CalcButton';

interface ScientificKeypadProps {
  onInput: (value: string) => void;
  isDegrees: boolean;
}

export const ScientificKeypad: React.FC<ScientificKeypadProps> = ({ onInput, isDegrees }) => {
  // Functions section - left side
  const functionButtons = [
    ['MC', 'MR', 'M+', 'M-'],
    ['sin(', 'cos(', 'tan(', 'ln('],
    ['asin(', 'acos(', 'atan(', 'log('],
    ['x²', 'x³', 'x^y', '√('],
    ['π', 'e', '!', '|x|'],
    ['(', ')', 'mod', 'Ans']
  ];

  // Numbers and operators section - right side
  const numberButtons = [
    ['C', '⌫'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '1/x', '+'],
    ['=', '=', '=', '=']
  ];

  const getButtonClass = (button: string) => {
    if (button === '=') return 'equals';
    if (['C', '⌫'].includes(button)) return 'clear';
    if (['÷', '×', '-', '+', 'mod'].includes(button)) return 'operator';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(button)) return 'number';
    if (['MC', 'MR', 'M+', 'M-', 'Ans'].includes(button)) return 'memory';
    return 'function';
  };

  const getGridSpan = (button: string, section: string, rowIndex: number, colIndex: number) => {
    if (button === '=' && section === 'numbers' && rowIndex === 5) return 'col-span-4';
    if (button === 'C' && section === 'numbers' && rowIndex === 0) return 'col-span-2';
    return '';
  };

  return (
    <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-card/50 rounded-xl sm:rounded-2xl border border-border backdrop-blur-sm">
      {/* Functions Section */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-1">
        {functionButtons.map((row, rowIndex) => 
          row.map((button, colIndex) => (
            <CalcButton
              key={`func-${rowIndex}-${colIndex}`}
              value={button}
              onClick={() => onInput(button)}
              className={getButtonClass(button)}
              size="small"
            />
          ))
        )}
      </div>

      {/* Numbers and Operators Section */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-1">
        {numberButtons.map((row, rowIndex) => 
          row.map((button, colIndex) => {
            if (button === '=' && rowIndex === 5 && colIndex > 0) return null;
            if (button === 'C' && rowIndex === 0 && colIndex > 0) return null;
            
            return (
              <CalcButton
                key={`num-${rowIndex}-${colIndex}`}
                value={button}
                onClick={() => onInput(button)}
                className={`${getButtonClass(button)} ${getGridSpan(button, 'numbers', rowIndex, colIndex)}`}
                size="small"
              />
            );
          })
        )}
      </div>
    </div>
  );
};
