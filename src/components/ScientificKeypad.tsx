
import React from 'react';
import { CalcButton } from './CalcButton';

interface ScientificKeypadProps {
  onInput: (value: string) => void;
  isDegrees: boolean;
}

export const ScientificKeypad: React.FC<ScientificKeypadProps> = ({ onInput, isDegrees }) => {
  const scientificButtons = [
    ['C', '⌫', '(', ')', 'MC', 'MR'],
    ['sin(', 'cos(', 'tan(', '÷', 'M+', 'M-'],
    ['asin(', 'acos(', 'atan(', '×', '7', '8'],
    ['ln(', 'log(', '10^(', '-', '4', '5'],
    ['e^(', 'x^2', 'x^3', '+', '1', '2'],
    ['√(', 'x^y', '1/x', '=', '0', '.'],
    ['π', 'e', '!', 'mod', 'Ans', '9'],
    ['|x|', 'x^(', ')', '6', '3']
  ];

  const getButtonClass = (button: string) => {
    if (['='].includes(button)) return 'equals';
    if (['C', '⌫'].includes(button)) return 'clear';
    if (['÷', '×', '-', '+'].includes(button)) return 'operator';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(button)) return 'number';
    if (['MC', 'MR', 'M+', 'M-'].includes(button)) return 'memory';
    return 'function';
  };

  return (
    <div className="grid grid-cols-6 gap-2">
      {scientificButtons.flat().map((button, index) => (
        <CalcButton
          key={index}
          value={button}
          onClick={() => onInput(button)}
          className={getButtonClass(button)}
          size="small"
        />
      ))}
    </div>
  );
};
