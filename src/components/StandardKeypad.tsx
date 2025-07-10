
import React from 'react';
import { CalcButton } from './CalcButton';

interface StandardKeypadProps {
  onInput: (value: string) => void;
}

export const StandardKeypad: React.FC<StandardKeypadProps> = ({ onInput }) => {
  const buttons = [
    ['C', '⌫', '(', ')'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
  ];

  const getButtonClass = (button: string) => {
    if (['='].includes(button)) return 'equals';
    if (['C', '⌫'].includes(button)) return 'clear';
    if (['÷', '×', '-', '+'].includes(button)) return 'operator';
    if (['(', ')'].includes(button)) return 'function';
    return 'number';
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.flat().map((button, index) => (
        <CalcButton
          key={index}
          value={button}
          onClick={() => onInput(button)}
          className={getButtonClass(button)}
        />
      ))}
    </div>
  );
};
