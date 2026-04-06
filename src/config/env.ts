import { z } from 'zod';

const urlSchema = z.string().regex(
  /^https?:\/\/.+/,
  'Must be a valid URL starting with http:// or https://'
);

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: urlSchema,
  NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1, 'PostHog key is required'),
  NEXT_PUBLIC_POSTHOG_HOST: urlSchema,
});

type Env = z.infer<typeof envSchema>;

const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
});

export default env;
export type { Env };
