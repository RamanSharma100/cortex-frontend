'use client';

import { useEventTracking } from '@/hooks/useEventTracking';
import { useUserIdentification } from '@/hooks/useUserIdentification';
import { usePageTracking } from '@/hooks/usePageTracking';

export function AnalyticsExample() {
  const { trackAgentCreated, trackAgentRun, trackAgentDeleted, trackMcpConnected, trackModelSelected } = useEventTracking();
  const { identifyUser, setUserProperties } = useUserIdentification();

  // Track page views automatically
  usePageTracking();

  const handleAgentCreated = () => {
    trackAgentCreated({
      agent_name: 'My Agent',
      agent_type: 'custom',
    });
  };

  const handleAgentRun = () => {
    trackAgentRun({
      agent_id: 'agent-123',
      duration_ms: 1500,
    });
  };

  const handleAgentDeleted = () => {
    trackAgentDeleted({
      agent_id: 'agent-123',
    });
  };

  const handleMcpConnected = () => {
    trackMcpConnected({
      mcp_server: 'aws-docs',
      connection_time_ms: 250,
    });
  };

  const handleModelSelected = () => {
    trackModelSelected({
      model_name: 'claude-3-sonnet',
      model_provider: 'anthropic',
    });
  };

  const handleIdentifyUser = () => {
    identifyUser('user-123', {
      email: '[email]',
      name: '[name]',
      plan: 'pro',
    });
    setUserProperties({
      signup_date: new Date().toISOString(),
    });
  };

  return (
    <div className="space-y-4 p-4">
      <button onClick={handleAgentCreated} className="px-4 py-2 bg-blue-500 text-white rounded">
        Track Agent Created
      </button>
      <button onClick={handleAgentRun} className="px-4 py-2 bg-blue-500 text-white rounded">
        Track Agent Run
      </button>
      <button onClick={handleAgentDeleted} className="px-4 py-2 bg-blue-500 text-white rounded">
        Track Agent Deleted
      </button>
      <button onClick={handleMcpConnected} className="px-4 py-2 bg-green-500 text-white rounded">
        Track MCP Connected
      </button>
      <button onClick={handleModelSelected} className="px-4 py-2 bg-green-500 text-white rounded">
        Track Model Selected
      </button>
      <button onClick={handleIdentifyUser} className="px-4 py-2 bg-purple-500 text-white rounded">
        Identify User
      </button>
    </div>
  );
}
