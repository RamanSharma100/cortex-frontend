import posthog from 'posthog-js';
import env from '@/config/env';

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') {
          ph.debug();
        }
      },
    });
  }
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties);
  }
};

export const identifyUser = (userId: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.identify(userId, properties);
  }
};

export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.people.set(properties);
  }
};

export default posthog;
