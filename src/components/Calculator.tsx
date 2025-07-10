
import React, { useState, useEffect, useCallback } from 'react';
import { Display } from './Display';
import { StandardKeypad } from './StandardKeypad';
import { ScientificKeypad } from './ScientificKeypad';
import { History } from './History';
import { ModeToggle } from './ModeToggle';
import { Calculator as CalcIcon, History as HistoryIcon } from 'lucide-react';

export const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [isScientific, setIsScientific] = useState(false);
  const [isDegrees, setIsDegrees] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [memory, setMemory] = useState(0);
  const [lastResult, setLastResult] = useState(0);

  // Safe evaluation function
  const safeEval = (expr: string): number => {
    try {
      // Replace mathematical functions and constants
      let processedExpr = expr
        .replace(/π/g, Math.PI.toString())
        .replace(/e(?![0-9])/g, Math.E.toString())
        .replace(/sin\(/g, isDegrees ? 'Math.sin(Math.PI/180*' : 'Math.sin(')
        .replace(/cos\(/g, isDegrees ? 'Math.cos(Math.PI/180*' : 'Math.cos(')
        .replace(/tan\(/g, isDegrees ? 'Math.tan(Math.PI/180*' : 'Math.tan(')
        .replace(/asin\(/g, isDegrees ? '(180/Math.PI)*Math.asin(' : 'Math.asin(')
        .replace(/acos\(/g, isDegrees ? '(180/Math.PI)*Math.acos(' : 'Math.acos(')
        .replace(/atan\(/g, isDegrees ? '(180/Math.PI)*Math.atan(' : 'Math.atan(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**')
        .replace(/mod/g, '%');

      // Handle factorial
      processedExpr = processedExpr.replace(/(\d+)!/g, (match, num) => {
        const n = parseInt(num);
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result.toString();
      });

      const result = Function('"use strict"; return (' + processedExpr + ')')();
      return typeof result === 'number' && !isNaN(result) ? result : 0;
    } catch (error) {
      console.error('Evaluation error:', error);
      return 0;
    }
  };

  const handleInput = useCallback((value: string) => {
    console.log('Input received:', value);
    
    if (value === 'C') {
      setDisplay('0');
      setExpression('');
    } else if (value === '⌫') {
      if (expression.length > 0) {
        const newExpr = expression.slice(0, -1);
        setExpression(newExpr);
        setDisplay(newExpr || '0');
      }
    } else if (value === '=') {
      if (expression) {
        try {
          const result = safeEval(expression);
          const calculation = `${expression} = ${result}`;
          setHistory(prev => [calculation, ...prev.slice(0, 9)]);
          setDisplay(result.toString());
          setExpression('');
          setLastResult(result);
        } catch (error) {
          setDisplay('Error');
        }
      }
    } else if (value === 'MC') {
      setMemory(0);
    } else if (value === 'MR') {
      setDisplay(memory.toString());
      setExpression(memory.toString());
    } else if (value === 'M+') {
      const current = parseFloat(display) || 0;
      setMemory(prev => prev + current);
    } else if (value === 'M-') {
      const current = parseFloat(display) || 0;
      setMemory(prev => prev - current);
    } else if (value === 'Ans') {
      const newExpr = expression + lastResult.toString();
      setExpression(newExpr);
      setDisplay(newExpr);
    } else {
      const newExpr = display === '0' && !isNaN(Number(value)) ? value : expression + value;
      setExpression(newExpr);
      setDisplay(newExpr);
    }
  }, [display, expression, isDegrees, memory, lastResult]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      const { key } = event;
      
      const keyMap: { [key: string]: string } = {
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4',
        '5': '5', '6': '6', '7': '7', '8': '8', '9': '9',
        '+': '+', '-': '-', '*': '×', '/': '÷',
        '=': '=', 'Enter': '=',
        'Backspace': '⌫',
        'Delete': 'C',
        'Escape': 'C',
        '.': '.',
        '(': '(', ')': ')',
      };

      if (keyMap[key]) {
        handleInput(keyMap[key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleInput]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
      {/* Main Calculator */}
      <div className="flex-1">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border border-yellow-500/20">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <CalcIcon className="text-yellow-400" size={24} />
              <span className="text-yellow-400 font-semibold">Calculator</span>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle
                isScientific={isScientific}
                onToggle={setIsScientific}
                isDegrees={isDegrees}
                onAngleToggle={setIsDegrees}
              />
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition-colors"
              >
                <HistoryIcon size={20} />
              </button>
            </div>
          </div>

          {/* Display */}
          <Display 
            display={display} 
            expression={expression}
            memory={memory}
          />

          {/* Keypad */}
          <div className="mt-6">
            {isScientific ? (
              <ScientificKeypad onInput={handleInput} isDegrees={isDegrees} />
            ) : (
              <StandardKeypad onInput={handleInput} />
            )}
          </div>
        </div>
      </div>

      {/* History Sidebar */}
      {showHistory && (
        <div className="lg:w-80">
          <History 
            history={history} 
            onClear={() => setHistory([])}
            onSelect={(value) => {
              setExpression(value);
              setDisplay(value);
            }}
          />
        </div>
      )}
    </div>
  );
};
