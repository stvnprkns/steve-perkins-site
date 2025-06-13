import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { logPageView, initGA } from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Google Analytics on component mount
    initGA();
  }, []);

  useEffect(() => {
    // Track page view when URL changes
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      logPageView(url);
    }
  }, [pathname, searchParams]);

  // Function to track custom events
  const trackEvent = (action: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.gtag?.('event', action, params);
    }
  };

  return { trackEvent };
}

// Hook to track clicks on specific elements
export function useClickTracker(elementId: string, eventName: string, eventParams = {}) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleClick = () => {
      trackEvent(`click_${eventName}`, {
        event_category: 'engagement',
        event_label: elementId,
        ...eventParams,
      });
    };

    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, [elementId, eventName, eventParams, trackEvent]);
}
