'use client';

import {
  trackEvent,
  trackAgentCreated,
  trackAgentRun,
  trackAgentDeleted,
  trackMcpConnected,
  trackModelSelected,
} from '@/services/analytics';

export function useEventTracking() {
  return {
    trackEvent,
    trackAgentCreated,
    trackAgentRun,
    trackAgentDeleted,
    trackMcpConnected,
    trackModelSelected,
  };
}
