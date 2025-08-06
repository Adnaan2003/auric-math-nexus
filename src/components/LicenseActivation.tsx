import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Gift, CheckCircle, XCircle } from 'lucide-react';

const VALID_LICENSE_KEYS = [
  'FREE-STUDENT-100',
  'TEACHER-ACCESS-2025',
  'OPEN-MATH-TRIAL'
];

export const LicenseActivation = () => {
  const [licenseKey, setLicenseKey] = useState('');
  const [isActivated, setIsActivated] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate activation delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (VALID_LICENSE_KEYS.includes(licenseKey.trim().toUpperCase())) {
      setIsActivated(true);
      setError('');
    } else {
      setError('❌ Invalid License Key. Please try again.');
    }
    
    setLoading(false);
  };

  if (isActivated) {
    return (
      <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200 dark:from-emerald-950/20 dark:to-green-950/20 dark:border-emerald-800/30">
        <CardHeader className="pb-4">
          <CardTitle className="text-emerald-700 dark:text-emerald-400 text-lg font-semibold flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            🎁 Free License Access
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-3">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg border border-emerald-200 dark:border-emerald-800/50">
              <p className="text-emerald-800 dark:text-emerald-300 font-medium">
                ✅ License Activated! Enjoy full access.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium features are now unlocked for your session.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200 dark:from-yellow-950/20 dark:to-amber-950/20 dark:border-yellow-800/30">
      <CardHeader className="pb-4">
        <CardTitle className="text-yellow-700 dark:text-yellow-400 text-lg font-semibold flex items-center gap-2">
          <Gift className="w-5 h-5" />
          🎁 Free License Access
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="license-key" className="text-sm font-medium text-foreground">
              Enter Free License Key
            </label>
            <Input
              id="license-key"
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="e.g., FREE-STUDENT-100"
              className="bg-background border-input focus:border-ring focus:ring-ring"
              disabled={loading}
            />
          </div>
          
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-destructive text-sm font-medium">{error}</p>
            </div>
          )}
          
          <Button
            type="submit"
            disabled={!licenseKey.trim() || loading}
            className="w-full bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-700 dark:hover:bg-yellow-600 text-white font-semibold"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Activating...
              </div>
            ) : (
              'Activate License'
            )}
          </Button>
          
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-medium">Valid license keys:</p>
            <ul className="space-y-0.5 pl-2">
              <li>• FREE-STUDENT-100</li>
              <li>• TEACHER-ACCESS-2025</li>
              <li>• OPEN-MATH-TRIAL</li>
            </ul>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};