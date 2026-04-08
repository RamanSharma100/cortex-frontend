export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side instrumentation can be added here
    // For now, we're primarily using client-side PostHog
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime instrumentation
  }
}
