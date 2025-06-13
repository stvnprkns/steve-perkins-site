// Google Analytics Measurement ID - Replace with your GA4 Measurement ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Check if GA is available
export const existsGaId = GA_MEASUREMENT_ID !== '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && existsGaId) {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize the data layer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
      send_page_view: false, // We'll handle page views manually with Next.js router
    });
  }
};

// Log page views
export const logPageView = (url: string) => {
  if (typeof window !== 'undefined' && existsGaId) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Log specific events
export const logEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && existsGaId) {
    window.gtag('event', action, params);
  }
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  if (typeof window !== 'undefined' && existsGaId) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      transport_type: 'beacon',
      event_callback: () => {
        document.location.href = url;
      },
    });
  } else {
    document.location.href = url;
  }
};
