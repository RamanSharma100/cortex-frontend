import posthog from 'posthog-js';

export const analyticsEvents = {
  AGENT_CREATED: 'agent_created',
  AGENT_RUN: 'agent_run',
  AGENT_DELETED: 'agent_deleted',
  MCP_CONNECTED: 'mcp_connected',
  MODEL_SELECTED: 'model_selected',
} as const;

export type AnalyticsEvent = typeof analyticsEvents[keyof typeof analyticsEvents];

interface EventProperties {
  [key: string]: any;
}

export const trackAgentCreated = (properties?: EventProperties) => {
  posthog.capture(analyticsEvents.AGENT_CREATED, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const trackAgentRun = (properties?: EventProperties) => {
  posthog.capture(analyticsEvents.AGENT_RUN, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const trackAgentDeleted = (properties?: EventProperties) => {
  posthog.capture(analyticsEvents.AGENT_DELETED, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const trackMcpConnected = (properties?: EventProperties) => {
  posthog.capture(analyticsEvents.MCP_CONNECTED, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const trackModelSelected = (properties?: EventProperties) => {
  posthog.capture(analyticsEvents.MODEL_SELECTED, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const trackEvent = (eventName: string, properties?: EventProperties) => {
  posthog.capture(eventName, {
    timestamp: new Date().toISOString(),
    ...properties,
  });
};

export const identifyUser = (userId: string, properties?: EventProperties) => {
  posthog.identify(userId, properties);
};

export const setUserProperties = (properties: EventProperties) => {
  posthog.people.set(properties);
};

export const resetUser = () => {
  posthog.reset();
};
