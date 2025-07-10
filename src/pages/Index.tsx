
import React, { useState, useEffect, useCallback } from 'react';
import { Calculator } from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">
            Futuristic Scientific Calculator
          </h1>
          <p className="text-gray-300">Advanced calculations with sleek design</p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
