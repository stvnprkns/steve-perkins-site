// This script runs on the client side to handle the initial page load

if (typeof window !== 'undefined') {
  // Add a class to the html element when the page is fully loaded
  const handleLoad = () => {
    document.documentElement.classList.add('loaded');
    // Remove the event listener after it runs once
    window.removeEventListener('load', handleLoad);
  };

  // If the page is already loaded, run the handler immediately
  if (document.readyState === 'complete') {
    handleLoad();
  } else {
    // Otherwise, wait for the load event
    window.addEventListener('load', handleLoad);
  }

  // Handle page transitions for client-side navigation
  const handleRouteChangeStart = () => {
    document.documentElement.classList.remove('loaded');
  };

  const handleRouteChangeComplete = () => {
    document.documentElement.classList.add('loaded');
  };

  // Add event listeners for Next.js route changes
  if (window.history) {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      handleRouteChangeStart();
      const result = originalPushState.apply(this, args);
      handleRouteChangeComplete();
      return result;
    };

    window.history.replaceState = function(...args) {
      handleRouteChangeStart();
      const result = originalReplaceState.apply(this, args);
      handleRouteChangeComplete();
      return result;
    };

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
      handleRouteChangeStart();
      // Small delay to allow the page to start rendering
      setTimeout(handleRouteChangeComplete, 50);
    });
  }
}
