import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { X, Calculator, AlertCircle } from 'lucide-react';

interface GraphPlotterProps {
  expression: string;
  isDegrees: boolean;
  onClose: () => void;
}

export const GraphPlotter: React.FC<GraphPlotterProps> = ({ expression, isDegrees, onClose }) => {
  const [xRange, setXRange] = useState({ min: -10, max: 10 });
  const [selectedFunction, setSelectedFunction] = useState('');

  const exampleFunctions = [
    { label: 'Quadratic: x^2', value: 'x^2' },
    { label: 'Cubic: x^3', value: 'x^3' },
    { label: 'Sine: sin(x)', value: 'sin(x)' },
    { label: 'Cosine: cos(x)', value: 'cos(x)' },
    { label: 'Natural Log: ln(x)', value: 'ln(x)' },
    { label: 'Square Root: √(x)', value: '√(x)' },
    { label: 'Exponential: e^x', value: 'e^x' },
  ];

  const evaluateFunction = (expr: string, x: number): number => {
    try {
      let processedExpr = expr
        .replace(/x/g, x.toString())
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, Math.PI.toString())
        .replace(/e(?![0-9])/g, Math.E.toString())
        .replace(/sin\(/g, isDegrees ? `Math.sin(Math.PI/180*` : 'Math.sin(')
        .replace(/cos\(/g, isDegrees ? `Math.cos(Math.PI/180*` : 'Math.cos(')
        .replace(/tan\(/g, isDegrees ? `Math.tan(Math.PI/180*` : 'Math.tan(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**')
        .replace(/e\^/g, 'Math.pow(Math.E,');

      const result = Function('"use strict"; return (' + processedExpr + ')')();
      return typeof result === 'number' && !isNaN(result) && isFinite(result) ? result : null;
    } catch (error) {
      return null;
    }
  };

  const graphData = useMemo(() => {
    const currentExpression = selectedFunction || expression;
    if (!currentExpression || currentExpression === '0') return [];

    const data = [];
    const step = (xRange.max - xRange.min) / 200;

    for (let x = xRange.min; x <= xRange.max; x += step) {
      const y = evaluateFunction(currentExpression, x);
      if (y !== null) {
        data.push({ x: parseFloat(x.toFixed(3)), y: parseFloat(y.toFixed(3)) });
      }
    }

    return data;
  }, [selectedFunction, expression, xRange, isDegrees]);

  const hasValidData = graphData.length > 0;

  const handleFunctionSelect = (func: string) => {
    setSelectedFunction(func);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl border border-green-500/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 border border-green-500/30">
            <Calculator className="text-green-400" size={20} />
          </div>
          <div>
            <h3 className="text-green-400 font-bold text-lg">Function Plotter</h3>
            <p className="text-gray-400 text-xs">f(x) = {selectedFunction || expression || 'Enter function'}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all duration-200 border border-red-500/30"
        >
          <X size={18} />
        </button>
      </div>

      {/* Function Examples */}
      <div className="mb-6 relative z-10">
        <p className="text-gray-300 text-sm mb-3">Quick Examples:</p>
        <div className="grid grid-cols-2 gap-2">
          {exampleFunctions.map((func) => (
            <button
              key={func.value}
              onClick={() => handleFunctionSelect(func.value)}
              className={`p-2 rounded-lg text-xs transition-all duration-200 border ${
                selectedFunction === func.value
                  ? 'bg-green-500/20 text-green-400 border-green-500/50'
                  : 'bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-gray-600/50'
              }`}
            >
              {func.label}
            </button>
          ))}
        </div>
      </div>

      {/* Range Controls */}
      <div className="mb-6 relative z-10">
        <p className="text-gray-300 text-sm mb-3">X-axis Range:</p>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="text-xs text-gray-400">Min:</label>
            <input
              type="number"
              value={xRange.min}
              onChange={(e) => setXRange(prev => ({ ...prev, min: parseFloat(e.target.value) || -10 }))}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-100 text-sm focus:border-green-500/50 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="text-xs text-gray-400">Max:</label>
            <input
              type="number"
              value={xRange.max}
              onChange={(e) => setXRange(prev => ({ ...prev, max: parseFloat(e.target.value) || 10 }))}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-100 text-sm focus:border-green-500/50 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="h-80 bg-gray-900/50 rounded-2xl p-4 border border-gray-700/50 relative z-10">
        {hasValidData ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={graphData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="x" 
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => value.toFixed(1)}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                tickFormatter={(value) => value.toFixed(1)}
              />
              <Line 
                type="monotone" 
                dataKey="y" 
                stroke="#10B981" 
                strokeWidth={2}
                dot={false}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <AlertCircle size={48} className="mb-4 opacity-50" />
            <p className="text-center">
              {!selectedFunction && (!expression || expression === '0') 
                ? 'Enter a function or select an example above'
                : 'Invalid function or no data to plot'
              }
            </p>
            <p className="text-xs mt-2 text-center opacity-75">
              Try functions like: x^2, sin(x), ln(x), etc.
            </p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 relative z-10">
        <p className="text-xs text-gray-400">
          <strong className="text-green-400">Usage:</strong> Enter functions with 'x' as variable. 
          Examples: x^2, sin(x), ln(x), sqrt(x), e^x
        </p>
      </div>
    </div>
  );
};
