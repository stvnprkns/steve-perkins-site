'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function TestAnalytics() {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    // Test page view tracking
    console.log('Analytics test page loaded');
    
    // Test custom event
    trackEvent('test_event', {
      category: 'test',
      label: 'Analytics test event',
    });
  }, [trackEvent]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Analytics Test Page</h1>
      <p className="mb-4">Check your browser's developer console and network tab to verify analytics are working.</p>
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          trackEvent('test_button_click', {
            category: 'test',
            label: 'Test Button Clicked',
          });
          alert('Test event triggered! Check the network tab for the analytics request.');
        }}
      >
        Send Test Event
      </button>
    </div>
  );
}
