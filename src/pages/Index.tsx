
import React, { useState, useEffect, useCallback } from 'react';
import { Calculator } from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
            Futuristic Scientific Calculator
          </h1>
          <p className="text-sm sm:text-base text-gray-300">Advanced calculations with sleek design</p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Index;
