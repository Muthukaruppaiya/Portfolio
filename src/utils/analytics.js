// Analytics utility for Google Analytics 4 (GA4) & Custom Event Tracking

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-MEASUREMENT_ID';

/**
 * Initializes Google Analytics 4 tracking script dynamically
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // Avoid duplicate script tag insertion
  if (document.getElementById('ga-gtag-script')) return;

  // Insert Google Analytics Script Tag
  const script = document.createElement('script');
  script.id = 'ga-gtag-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true,
  });

  console.log(`[Analytics] Google Analytics 4 initialized with ID: ${GA_MEASUREMENT_ID}`);
};

/**
 * Track custom events in GA4 or custom loggers
 * @param {string} eventName - Name of the event (e.g. 'click', 'form_submit')
 * @param {Object} eventParams - Additional metadata parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  console.log(`[Analytics Event] ${eventName}:`, eventParams);
};

/**
 * Track Resume Download event
 */
export const trackResumeDownload = () => {
  trackEvent('download_resume', {
    event_category: 'Engagement',
    event_label: 'Resume PDF Download',
  });
};

/**
 * Track Contact Form Submission
 * @param {string} senderName
 */
export const trackContactSubmit = (senderName = '') => {
  trackEvent('contact_form_submit', {
    event_category: 'Lead',
    event_label: senderName ? `Contact from ${senderName}` : 'Contact Form',
  });
};

/**
 * Track Social link clicks
 * @param {string} platform - e.g. 'LinkedIn', 'GitHub', 'Email', 'Phone'
 */
export const trackSocialClick = (platform) => {
  trackEvent('click_social_link', {
    event_category: 'Outbound Link',
    event_label: platform,
  });
};

/**
 * Track Project views or live link clicks
 * @param {string} projectTitle - e.g. 'H2R Sports', 'Zimson Watches'
 * @param {string} url - Target URL
 */
export const trackProjectClick = (projectTitle, url) => {
  trackEvent('click_project_link', {
    event_category: 'Portfolio Project',
    project_name: projectTitle,
    target_url: url,
  });
};
