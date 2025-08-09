
import React, { useState, useEffect, useCallback } from 'react';
import { Calculator } from '@/components/Calculator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
            Online Scientific Calculator
          </h1>
          <p className="text-sm sm:text-base text-gray-300">Advanced calculations with sleek design</p>
        </div>
        <Calculator />
        
        {/* Website Building Guide Section */}
        <div className="mt-8 lg:mt-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-sm p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
              Build a Clean, Professional Website
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Essential Features</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">1.</span>
                    <span className="text-muted-foreground">A Unique And Relevant Logo</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">2.</span>
                    <span className="text-muted-foreground">A Lightweight, Responsive Theme</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">3.</span>
                    <span className="text-muted-foreground">Clear Navigation Menus</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">4.</span>
                    <span className="text-muted-foreground">No Broken Links Or Under-construction Pages</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">5.</span>
                    <span className="text-muted-foreground">Secure Https Connection</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">6.</span>
                    <span className="text-muted-foreground">Mobile Optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Create Essential Pages Before Applying</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">1.</span>
                    <div>
                      <span className="text-foreground font-medium">About Us:</span>
                      <span className="text-muted-foreground ml-1">Explain Who You Are And What Your Site Offers</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">2.</span>
                    <div>
                      <span className="text-foreground font-medium">Contact Us:</span>
                      <span className="text-muted-foreground ml-1">Provide A Form, Email, Or Social Links</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">3.</span>
                    <div>
                      <span className="text-foreground font-medium">Privacy Policy:</span>
                      <span className="text-muted-foreground ml-1">Detail How You Manage User Data</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">4.</span>
                    <div>
                      <span className="text-foreground font-medium">Disclaimer:</span>
                      <span className="text-muted-foreground ml-1">Especially Important If You Share Advice Or Affiliate Links</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-bold">5.</span>
                    <div>
                      <span className="text-foreground font-medium">Terms & Conditions:</span>
                      <span className="text-muted-foreground ml-1">Outlines User Expectations And Site Rules</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
