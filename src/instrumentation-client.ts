import posthog from 'posthog-js';
import env from '@/config/env';

// Initialize PostHog analytics
try {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') {
        ph.debug();
      }
    },
  });
} catch (error) {
  console.error('Failed to initialize PostHog:', error);
}

// Track router transitions
export function onRouterTransitionStart(
  url: string,
  navigationType: 'push' | 'replace' | 'traverse'
) {
  try {
    posthog.capture('$pageview', {
      $current_url: url,
      navigation_type: navigationType,
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}
