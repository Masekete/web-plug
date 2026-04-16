// Vercel Speed Insights initialization
// This script injects the Speed Insights tracking code
(function() {
  // Initialize the Speed Insights queue
  if (window.si) return;
  
  window.si = function() {
    (window.siq = window.siq || []).push(arguments);
  };

  // Create and inject the script
  const script = document.createElement('script');
  script.src = '/_vercel/speed-insights/script.js';
  script.defer = true;
  script.dataset.sdkn = '@vercel/speed-insights';
  script.dataset.sdkv = '1.3.1';
  
  script.onerror = function() {
    console.log(
      '[Vercel Speed Insights] Failed to load script. Please check if Speed Insights is enabled in your Vercel dashboard.'
    );
  };
  
  document.head.appendChild(script);
})();
